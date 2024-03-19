import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SolicitationsService } from './solicitations.service';
import { SolicitationsDto } from './dtos/solicitations.dto';

@Controller('solicitations')
export class SolicitationsController {
    constructor(private readonly service: SolicitationsService) {}

    @Post()
    create(@Body() data: SolicitationsDto) {
      return this.service.create(data);
    }

    @Get('/last')
    findLast() {
      return this.service.findLast();
    }

    @Patch(':id')
    update(
      @Param('id') id: string,
      @Body() data: SolicitationsDto,
    ) {
      return this.service.update(+id, data);
    }
  
}
