import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Solicitations } from './entities/solicitations.entity';
import { ILike, Repository } from 'typeorm';
import { SolicitationsDto } from './dtos/solicitations.dto';

@Injectable()
export class SolicitationsService {
  constructor(
    @InjectRepository(Solicitations)
    private repository: Repository<Solicitations>,
  ) {}

  create(dto: SolicitationsDto): Promise<Solicitations> {
    const entity = SolicitationsDto.toEntity(dto);
    entity.id = null;

    return this.repository.save(entity);
  }

  findAll() {
    return this.repository.find();
  }

  async update(id: number, dto: SolicitationsDto): Promise<Solicitations> {
    const entity = SolicitationsDto.toEntity(dto);

    const resp = await this.repository.update(id, entity);
    return await resp.raw;
  }

  async findLast(): Promise<Solicitations | null> {
    const latestSolicitation = await this.repository
      .createQueryBuilder('solicitation')
      .where('solicitation.status IS NULL')
      .orderBy('solicitation.id', 'DESC')
      .getOne();

    return latestSolicitation || null;
  }
}
