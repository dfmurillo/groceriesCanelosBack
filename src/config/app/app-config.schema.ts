import * as Joi from 'joi';

export const appConfigValidationSchema = Joi.object({
  ENVIRONMENT: Joi.string().valid('dev', 'prod').required(),
  PORT: Joi.number().default(1100),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
  SWAGGER_DESCRIPTION: Joi.string().required(),
  SWAGGER_PATH: Joi.string().required(),
  NAME: Joi.string().required(),
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_PORT: Joi.number().required(),
});
