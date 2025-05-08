FROM nginx:alpine

COPY . /usr/share/nginx/html

# Configure nginx to handle single page applications if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"] 