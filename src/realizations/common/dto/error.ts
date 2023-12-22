import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  IsUUID,
  ValidateNested,
} from "class-validator"

class ErrorDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  message: string
}

export class ErrorResponseDTO {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  requestUuid: string

  @IsObject()
  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => ErrorDTO)
  error: ErrorDTO
}

export class ErrorResponseNoAuthorizationDTO {
  @IsObject()
  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => ErrorDTO)
  error: ErrorDTO
}
