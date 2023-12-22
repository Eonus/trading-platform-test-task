import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { TransactionInterface, TransactionSymbol } from "src/abstractions/transactions"
import { TransactionServiceInterface } from "src/abstractions/transactions/service"
import { SymbolTransactionStatisticsInterface } from "src/abstractions/transactions/statistics"
import { Transaction } from "./schema"

class TransactionService implements TransactionServiceInterface {
  constructor(private transactionModel: Model<TransactionInterface>) {}

  createTransaction(transaction: TransactionInterface): Promise<TransactionInterface> {
    return this.transactionModel.create(transaction)
  }
  async getSymbolStatistics(
    symbol: TransactionSymbol,
  ): Promise<SymbolTransactionStatisticsInterface> {
    const aggregationResult = await this.transactionModel.aggregate([
      { $match: { symbol } },
      {
        $group: {
          _id: null,
          averagePrice: { $avg: "$price" },
          totalCount: { $sum: 1 },
          totalValue: { $sum: { $multiply: ["$price", "$quantity"] } },
        },
      },
    ])

    const [result] = aggregationResult
    return {
      averagePrice: result?.averagePrice ?? 0,
      totalCount: result?.totalCount ?? 0,
      totalValue: result?.totalValue ?? 0,
    }
  }
}

@Injectable()
export class NestTransactionService extends TransactionService {
  constructor(@InjectModel(Transaction.name) transactionModel: Model<TransactionInterface>) {
    super(transactionModel)
  }
}
