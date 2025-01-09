# Proyecto profebotvue

## Descripción
MadyBot es un proyecto desarrollado en Vue.js que busca implementar un chatbot interactivo y escalable con funcionalidad para gestionar conexiones a endpoints, logs avanzados y configuraciones dinámicas. El objetivo del proyecto es crear una base modular que permita crecer de manera controlada, siguiendo principios de diseño SOLID y patrones de arquitectura.

## Estructura del Proyecto
```
src/
    main.js                                       # Archivo principal
    assets/                                       # Recursos estáticos
    components/                                   # Componentes Vue
    config/                                       # Configuraciones
        config-example.json                       # Ejemplo de configuración
        config.json                               # Configuración personalizada
        index.js                                  # Cargador de configuraciones
        interfaces/                               # Interfaces para tipado
            IAppConfig.js                         # Definición de la interfaz de configuración
    docs/                                         # Documentación
    JS/                                           # Servicios y utilidades JS
        LogService.js                             # Servicio de logs
        interfaces/                               # Interfaces adicionales
            ILogger.js                            # Definición de interfaz para logs
        NetworkCheck/                             # Módulos de verificación de red
            ApiEndpointProvider.js                # Proveedor de endpoints
            index.js                              # Componente Vue para verificación de conexión
            PhpHealthChecker.js                   # Verificador de salud de PHP
```

## Requisitos del Proyecto

### Dependencias
- **Node.js**: Versión 16 o superior.
- **Vue.js**: Versión 3.
- **Axios**: Para la gestión de solicitudes HTTP.
- **Bootstrap**: Para el diseño visual.
- **Dotenv**: Para gestión de variables de entorno (opcional).

### Configuración Inicial
1. Clona el repositorio:
   ```bash
   git clone https://github.com/AgustinMadygraf/profebotvue.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Copia el archivo de ejemplo de configuración:
   ```bash
   cp src/config/config-example.json src/config/config.json
   ```
4. Modifica `src/config/config.json` según tus necesidades.

5. Inicia el servidor de desarrollo:
   ```bash
   npm run serve
   ```

## Características Principales
1. **Gestor de Configuraciones**:
   - Validación de configuraciones en tiempo de ejecución.
   - Separación de entornos `DEV` y `PROD`.

2. **Sistema de Logs**:
   - Logs con niveles configurables (debug, info, warn, error).
   - Formato personalizable con prefijos de contexto.

3. **Comprobación de Conexiones**:
   - Verificación de endpoints usando Axios.
   - Fallback a servicios PHP en caso de fallos en APIs principales.

4. **Escalabilidad**:
   - Estructura modular que permite añadir nuevas funcionalidades de manera progresiva.

