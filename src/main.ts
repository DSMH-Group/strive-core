// src/main.ts
import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // 1. Global API Prefix
    // Aligns with our /api/v1 spec, excluding health checks from the prefix
    app.setGlobalPrefix('api/v1', {
        exclude: ['health/liveness', 'health/readiness'],
    });

    // Configure OpenAPI/Swagger
    const config = new DocumentBuilder()
        .setTitle('Strive Core Engine API')
        .setDescription('The headless backend for the Strive multi-tenant fitness platform.')
        .setVersion('1.0')
        // Updated: Now accepts Bearer Session Tokens
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'Bearer', // Changed from JWT to Bearer
                name: 'Authorization',
                description: 'Enter your session token (e.g., from your auth cookie)',
                in: 'header',
            },
            'Bearer-auth',
        )
        .build();

    const document = SwaggerModule.createDocument(app, config);

    // Expose the Swagger UI at the /api-docs endpoint
    SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true, // Keeps you logged in during hot reloads!
        },
    });

    // 2. Global Validation Pipe (Crucial for Security)
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // Automatically strip out properties that do not have decorators in the DTO
            forbidNonWhitelisted: true, // Throw a 400 error if unexpected properties are sent
            transform: true, // Automatically transform payloads to DTO class instances
        }),
    );

    // 3. CORS Configuration
    // This is essential for the Next.js App Router and Client Components
    app.enableCors({
        origin: (origin, callback) => {
            // Allow if origin matches your base domain or any of the tenant subdomains
            if (!origin || origin.endsWith('.dsmhgroup.com') || origin === 'http://localhost:3000' || origin === process.env.NEXT_PUBLIC_BASE_URL || origin === 'http://localhost:3001') {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Tenant-ID'],
    });

    // 4. Start the Server
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`🚀 Strive Core Engine is running on port ${port}`);
}
bootstrap();