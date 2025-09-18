# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 🚀 Landing Page - Automatizaciones n8n + WhatsApp

Landing page profesional para servicios de automatización con n8n y WhatsApp.

## 🌟 Características

- ⚡ **Diseño moderno** con React + TypeScript + Vite
- 🎨 **Íconos profesionales** con Lucide React
- 📱 **Responsive design** para todos los dispositivos
- 🔒 **Página de políticas de privacidad** incluida
- 🔗 **Hash routing** para compatibilidad con GitHub Pages

## 🛠️ Tecnologías

- React 19
- TypeScript
- Vite
- React Router DOM
- Lucide React
- CSS3 con gradientes y efectos modernos

## 🚀 Despliegue

### GitHub Pages (Automático)
1. Push a la rama `main`
2. GitHub Actions se ejecuta automáticamente
3. El sitio se despliega en: `https://studentuco.github.io/whatsapp-landing/`

### Despliegue manual
```bash
npm run deploy
```

## 💻 Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

## 📁 Estructura del proyecto

```
src/
├── App.tsx              # Página principal
├── PrivacyPolicy.tsx    # Página de políticas
├── AppRouter.tsx        # Configuración de rutas
├── App.css             # Estilos principales
└── main.tsx            # Punto de entrada
```

## 🌐 URLs

- **Página principal:** `/#/`
- **Políticas de privacidad:** `/#/privacy`

## 🎯 Secciones incluidas

### Página Principal
- Header con llamada a la acción
- Beneficios del servicio
- Proceso de trabajo
- Formulario de contacto
- Enlaces a WhatsApp

### Políticas de Privacidad
- Información recopilada
- Uso de datos
- Protección y seguridad
- Derechos del usuario
- Contacto para privacidad

---

Desarrollado con ❤️ para automatizaciones profesionales

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
