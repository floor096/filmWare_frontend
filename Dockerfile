FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80


#Explicación:
#Copia todos los archivos estáticos a la carpeta de Nginx.
#Expone el puerto 80 para que la aplicación sea accesible.
