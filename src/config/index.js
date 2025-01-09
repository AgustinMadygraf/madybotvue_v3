/*
Path: src/config/index.js
Este script se encarga de cargar la configuración de la aplicación.
*/

console.log('         [INFO ] [src/config/index.js                      ]');

import config from './config.json';
import validateConfig from './validateConfig';

const isProd = process.env.NODE_ENV === 'production';

const finalConfig = {
  ...config,
  API_ENDPOINT: isProd ? config.API_ENDPOINT_PROD : config.API_ENDPOINT_DEV,
  BASE_URL: isProd ? config.BASE_URL_PROD : config.BASE_URL_DEV,
  PHP_ENDPOINT: isProd ? config.PHP_ENDPOINT_PROD : config.PHP_ENDPOINT_DEV,
};


validateConfig(finalConfig);

export default finalConfig;