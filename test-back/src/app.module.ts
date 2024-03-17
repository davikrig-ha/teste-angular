import { Module } from '@nestjs/common';
import { SolicitationsModule } from './solicitations/solicitations.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Solicitations } from './solicitations/entities/solicitations.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_TYPE_CONN,
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
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
  controllers: [],
  providers: [],
})
export class AppModule {}
