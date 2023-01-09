# weather-app
You have to run the command
```
npm i
```
To download the one and only package that we are using here which is express.

To run the server you can run the command inside the directory of the project
```
node main.js
```
You should be having a node 9.0> 

Alternatively, if you don't want to download packages. You can use nginx by adding the path to your project to nginx.confg file
```
server {
        listen       3000;
        server_name  localhost;

        location / {
            root   <path to your project>;
            index  index.html index.htm;
        }
}
```

Or even apache by placing your project in /var/html if mac or linux or in htdocs if using xampp in windows.