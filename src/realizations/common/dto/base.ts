import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class BaseTokenDTO {
  @IsString()
  @ApiProperty()
  token: string
}

export class BaseTokenAndLoginDTO extends BaseTokenDTO {
  @IsString()
  @ApiProperty()
  login: string
}
