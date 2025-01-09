### Plan de Trabajo Cronológico

El plan está dividido en **fases**, con **tareas** y **subtareas** organizadas cronológicamente. Se indica qué archivo debe crearse o modificarse junto con el detalle de cada tarea. Este enfoque sigue los principios SOLID para evitar introducir problemas al migrar o escalar.

---

#### **Fase 1: Estructura Inicial**
1. **Crear la estructura básica del proyecto.**
   - **Carpetas:**
     - `src/JS` → Scripts relacionados con componentes `.vue`.
     - `src/JS/services` → Scripts que ofrecen servicios compartidos.
     - `src/JS/config` → Configuración del proyecto.
     - `src/assets` → Archivos estáticos (imágenes, estilos, etc.).
     - `src/components` → Componentes `.vue`.

   - **Archivos:**
     - `src/config/config-example.json` → Archivo base de configuración.
     - `src/config/config.json` → Archivo configurado dinámicamente al iniciar el proyecto.
     - `src/config/validateConfig.js` → Valida que `config.json` esté configurado correctamente.
     - `src/config/index.js` → Centraliza la configuración.
     - `.gitignore` → Agregar `config.json` y `.env`.

---

#### **Fase 2: Configuración Automática**
2. **Automatizar la copia de archivos de configuración.**
   - **Tareas:**
     - Crear un script de inicialización para copiar automáticamente `config-example.json` como `config.json`.
     - Lo mismo para `.env` desde `example.env`.

   - **Archivos:**
     - Crear `src/scripts/setupConfig.js` con las siguientes responsabilidades:
       1. Verificar si `config.json` y `.env` existen.
       2. Si no existen, copiar `config-example.json` y `example.env` como `config.json` y `.env`.
       3. Mostrar mensajes claros en la terminal o consola.

---

#### **Fase 3: Validación y Mensajes Explícitos**
3. **Validar configuraciones y mostrar mensajes.**
   - **Tareas:**
     - Modificar `validateConfig.js` para validar todos los campos requeridos.
     - Crear un mensaje claro en consola si `config.json` o `.env` no están configurados.
     - Integrar la validación en `main.js` y registrar errores si faltan configuraciones.

   - **Archivos:**
     - Modificar `src/main.js` para cargar configuraciones y validar al iniciar.

---

#### **Fase 4: Documentación**
4. **Agregar documentación para iniciar un proyecto.**
   - **Tareas:**
     - Crear un archivo `docs/README.md` con pasos para configurar el proyecto.
     - Documentar la estructura de carpetas y el propósito de cada archivo.

---

#### **Fase 5: Preparar la Migración a TypeScript**
5. **Configurar TypeScript progresivamente.**
   - **Tareas:**
     - Instalar dependencias necesarias para TypeScript (`typescript`, `@vue/cli-plugin-typescript`).
     - Migrar primero los scripts en `src/JS/config` a TypeScript.
     - Crear un archivo de configuración `tsconfig.json` para facilitar la transición.

   - **Archivos:**
     - Migrar `IAppConfig.js` a `IAppConfig.ts`.
     - Migrar `validateConfig.js` a TypeScript.

---

#### **Fase 6: Scripts Específicos de Componentes**
6. **Estructurar scripts por componentes.**
   - **Tareas:**
     - Crear carpetas en `src/JS` que correspondan a cada componente en `src/components`.
     - Organizar los scripts de configuración y servicios como archivos independientes en `src/JS/services` y `src/JS/config`.

---

#### **Fase 7: Integración y Pruebas**
7. **Pruebas y ajustes finales.**
   - **Tareas:**
     - Probar que la configuración inicial y validación funcionan correctamente.
     - Ajustar mensajes en consola y terminal para que sean claros y útiles.
     - Documentar cualquier cambio en `docs/README.md`.
