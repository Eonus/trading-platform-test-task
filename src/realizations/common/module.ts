import { Module } from "@nestjs/common"
import { APP_FILTER } from "@nestjs/core"
import { HealthCheckController } from "./controllers/healthcheck"
import { AllExceptionsFilter } from "./filters/error"

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
  controllers: [HealthCheckController],
})
export class CommonModule {}
