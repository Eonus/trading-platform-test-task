import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"
import { TransactionInterface, TransactionSymbol } from "src/abstractions/transactions"

export type TransactionDocument = HydratedDocument<Transaction>

@Schema()
export class Transaction implements TransactionInterface {
  @Prop({ required: true, enum: TransactionSymbol })
  symbol: TransactionSymbol

  @Prop({ required: true })
  price: number

  @Prop({ required: true })
  quantity: number

  @Prop({ required: true })
  timestamp: number
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction)
