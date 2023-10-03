FROM httpd:2.4
COPY ./dist/angular-login-jwt/ /usr/local/apache2/htdocs/
COPY .htaccess /usr/local/apache2/htdocs/
