/// <reference types="vite/client" />

const privateImages = import.meta.glob<{ default: string }>(
  "../assets/private/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true }
);

export const ASSETS = {
  foto1: privateImages["../assets/private/carol-1.jpeg"]?.default || null,
  foto2: privateImages["../assets/private/carol-2.jpeg"]?.default || null,
  foto3: privateImages["../assets/private/carol-3.jpeg"]?.default || null,
  fotoPerfil: privateImages["../assets/private/carol-1.jpeg"]?.default || Object.values(privateImages)[0]?.default || null,
  todasFotos: Object.values(privateImages).map(img => img.default),
};
