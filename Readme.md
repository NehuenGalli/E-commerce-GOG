# 🎮 E-commerce — Inspirado en GOG

## 📝 Descripción

Este proyecto fue desarrollado como trabajo académico colaborativo con el objetivo de simular el funcionamiento de un e-commerce real de videojuegos, abarcando tanto la experiencia del usuario como la lógica de negocio detrás del sistema: autenticación, búsquedas, reseñas, carritos, pagos y más.

---

## 🌐 Demo en vivo

El proyecto está desplegado en **[Render](https://render.com)** y podés probarlo online:

| Servicio | URL |
|----------|-----|
| 🖥️ **Web (Frontend)** | [https://e-commerce-gog-web.onrender.com](https://e-commerce-gog-web.onrender.com) |
| 🔧 **API (Backend)** | [https://e-commerce-gog-api.onrender.com](https://e-commerce-gog-api.onrender.com) |

> ⚠️ **Nota:** El hosting gratuito de Render pone los servicios en reposo tras ~15 minutos de inactividad. La primera visita después de un período de inactividad puede tardar entre **30 y 50 segundos** en levantar. Una vez activo, funciona con normalidad.

---

## 🧠 Tecnologías Utilizadas

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="50" height="50" alt="JavaScript"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="50" height="50" alt="React"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="50" height="50" alt="React Native"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="50" height="50" alt="Node.js"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" width="50" height="50" alt="Express.js"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="50" height="50" alt="HTML"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="50" height="50" alt="CSS"/>
</div>

* **Backend:** Node.js + Express.js (API REST)
* **Web:** React + JavaScript
* **Mobile:** React Native
* **Estilos:** HTML + CSS

---

## 🗂️ Estructura general del repositorio

```
E-commerce-GOG/
│
├── api/         → Backend (API REST con Express.js)
├── web/         → Aplicación Web (React)
├── mobile/      → Aplicación Mobile (React Native)
└── README.md    → Documentación del proyecto
```

---

## ⚙️ Cómo descargar y ejecutar el proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/NehuenGalli/E-commerce-GOG.git
cd E-commerce-GOG
```

### 2️⃣ Configurar y ejecutar la API REST

```bash
cd api
npm install
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

### 3️⃣ Ejecutar la aplicación web

```bash
cd ../web
npm install
npm run dev
```

Abrí el enlace que aparece en la consola (por defecto `http://localhost:5173`).

### 4️⃣ Ejecutar la aplicación mobile

```bash
cd ../mobile
npm install
npx expo start
```

Escaneá el código QR con la app **Expo Go** para probar la app en tu dispositivo móvil.

---

## 🔗 Enlaces útiles

*  [Enunciado del trabajo práctico](https://github.com/unq-ui/material/tree/master/TPs/2025s1)
*  [Modelo base del proyecto (GogModel)](https://github.com/unq-ui/gog-model-js)

---

📚 Proyecto desarrollado para la **Universidad Nacional de Quilmes (UNQ)** — Materia de **Desarrollo de Interfaces de Usuario**.

