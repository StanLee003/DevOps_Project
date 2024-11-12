# Use the official Nginx image as the base image
FROM nginx:latest

# Copy index.html and assets folder to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/index.html
COPY assets /usr/share/nginx/html/assets

# Expose port 80 to access the web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]