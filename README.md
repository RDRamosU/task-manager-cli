# Task Manager CLI

Herramienta de línea de comandos para gestionar tareas personales desde la terminal. Sin interfaces gráficas, sin servidores — solo comandos simples y datos almacenados localmente.

---

## ¿Qué es?

Task Manager CLI es una aplicación de terminal construida con Node.js que permite crear, listar, completar y eliminar tareas personales. Cada tarea puede tener un título, una prioridad y una categoría, lo que facilita organizarlas según el contexto del usuario.

---

## ¿Cómo funciona el flujo de datos?

```
Usuario escribe un comando
        ↓
CLI interpreta el comando (Commander.js)
        ↓
Lógica de negocio (crear, listar, completar, eliminar)
        ↓
Lectura / escritura en tasks.json
        ↓
Respuesta visual en la terminal
```

No hay base de datos ni servidor. Las tareas se almacenan en un archivo `tasks.json` local, lo que hace la herramienta simple, portable y funcional sin dependencias externas.

---

## Estructura del proyecto

```
task-manager-cli/
├── bin/
│   └── task.js          # Punto de entrada de la aplicación
├── src/
│   ├── commands/
│   │   ├── add.js       # Comando para agregar tareas
│   │   ├── list.js      # Comando para listar tareas
│   │   ├── done.js      # Comando para completar tareas
│   │   ├── delete.js    # Comando para eliminar tareas
│   │   └── clear.js     # Comando para limpiar tareas completadas
│   ├── storage.js       # Lectura y escritura del archivo JSON
│   └── helpers.js       # Generación de IDs y formato visual
├── data/
│   └── tasks.json       # Almacenamiento local de tareas
└── package.json
```

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| Node.js | Entorno de ejecución |
| Commander.js | Interpretación de comandos y flags |
| Chalk | Colores y formato visual en la terminal |
| fs (File System) | Lectura y escritura del archivo JSON |

** Nota: En este caso, el codigo usa CommonJS (require) por eso se usa Chalk@4.
Chalk v5 es solo ES Modules. Por eso, se opto por bajar la versión de chalk
a traves de los comandos: 

	1. npm uninstall chalk
	2. npm install chalk@4


---

## Instalación

**Requisitos:** Node.js v18 o superior

# Entra a la carpeta
cd task-manager-cli

# Instala las dependencias
npm install

# Registra el comando globalmente
npm link
```

---

## Uso

### Agregar una tarea

```bash
task add "Estudiar Node.js" --prioridad alta --categoria estudio
```

### Listar todas las tareas

```bash
task list
```

### Filtrar tareas

```bash
# Solo pendientes
task list --pendientes

# Solo completadas
task list --completadas

# Por prioridad
task list --prioridad alta
```

### Marcar una tarea como completada

```bash
task done 1
```

### Eliminar una tarea

```bash
task delete 2
```

### Limpiar todas las tareas completadas

```bash
task clear
```

---

## Opciones disponibles

| Flag | Descripción | Valores |
|---|---|---|
| `--prioridad` | Prioridad de la tarea | `alta`, `media`, `baja` |
| `--categoria` | Categoría de la tarea | cualquier texto |
| `--pendientes` | Filtrar tareas pendientes | — |
| `--completadas` | Filtrar tareas completadas | — |

---

## Autor

Ruben Dario Ramos Ulate — [rubendario.dev](https://rubendario.dev)