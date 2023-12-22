import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common"
import { NestTransactionService } from "./service"
import { GetSymbolStatisticsDTO, SymbolTransactionStatisticsDTO, TransactionDTO } from "./dto"
import { ThrottlerGuard } from "@nestjs/throttler"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"

@Controller("transaction")
@ApiTags("transaction")
@UseGuards(ThrottlerGuard)
export class TransactionController {
  constructor(private readonly transactionService: NestTransactionService) {}

  @Post()
  @ApiOperation({ summary: "Create transaction" })
  @ApiResponse({ type: TransactionDTO })
  async createTransaction(@Body() transaction: TransactionDTO) {
    return await this.transactionService.createTransaction(transaction)
  }

  @Get("/symbol/:symbol/statistics/")
  @ApiOperation({ summary: "Get symbol statistics" })
  @ApiResponse({ type: SymbolTransactionStatisticsDTO })
  async getSymbolStatistics(@Param() { symbol }: GetSymbolStatisticsDTO) {
    return await this.transactionService.getSymbolStatistics(symbol)
  }
}
