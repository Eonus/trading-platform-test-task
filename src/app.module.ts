import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { CommonModule } from "./realizations/common/module"

@Module({
  imports: [ConfigModule.forRoot(), CommonModule],
})
export class AppModule {}
