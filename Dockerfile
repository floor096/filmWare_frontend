FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80


#Explicación:
#Copia todos los archivos estáticos a la carpeta de Nginx.
#Cada página (ej: cines.html) será accesible via /cines.html.