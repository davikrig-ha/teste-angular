import { Module } from '@nestjs/common';
import { SolicitationsService } from './solicitations.service';
import { SolicitationsController } from './solicitations.controller';
import { Solicitations } from './entities/solicitations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitations])],
  providers: [SolicitationsService],
  controllers: [SolicitationsController]
})
export class SolicitationsModule {}
