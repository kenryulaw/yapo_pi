# Ejercicio de decimales de PI

<p>Partiremos de la base de que tenemos instalado Node.JS y configurado correctamente el editor de paquetes npm.</p>

<h3>Instalar las dependencias</h3>
<p> Para instalar express, ejs, y en general las dependencias del proyecto (las cuales deberian estar en el archivo package.json) sólo tendremos que ejecutar este comando en la terminal, en la misma ruta donde coloquemos el proyecto, en el ROOT del proyecto</p>
<pre class="language-markup">
	npm install
</pre>

<p>Al tener las dependencias instaladas, se debe crear la carpeta <b>node_modules</b> dentro del ROOT del proyecto, lo cual indica que ya se deberia lograr ejecutar la aplicación</p>

<h4>En algunas versiones de Ubuntu ocurre que hay que ejecutar ne la consola de la tarminal el comando "npm init -y" para generar la carpeta node_modules. Si no se creó en el paso anterior, entonces se debe ejecutar este ultimo comando</h4>

<h3>Levantar la aplicacion</h3>
<p>
    Para laventar la aplicacion se debe ejecutar el comando "npm start" en la terminal. El proyecto tiene express y nodemon como dependencias y en el archivo package.json se puede apreciar como con nodemon se levanta con el script de inicio la aplicación
</p>
<p>
    Abrir un navegador web y escribir en la barra de URL la direccion "http://localhost:3000/pi/?" donde "?" es un numero que se usa para calcular un numero random y a su vez la cantidad de decimales de PI
    <br>
    Para ejecutar el test unitario se debe ejecutar el comando "npm test"
    
</p>