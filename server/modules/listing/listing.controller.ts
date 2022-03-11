import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ListingService } from './listing.service';

@Controller()
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Post('/save')
  async store(@Body() body, @Res() res): Promise<any> {
    try {
      const data = await this.listingService.store(body);

      return res.status(HttpStatus.OK).json({
        message: 'Listagem salva com sucesso.',
        status: HttpStatus.OK,
        data,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Algo deu errado ao tentar salvar.',
        errors: err,
        status: HttpStatus.BAD_REQUEST,
      });
    }
  }
}
