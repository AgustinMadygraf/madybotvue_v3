/*
Path: src/JS/NetworkCheck/PhpHealthService.js

*/

/*
Path: src/JS/NetworkCheck/PhpHealthService.js
Este script se encarga de verificar la salud del endpoint PHP.
*/

console.log('         [INFO ] [src/JS/NetworkCheck/PhpHealthService.js  ]');

import axios from 'axios';
import AppConfig from '../../config';
import LogService from '../services/LogService';

/**
 * Verifica la salud del endpoint PHP realizando una solicitud GET a la ruta /health-check.
 * @returns {Promise<boolean>} Retorna true si el endpoint PHP está saludable, de lo contrario, false.
 */
export async function checkPhpEndpointHealth() {
  try {
    LogService.info('[PhpHealthService] Verificando salud de PHP_ENDPOINT: ,', AppConfig.PHP_ENDPOINT);
    await axios.get(`${AppConfig.PHP_ENDPOINT}/health-check`);
    LogService.info('[PhpHealthService] PHP_ENDPOINT está saludable.');
    return true;
  } catch (error) {
    LogService.warn('[PhpHealthService] PHP_ENDPOINT no está saludable:', error.message);
    return false;
  }
}