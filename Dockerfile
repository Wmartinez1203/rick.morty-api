# Etapa 1: Construcción del proyecto
FROM node:18-alpine AS builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Construir el proyecto
RUN npm run build

# Etapa 2: Servir contenido estático con Nginx
FROM nginx:alpine

# Copiar archivo de configuración personalizado si lo tienes (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Copiar archivos construidos a la carpeta pública de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto por defecto
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
