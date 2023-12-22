import { Prop, Schema } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"
import { TransactionInterface, TransactionSymbol } from "src/abstractions/transactions"

export class Transaction implements TransactionInterface {
  symbol: TransactionSymbol
  price: number
  quantity: number
  timestamp: number
}

export type TransactionDocument = HydratedDocument<Transaction>

@Schema()
export class TransactionSchema extends Transaction {
  @Prop({ required: true, enum: TransactionSymbol })
  symbol: TransactionSymbol

  @Prop({ required: true })
  price: number

  @Prop({ required: true })
  quantity: number

  @Prop({ required: true })
  timestamp: number
}
