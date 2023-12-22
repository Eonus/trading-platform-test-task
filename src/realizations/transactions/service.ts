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
  getSymbolStatistics(symbol: TransactionSymbol): Promise<SymbolTransactionStatisticsInterface> {
    throw new Error("Method not implemented.")
  }
}

@Injectable()
export class NestTransactionService extends TransactionService {
  constructor(@InjectModel(Transaction.name) transactionModel: Model<TransactionInterface>) {
    super(transactionModel)
  }
}
