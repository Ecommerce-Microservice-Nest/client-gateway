import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCTS_MICROSERVICE_PORT: number;
  PRODUCTS_MICROSERVICE_HOST: string;
  ORDERS_MICROSERVICE_PORT: number;
  ORDERS_MICROSERVICE_HOST: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    ORDERS_MICROSERVICE_PORT: joi.number().required(),
    ORDERS_MICROSERVICE_HOST: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env) as {
  error?: joi.ValidationError;
  value: EnvVars;
};

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  productsMicroservicePort: envVars.PRODUCTS_MICROSERVICE_PORT,
  productsMicroserviceHost: envVars.PRODUCTS_MICROSERVICE_HOST,
  ordersMicroservicePort: envVars.ORDERS_MICROSERVICE_PORT,
  ordersMicroserviceHost: envVars.ORDERS_MICROSERVICE_HOST,
};
