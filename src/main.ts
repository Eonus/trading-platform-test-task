import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { AppModule } from "./app.module"
import process from "process"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // TODO: change cors rules before production deploy
  app.enableCors()
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  const config = new DocumentBuilder()
    .setTitle("Trading platform test task")
    .setVersion("1.0")
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("docs", app, document)
  await app.listen(process.env.PORT)
  process.on("unhandledRejection", (reason, promise) => {
    // TODO: change error logging
    console.log("Unhandled Rejection at:", promise, "reason:", reason)
  })
}
bootstrap()
