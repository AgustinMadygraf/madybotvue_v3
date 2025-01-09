/*
Path: src/JS/NetworkCheck/PhpHealthChecker.js
Este script se encarga de verificar la salud del endpoint PHP.
*/

console.log('         [INFO ] [src/JS/NetworkCheck/PhpHealthChecker.js  ]');

import axios from 'axios';
import AppConfig from '../../config';
import LogService from '../services/LogService';

/**
 * Verifica la salud del endpoint PHP realizando una solicitud GET a la ruta /health-check.
 * @returns {Promise<boolean>} Retorna true si el endpoint PHP está saludable, de lo contrario, false.
 */
export async function checkPhpEndpointHealth() {
  try {
    LogService.info('[PhpHealthChecker] Verificando salud de PHP_ENDPOINT...');
    await axios.get(`${AppConfig.PHP_ENDPOINT}/health-check`);
    LogService.info('[PhpHealthChecker] PHP_ENDPOINT está saludable.');
    return true;
  } catch (error) {
    LogService.warn('[PhpHealthChecker] PHP_ENDPOINT no está saludable:', error.message);
    return false;
  }
}