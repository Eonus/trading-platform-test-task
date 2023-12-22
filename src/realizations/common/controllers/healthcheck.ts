import { Controller, Get } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"

@ApiTags("HealthCheck")
@Controller("health")
export class HealthCheckController {
  @ApiOperation({ summary: "Check if server is up" })
  @Get("")
  async request() {
    return { status: true }
  }
}
