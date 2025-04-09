import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  environment: process.env.ENVIRONMENT,
  name: process.env.NAME,
  port: Number(process.env.PORT),
  postgresDb: process.env.POSTGRES_DB,
  postgresHost: process.env.POSTGRES_HOST,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  postgresPort: Number(process.env.POSTGRES_PORT),
  postgresUser: process.env.POSTGRES_USER,
  swaggerDescription: process.env.SWAGGER_DESCRIPTION,
  swaggerPath: process.env.SWAGGER_PATH,
  tempIdUser: Number(process.env.TEMP_ID_USER),
}));
