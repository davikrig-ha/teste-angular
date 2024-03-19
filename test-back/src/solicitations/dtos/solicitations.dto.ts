import { Solicitations } from '../entities/solicitations.entity';

export class SolicitationsDto {
    id: number;
    requesterName: string;
    description: string;
    productPrice: number;
    status: boolean;
    observation: string;

  public static toEntity(dto: SolicitationsDto): Solicitations {
    const entity = new Solicitations();

    entity.id = dto.id;
    entity.requesterName = dto.requesterName;
    entity.description = dto.description;
    entity.productPrice = dto.productPrice;
    entity.status = dto.status;
    entity.observation = dto.observation;

    return entity;
  }

  public static toDto(entity: Solicitations) {
    const dto = new SolicitationsDto();

    dto.id = entity.id;
    dto.requesterName = entity.requesterName;
    dto.description = entity.description;
    dto.productPrice = entity.productPrice;
    dto.status = entity.status;
    dto.observation = entity.observation;

    return dto;
  }
}
