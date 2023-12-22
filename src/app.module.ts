import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { CommonModule } from "./realizations/common/module"
import { MongooseModule } from "@nestjs/mongoose"
import { TransactionModule } from "./realizations/transactions/module"
import { ThrottlerModule } from "@nestjs/throttler"

@Module({
  imports: [
    ConfigModule.forRoot(),
    CommonModule,
    ThrottlerModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow("DB_STRING"),
      }),
    }),
    TransactionModule,
  ],
})
export class AppModule {}
