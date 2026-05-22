import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import request from 'supertest';
import {AppModule} from '../src/app.module';
import {SessionAuthGuard} from '../src/common/guards/session-auth.guard';

describe('Users (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        })
            // We mock the Guard to bypass Keycloak cert verification during CI/CD
            .overrideGuard(SessionAuthGuard)
            .useValue({
                canActivate: (context) => {
                    const req = context.switchToHttp().getRequest();
                    // Inject a mock user into the request
                    req.user = { sub: 'mock-keycloak-id', email: 'dev@strive.lk' };
                    return true;
                },
            })
            .compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/api/v1/users/me (GET) - Should return profile', () => {
        return request(app.getHttpServer())
            .get('/api/v1/users/me')
            .expect(200)
            .then((response) => {
                expect(response.body).toHaveProperty('keycloakId', 'mock-keycloak-id');
            });
    });

    afterAll(async () => {
        await app.close();
    });
});