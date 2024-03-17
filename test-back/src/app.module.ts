import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolicitationsModule } from './solicitations/solicitations.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Solicitations } from './solicitations/entities/solicitations.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_TYPE_CONN,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DB_NAME,
      options: {
        encrypt: false,
      },
      synchronize: true,
      entities: [Solicitations],
    } as TypeOrmModuleOptions),
    SolicitationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
