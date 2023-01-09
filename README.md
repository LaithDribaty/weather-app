# weather-app

To run the server you can run the command inside the directory of the project
```
node main.js
```
You should be having a node 9.0> 

Alternatively you can use nginx by adding the path to your project to nginx.confg file
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
