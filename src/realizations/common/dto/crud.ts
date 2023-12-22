import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsNumberString, IsOptional, IsUUID } from "class-validator"

export class FindOneDTO {
  @IsUUID()
  @ApiProperty()
  uuid: string
}

export class ReadManyDTO {
  @IsNumberString()
  @IsOptional()
  @ApiPropertyOptional()
  limit?: number

  @IsNumberString()
  @IsOptional()
  @ApiPropertyOptional()
  skip?: number
}
