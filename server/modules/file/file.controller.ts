import {
  Body,
  Controller,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { Duplex } from 'stream';

@Controller()
export class FileController {
  constructor(private readonly appService: FileService) {}

  private async validate(json: any): Promise<any> {
    const countDigitsValidate = (str: string) => {
      return str?.length === 9;
    };
    const nineValidate = (str: string) => {
      return str?.substring(0, 3) === '9';
    };
    const lengthMessageValidate = (str: string) => {
      return str?.length <= 160;
    };
    json.forEach((item) => {
      item.valid =
        countDigitsValidate(item.phone) &&
        nineValidate(item.phone) &&
        lengthMessageValidate(item.message);
    });
    return await json;
  }

  private bufferToStream(myBuuffer) {
    const tmp = new Duplex();
    tmp.push(myBuuffer);
    tmp.push(null);
    return tmp;
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Body() body, @Res() res, @UploadedFile() file): Promise<any> {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
      path: file.path,
      size: file.size,
      mimetype: file.mimetype,
      buffer: file.buffer,
    };

    const stream = this.bufferToStream(response.buffer);
    const json = file.getJsonFromCsv(stream);

    return await this.validate(json);
  }
}
