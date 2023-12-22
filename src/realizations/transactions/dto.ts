import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsInt, IsNumber, IsPositive } from "class-validator"
import { TransactionInterface, TransactionSymbol } from "src/abstractions/transactions"
import { SymbolTransactionStatisticsInterface } from "src/abstractions/transactions/statistics"

export class SymbolDTO {
  @ApiProperty({ enum: TransactionSymbol })
  @IsEnum(TransactionSymbol)
  symbol: TransactionSymbol
}

export class TransactionDTO extends SymbolDTO implements TransactionInterface {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  price: number

  @ApiProperty()
  @IsInt()
  @IsPositive()
  quantity: number

  @ApiProperty()
  timestamp: number
}

export class GetSymbolStatisticsDTO extends SymbolDTO {}

export class SymbolTransactionStatisticsDTO implements SymbolTransactionStatisticsInterface {
  @ApiProperty()
  averagePrice: number

  @ApiProperty()
  totalCount: number

  @ApiProperty()
  totalValue: number
}
