export enum TransactionSymbol {
  USDT = "USDT",
  BTC = "BTC",
  ETH = "ETH",
  BNB = "BNB",
}

export interface TransactionInterface {
  symbol: TransactionSymbol
  price: number
  quantity: number
  timestamp: number
}
