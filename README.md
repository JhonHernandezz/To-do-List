
# TO-DO List

Esta aplicación de lista de tareas te ayuda a mantenerte organizado y productivo. Con una interfaz simple e intuitiva, puedes crear, gestionar y priorizar tus tareas diarias, semanales o mensuales.

[img database](./src/assets/img/Diagrama%20en%20blanco.png)

## INSTALACION 

1. Asegurate de tener Node.js instalado en tu computadora. De no ser así, descargalo e instala Node js

NOTA: Tener instalado la versión de nvm 20.1 para ejecutar este proyecto.

Si no sabes como instalar esta versión sigue los siguientes pasos:

Abre la terminal en la pantalla de inicio.

Ejecuta el comando node -v para saber que versión tienes.

Si tienes una versión anterior a la 18.16.1 se recomienda instalar versión "18.17.1".

Para listar todas las versiones disponibles ejecuta este comando "nvm ls-remote".

Para instalar la versión mas reciente sigue estos pasos

nvm install 18.17.1
2. Clona este repositorio en tu computadora, utiliza el siguiente comando:

git clone https://github.com/JhonHernandezz/To-do-List.git

3. Instala las dependecias necesarias con el siguiente comando.

npm install

4. Configura tus variables de entorno

Crea un archivo .env en la carpeta principal del proyecto si el proyecto no cuanta con un archivo, y pon las siguiente variables con los respectivos datos.

MY_CONFIG = {"hostname": "127.10.10.10", "port": 5130}

MY_CONNECT={"host": "localhost", "user": "root", "password": "", "database": "", "port":3306}
MY_JWT = ""

5. Abre la terminal y ejecuta el servidor y el react vite con los siguientes comandos

npm run server

ng serve

6. Una vez visualice el proyecto en el navegador, le va a pedir un usuario y contraseña
NOTA: El usuario y la contraseña deben de concordar, sino arrojara error.

7. Una vez ingrese a la plataforma, va a encontrar a mano derecha el boton de salir de la aplicación, en la parte inferior izquierda va a encontrar el boton de agregar List y en cada contenedor los botones de actualizar y eliminar.


NOTA: Esta aplicación es para su beneficio, espero y la sepa utilizar.


Desarrollado por Jhon Hernandez