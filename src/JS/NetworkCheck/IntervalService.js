/*
Path: src/JS/NeworkCheck/IntervalService.js
Este servicio centraliza la configuración de tiempos de intervalos.
*/

import AppConfig from '../../config';

class IntervalService {
  static getDisconnectionCheckInterval() {
    return AppConfig.DISCONNECTION_CHECK_INTERVAL_MS || 15000; // Valor por defecto: 15 segundos
  }

  static getReconnectionDelay() {
    return AppConfig.RECONNECTION_DELAY_MS || 5000; // Valor por defecto: 5 segundos
  }
}

export default IntervalService;
