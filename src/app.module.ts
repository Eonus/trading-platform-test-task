import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { CommonModule } from "./realizations/common/module"
import { TypeOrmModule } from "@nestjs/typeorm"

const ormConfig = require("../ormconfig.js")

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        ormConfig.url = configService.get("DB_STRING")
        return ormConfig
      },
    }),
    CommonModule,
  ],
})
export class AppModule {}
