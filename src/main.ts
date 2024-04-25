    import { NestFactory } from "@nestjs/core"
    import { AppModule } from "./app.module"
    import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
    import { JwtAuthGuard } from "./auth/jwt-auth.guard"
    import { ValidationPipe } from "@nestjs/common"

    async function start() {
        const PORT = process.env.PORT || 5000;
        const cors = require('cors')
        const app = await NestFactory.create(AppModule)
        app.enableCors({
            origin: [
              'https://frontend-qafbxrhgd-aleksandrs-projects-9f773b96.vercel.app',
              'http://localhost:3000'
            ],
            credentials: true
          });
        app.use(cors())

        const config = new DocumentBuilder()
            .setTitle('ZCT')
            .setDescription('ZCT documentation')
            .setVersion('1.0.0')
            .addTag('CIS')
            .build()
        const document = SwaggerModule.createDocument(app, config)
        SwaggerModule.setup('/api/docs', app, document)

        app.useGlobalPipes(new ValidationPipe())
        console.log(app)
        await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
    }

    start()