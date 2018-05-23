# Página web de noticias

**Autor: Marc Antoni Román Martínez**

[Link de la página de noticias](https://rawgit.com/Marcroman181/news/master/news.html)

**Este repositorio contiene una branch con todo el codigo minimificado**

-------------------
# Boceto:

## Página principal:

### Horizontal:

-	Barra de navegación con el títutlo de la página que sería un enlace para volver al inicio y menús desplegables con diferentes enlaces. 
- Seguidamente, una cabecera de la página web con el logo.
- A continuación, tendremos un contenedor con todas las noticias. La noticia más importante ocuparía mas tamaño y a su lado izquierdo se situaría un anuncio de 336 x 280 px.
-	El resto de noticias se situarían en filas de 2 con el mismo tamaño cada una.

<a href="https://rawgit.com/marcroman181/news/master/img/news_hor.jpg" target="_blank"><img src="https://rawgit.com/marcroman181/news/master/img/news_hor.jpg" border="0" alt="Boceto"></a>

### Vertical:

-	Todas las opciones de la barra de navegación pasarían a un botón desplegable, excepto el botón de inicio.
-	Las noticias pasarían una debajo de otra y tendrían el mismo tamaño. 
-	En la parte inferior tendremos la publicidad fija con un tamaño de 320 x 100 px. 

<a href="https://rawgit.com/marcroman181/news/master/img/news_ver.jpg" target="_blank"><img src="https://rawgit.com/marcroman181/news/master/img/news_ver.jpg" border="0" alt="Boceto"></a>

## Página de una noticia:

### Horizontal:

- El espacio destinado a las noticias pasaría a contener la noticia con la siguiente distribución. El resto sería igual.

<a href="https://rawgit.com/marcroman181/news/master/img/news1_hor.jpg" target="_blank"><img src="https://rawgit.com/marcroman181/news/master/img/news1_hor.jpg" border="0" alt="Boceto"></a>

### Vertical:

- El espacio destinado a las noticias pasaría a contener la noticia con la siguiente distribución. El resto sería igual.

<a href="https://rawgit.com/marcroman181/news/master/img/news1_ver.jpg" target="_blank"><img src="https://rawgit.com/marcroman181/news/master/img/news1_ver.jpg" border="0" alt="Boceto"></a>

-------------------

#	Desarrollo de la página web
## V1.1
- Realización de la estructura de la web:

   **Barra de navegación**: Realización de la barra de navegación mediante la ayuda de clases de bootstrap.
   
   **Logo de la web**: Se ha colocado un fondo de color en lugar del logo. Más adelante será sustituido por el logo.
    
## V1.2
 - Contenedor de noticias: Desarrollo de la realización de la estructura del contenedor mediante las clases de bootstrap container para contener todas las noticias, row para realizar cada una de las filas de noticias y col-sm-6 para dividir las noticias de 2 en 2.
 - Anuncios: He añadido un cálculo para que la noticia ocupe todo el ancho menos el ancho del anuncio (336 px) en la pantalla horizontal.
   
## V1.3
 - Contenedor de noticias: Se ha añadido una noticia "ejemplo" para darle estructura al contenedor de noticias. Se ha usado la clase thumbnail de bootstrap para realizar un marco para cada noticia, la clase img-responsive para las fotos de las noticias, text-left para el título, text-center para la descripción y text-right para la fecha.
 - Anuncios: Se ha añadido un fondo negro para representar los anuncios, tanto para el horizontal como el vertical.  
   
## V1.4
 - Realización de un json ejemplo con dos noticias con los siguientes campos: title, description, datetime, imgmid y imgbig. 
## V1.5 
 - Desarrollo de un evento que cargue en el html una noticia cogida desde el json: Para realizar esto lo que hacemos es cada vez que se realice scroll (evento de scroll) se comprueba si el scroll + la altura de la ventana es igual o mayor a la altura del documento. En caso afirmativo, se ejecuta la lectura del json y la carga de la noticia. 
 - La carga se hace de 2 en 2. Primero creamos un div con una row introducida al contenedor de noticias, y seguidamente con los datos leidos del json creamos las dos noticias dentro de la fila. 
## V1.6
 - Añadido un botón para cargar noticias.
 - Corregido un error para cargar solamente un json y no muchos a la vez. Se ha solucionado mediante un booleano que lo desactivamos mientras estamos cargando una noticia y lo activamos al acabar de cargar.
 - Añadido botón para activar el scroll o desactivarlo.
## V1.7 
 - Añadida una pantalla de carga mientras el usuario está cargando noticias. 
 - Realización e implementación de noticias reales y diferentes, tanto en el html como en los diferentes json.
## V1.8
 - Añadido iconos en los menús deplegables de la barra de navegación.
 - Realización de las dos páginas webs para las dos noticias principales (news1.html y news2.html).
## V1.9
 - Realización e implementación de las páginas de web de anunciantes tanto horizontal como vertical. Simplemente, contienen una imagen con un enlace y el tamaño adecuado y se cambian cada 5 segundos.
 - Realización del archivo rss.xml.
## V2.0
 - Realización de la adaptación de las imagenes a dos tamaños adecuados: 
  
   **imgmid:** Para mostrar las imagenes en la página principal.
   
   **imgbig:** Para mostrar las imagenes en un tamaño mayor en una ventana modal.
   
 - Pasadas las imagenes a través de un compresor de imagenes para optimizar el tamaño. 
 - Añadido las etiquetas open graph correspondientes para compartir la página web.
   
## V2.1
 - Implementación de una ventana modal para visualizar las imagenes de las noticias al pulsar sobre ellas. La ventana modal contiene un pequeño evento en javascript que al pulsar la imagen de una noticia, leemos su ID y sabiendo su ID cargamos su imagen de tamaño mayor.
 
## V2.2
 - Añadida información al usuario de que no hay más noticias disponibles.
 
 
