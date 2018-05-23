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
# Especificaciones y estado :
- Realiza la maquetación del proyecto. Entrega un breve documento con el análisis y la planificación al README.md (valen fotos de esquemas del cuaderno). **Hecho**
- Presenta news.html con 3 noticias (ya escritas en html, no cargar con js) y almacena 6 noticias más en dos ficheros, fecha / 1.json fecha / 2.json para ser cargadas con js. **Hecho**
- Codifica news.js en jQuery para hacer: "botón cargar más noticias" y "scroll bottom" que, al ser activado cualquiera de ellos, haga una carga y presentación de más datos (hasta dos veces 1.json, 2.json). **Hecho**
- Incluye rss.xml. **Hecho**
- Codifica news1.html y news2.html, páginas que corresponden a las dos primeras noticias (últimas publicadas). Cuando hacemos clic en la noticia 1 de news.html nos va a news1.html, cuando hacemos clic en la noticia 2 de news.html nos va a news2.html (seguir no tiene sentido, esta tarea se automatiza con código de servidor). **Hecho**
- La plantilla o página de ver una sola noticia news1.html (news2.html es idéntica) debe contener una imagen y un vídeo de youtube responsive. **Hecho**
- Cada página debe contener las etiquetas meta (con open graph) para compartir título, descripción, imagen (grande), nombre de la aplicación y url de la página. **Hecho**
-------------------
#	Cambios realizados en la idea.
## V1.6
- Se ha añadido un footer con las opciones de compartir tanto en Facebook y Twitter, tanto en la página principal como en cada noticia.
## V1.5
- La barra de navegación tiene una botonera de iniciar sesión en la parte derecha de esta.
## V1.4
- La barra de navegación ahora hace un efecto de reducir su tamaña (incluyendo el logo) al hacer scroll hacia abajo.
## V1.3
- Se ha introducido el widget de twitter con las noticias de warcraft oficial en el lateral derecho, debajo de la publicidad.
## V1.2 
- Se ha eliminado el Banner, la barra se ha introducido en la parte superior, en esa barra en la parte izquierda he añadido el logo.
- Se ha añadido un carrusel de imágenes justo después de la barra.  
## V1.1



