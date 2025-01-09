/*
Path: src/JS/NetworkCheck/ApiEndpointProvider.js
Este script se encarga de obtener el API_ENDPOINT desde la configuración o desde el backend PHP.
*/

console.log('         [INFO ] [src/JS/NetworkCheck/ApiEndpointProvider.js]');
import LogService from '../services/LogService';
import axios from 'axios';
import AppConfig from '../../config';
import { checkPhpEndpointHealth } from './PhpHealthService.js';

/**
 * Obtiene el API_ENDPOINT desde la configuración o, en caso de fallo, desde el backend PHP.
 * @returns {Promise<string>} Retorna el API_ENDPOINT válido.
 * @throws {Error} Lanza un error si no se puede obtener un API_ENDPOINT válido.
 */
export async function getApiEndpoint() {
  try {
    LogService.info('[ApiEndpointProvider] Intentando usar API_ENDPOINT de config.json');
    await axios.get(`${AppConfig.API_ENDPOINT}/health-check`);
    LogService.info('[ApiEndpointProvider] API_ENDPOINT de config.json funciona CORRECTAMENTE.');
    return AppConfig.API_ENDPOINT;
  } catch (error) {
    LogService.warn('[ApiEndpointProvider] Fallback: Obteniendo API_ENDPOINT desde PHP...');
    try {
      LogService.info('[ApiEndpointProvider] Verificando salud de PHP_ENDPOINT...');
      const isPhpHealthy = await checkPhpEndpointHealth();
      LogService.info('[ApiEndpointProvider] PHP_ENDPOINT:', isPhpHealthy);
      if (!isPhpHealthy) {
        LogService.error('[ApiEndpointProvider] PHP_ENDPOINT no está saludable');
        return '';
      }
      LogService.info('[ApiEndpointProvider] PHP_ENDPOINT está saludable');
      const response = await axios.get(AppConfig.PHP_ENDPOINT);
      LogService.info('[ApiEndpointProvider] Respuesta de PHP:', response.data);
      if (!response.data.endpoint) {
        LogService.warn('[ApiEndpointProvider] El campo "endpoint" está undefined en la respuesta de PHP.');
        return '';
      }
      LogService.info('[ApiEndpointProvider] API_ENDPOINT obtenido desde PHP:', response.data.endpoint, " CORRECTAMENTE."); 
      try{
        LogService.info('[ApiEndpointProvider] Verificando salud de API_ENDPOINT obtenido desde PHP...');
        await axios.get(`${response.data.endpoint}/health-check`);
        LogService.info('[ApiEndpointProvider] API_ENDPOINT obtenido desde PHP está saludable');
        return response.data.endpoint;
      }
      catch (error){
        LogService.error('[ApiEndpointProvider] API_ENDPOINT obtenido desde PHP no está saludable:', error.message);
        return '';
      }
      
    } catch (phpError) {
      LogService.error('[ApiEndpointProvider] Error al obtener API_ENDPOINT desde PHP:', phpError.message);
      return '';
    }
  }
}
