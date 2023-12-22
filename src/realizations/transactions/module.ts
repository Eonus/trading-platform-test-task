import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { Transaction, TransactionSchema } from "./schema"
import { NestTransactionService } from "./service"
import { TransactionController } from "./controller"

@Module({
  imports: [MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }])],
  providers: [NestTransactionService],
  controllers: [TransactionController],
})
export class TransactionModule {}
