import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import * as csvToJson from 'csvtojson';
import { diskStorage } from 'multer';
import { promisify } from 'util';
import * as fs from 'fs';

const DIR_TEMP_FILES = `${__dirname}/../../../temp/`;

@Controller()
export class FileController {
  constructor(private readonly appService: FileService) {}

  private async validate(data: any): Promise<any> {
    const countDigitsValidate = (str: string) => {
      return str?.length === 11;
    };
    const nineValidate = (str: string) => {
      return str?.substr(2, 1) === '9';
    };
    const lengthMessageValidate = (str: string) => {
      return str?.length <= 160;
    };
    data.forEach((item) => {
      const step1 = countDigitsValidate(item.phone);
      const step2 = nineValidate(item.phone);
      const step3 = lengthMessageValidate(item.message);
      item.valid = step1 && step2 && step3;
    });
    return await data;
  }

  private renameKeys(obj, newKeys) {
    const keyValues = Object.keys(obj).map((key) => {
      const newKey = newKeys[key] || key;
      return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: DIR_TEMP_FILES,
      }),
    }),
  )
  async upload(@Body() body, @Res() res, @UploadedFile() file): Promise<any> {
    try {
      const json = await csvToJson({
        noheader: true,
        delimiter: ';',
        alwaysSplitAtEOL: false,
        eol: '\n',
        headers: ['phone', 'message'],
      })
        .fromFile(`${DIR_TEMP_FILES}/${file.filename}`)
        .then((jsonObj) => {
          return jsonObj;
        });

      const unlinkAsync = promisify(fs.unlink);
      await unlinkAsync(`${DIR_TEMP_FILES}${file.filename}`);

      const data = await this.validate(json);

      return res.status(HttpStatus.OK).json({
        message: 'Upload feito com sucesso, verifique o resultado.',
        data: data,
      });
    } catch ($e) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Algo deu errado ao tentar processar o arquivo.',
        errors: $e,
      });
    }
  }
}
