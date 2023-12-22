import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { CommonModule } from "./realizations/common/module"
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [
    ConfigModule.forRoot(),
    CommonModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow("DB_STRING"),
        useNewUrlParser: true,
      }),
    }),
  ],
})
export class AppModule {}
