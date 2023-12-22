import { TransactionInterface, TransactionSymbol } from "."
import { SymbolTransactionStatisticsInterface } from "./statistics"

export interface TransactionServiceInterface {
  createTransaction(transaction: TransactionInterface): Promise<TransactionInterface>
  getSymbolStatistics(symbol: TransactionSymbol): Promise<SymbolTransactionStatisticsInterface>
}
