/*
Path: src/JS/NetworkCheck/ApiService.js
Este archivo provee un servicio para la comunicación con la API principal,
verifica la salud de los endpoints y maneja el reintento de envíos en caso de error.
*/

console.log('         [INFO ] [src/JS/NetworkCheck/ApiService.js        ]');

import LogService from '../services/LogService';
LogService.debug('[ApiService] Cargado configuración de LogService.');
import createHttpClient from './HttpClientFactory';
import IHttpClient from './interfaces/IHttpClient';
import ApiResponseProcessor from './ApiResponseProcessor';
import { getApiEndpoint } from './ApiEndpointProvider';

class ApiService {
  /**
   * Constructor de ApiService.
   * @param {IHttpClient} httpClient - Una instancia que implemente IHttpClient.
   * @param {ApiResponseProcessor} responseProcessor - Una instancia de ApiResponseProcessor.
   */
  constructor(httpClient, responseProcessor) {
    if (!(httpClient instanceof IHttpClient)) {
      LogService.error('[ApiService] El cliente HTTP debe implementar IHttpClient');
      throw new Error('El cliente HTTP debe implementar IHttpClient');
    }
    LogService.debug('[ApiService] Inicializando constructor...');
    this.httpClient = httpClient;
    LogService.debug('[ApiService] Cliente HTTP:', this.httpClient);
    this.responseProcessor = responseProcessor;
    LogService.debug('[ApiService] Procesador de respuestas:', this.responseProcessor);

    // Se inicializa por defecto sin el endpoint.
    this.endpoint = '';
  }

  /**
   * Método asíncrono para establecer el endpoint de la API.
   */
  async init() {
    const endpoint = await getApiEndpoint();
    this.endpoint = `${endpoint}/receive-data`;
    LogService.debug('[ApiService] Endpoint principal de la API:', this.endpoint);
  }

  /**
   * Envía un mensaje a la API.
   * @param {string} prompt_user - El texto que se envía como prompt.
   * @param {object} user_data - Datos adicionales del usuario.
   * @param {boolean} [stream=false] - Indica si se utilizará streaming.
   * @param {number|null} [datetime=null] - Marca de tiempo o null.
   * @returns {Promise<object>} - Respuesta procesada.
   */
  async sendApiMessage(prompt_user, user_data, stream = false, datetime = null) {
    LogService.debug('[ApiService] Enviando mensaje a API - prompt_user:', prompt_user);
    LogService.debug('[ApiService] Enviando mensaje a API - user_data:', user_data);
    LogService.debug('[ApiService] Enviando mensaje a API - stream:', stream);
    LogService.debug('[ApiService] Enviando mensaje a API - datetime:', datetime);
    LogService.debug('Comprobando estado del servidor: ', this.httpClient);

    const maxRetries = 3;
    let attempt = 0;
  
    while (attempt < maxRetries) {
      try {
        LogService.debug(`[ApiService] Intento ${attempt + 1} de ${maxRetries}`);
        const response = await this.httpClient.post(this.endpoint, {
          prompt_user,
          stream,
          datetime: datetime || this._getCurrentTimestamp(),
          user_data,
        });
        LogService.info('[ApiService] Mensaje enviado correctamente');
        return this.responseProcessor.processApiResponse(response.data);
      } catch (error) {
        attempt++;
        LogService.error(`[ApiService] Error al enviar el mensaje (Intento ${attempt} de ${maxRetries}):`, {
          message: error.message,
          stack: error.stack,
          config: error.config,
          response: error.response ? {
            status: error.response.status,
            data: error.response.data,
            headers: error.response.headers,
          } : null,
        });
  
        if (attempt >= maxRetries) {
          LogService.error(`[ApiService] Error al enviar mensaje a la API después de ${maxRetries} intentos: ${error.message}`);
          throw new Error(`Error al enviar mensaje a la API después de ${maxRetries} intentos: ${error.message}`);
        }
      }
    }
  }

  /**
   * Verifica la salud del servidor enviando un GET a /health-check.
   * @returns {Promise<boolean>} - Retorna true si el servidor responde 200 OK.
   */
  async checkServerHealth() {
    LogService.debug('[ApiService] Comprobando estado del servidor');
    LogService.debug('Comprobando estado del servidor: ', this.httpClient);
    try {
      const response = await this.httpClient.get('/health-check');
      LogService.info('[ApiService] Estado del servidor (HTTP):', response.status);
      return response.status === 200;
    } catch (error) {
      LogService.warn('[ApiService] Falló la verificación de salud del servidor:', error.message);
      return false;
    }
  }

  /**
   * @private
   * @returns {number} - Marca de tiempo en segundos.
   */
  _getCurrentTimestamp() {
    return Math.floor(Date.now() / 1000);
  }
}

// Se crea la instancia de ApiService.
const apiServiceInstance = new ApiService(createHttpClient(), new ApiResponseProcessor());

// Se inicializa de forma asíncrona el endpoint usando una IIFE.
(async function initialize() {
  await apiServiceInstance.init();
  LogService.debug('[ApiService] Instancia de ApiService inicializada correctamente.');
})();

// Exportamos la instancia ya inicializada
export default apiServiceInstance;
