/*
Path: src/JS/NetworkCheck/interfaces/ILogger.js
Este script define la interfaz ILogger.
*/

/* eslint-disable */
console.log('         [INFO ] [src/JS/NetworkCheck/interfaces/ILogger.js]');

export default class ILogger {
    /**
     * Registra un mensaje de depuración.
     * @param {...any} args - Argumentos a registrar.
     */
    debug(...args) {
      throw new Error('Método no implementado');
    }
  
    /**
     * Registra un mensaje informativo.
     * @param {...any} args - Argumentos a registrar.
     */
    info(...args) {
      throw new Error('Método no implementado');
    }
  
    /**
     * Registra una advertencia.
     * @param {...any} args - Argumentos a registrar.
     */
    warn(...args) {
      throw new Error('Método no implementado');
    }
  
    /**
     * Registra un mensaje de error.
     * @param {...any} args - Argumentos a registrar.
     */
    error(...args) {
      throw new Error('Método no implementado');
    }
  }