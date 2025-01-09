/*
Path: src/config/validateConfig.js
Este script se encarga de validar la configuración de la aplicación.
*/
import IAppConfig from './interfaces/IAppConfig';

const validateConfig = (config) => {
  const requiredProperties = Object.keys(new IAppConfig());

  requiredProperties.forEach((property) => {
    if (!(property in config)) {
      throw new Error(`La propiedad ${property} es requerida en la configuración.`);
    }
  });
};

export default validateConfig;