exports.handler = async function(event, context) {
  // Puedes procesar los parámetros de la API si lo necesitas
  const data = {
    "books":[
      { "id": 10, "portada":"/portada-libros/Barbie-Celebracion.jpg", "title": "Barbie Celebracion De Un Icono", "sku": "4144112", "autor": "",  "precio": 189000, "editorial": "Rba", "formato": "Libro Impreso", "edicion": "1", "categorias": "No Ficción, Arte", "idioma": "Español", "numero_pag":"237", "cantidad": 1 ,"descripcion": "Barbie es Moda. Barbie es Arte. Barbie es el símbolo de la mujer emancipada de todas las culturas y países, cada vez más inclusiva y atenta a cuestiones sociales y globales, en consonancia con su lema: «Sé lo que quieras ser», que resuena cada vez más actual. Nacida en 1959, hace 65 años, pero siempre joven y moderna gracias a sus múltiples cambios de estilo y de fisonomía, Barbie es una criatura caleidoscópica y un verdadero icono pop: creadora de tendencias, top model y musa inspiradora de innumerables artistas."},
      { "id": 1, "portada":"/portada-libros/Efectos-Personales.jpg", "title": "Efectos Personales De Eso Se Trata", "sku": "414411", "autor": "Juan Villoro",  "precio": 129000, "editorial": "Anagrama", "formato": "Libro Impreso", "edicion": "1", "categorias": "Literatura y Ficción, Literatura Latinoamericana", "idioma": "Español", "numero_pag":"494", "cantidad": 1 ,"descripcion": "Juan Villoro es reconocido como uno de los grandes escritores latinoamericanos actuales. Periodista, novelista, cuentista, ensayista y cronista, reunió por primera vez sus ensayos literarios en Efectos personales (Premio Mazatlán 2001), al que siguió De eso se trata (2004), títulos que hoy reunimos en este volumen. Como también lo hiciera en la posterior La utilidad del deseo (2017), Villoro convierte aquí sus lecturas en relatos de la inteligencia. Ambas obras muestran a un narrador sumido en la aventura de leer; las anécdotas se suceden como en una novela y los comentarios surgen con el ingenio de una feliz tertulia. Por estas páginas transitan una excepcional galería de personajes: Goethe atrapado en la geometría del amor; Cervantes, fundador de la road novel; Rousseau, que une su destino a la arriesgada noción de autor; Lowry en el intoxicado paraíso de Cuernavaca."},
      { "id": 2, "portada":"/portada-libros/Para-Escribir.jpg", "title": "Para Escribir He Vivido", "sku": "416406", "autor": "Carlos Gustavo Alvarez",  "precio": 60000, "editorial": "Icono", "formato": "Libro Impreso", "edicion": "1", "categorias": "Negocios y Profesionales, Comunicación y Periodismo", "idioma": "Español", "numero_pag":"267", "cantidad": 1 ,"descripcion": "Llegado el 2024 decidí acometer una aventura, que quiero llamar literaria, pero que tiene vertebrado el espíritu periodístico de las columnas de prensa. Yo tenía el oficio arraigado de escribirlas durante tanto tiempo. Muchas y tantas que la antología en el impreso Tome pa′ que lleve el libro y la recopilación en el tomo digital La libertad en el encierro, dejan la mayor parte a la vera del camino. Y, sin embargo, ni con aquella dote de marinero redomado podría vislumbrar el rigor del desafío que representaba el propósito que registré en mi bitácora: escribir durante siete meses, cumplidamente y sin esguinces, dos columnas por semana, someterlas a la consideración de los lectores que no se arredraran en Facebook, Instagram, LinkedIn y X, y convertirlas en un libro, que no es otro que este, que usted lleva ahora para su casa. "},
      { "id": 3, "portada":"/portada-libros/La-Vegetariana.jpg", "title": "La Vegetariana", "sku": "414462", "autor": "Han Kang",  "precio": 52000, "editorial": "Penguin Random House", "formato": "Libro Impreso", "edicion": "1", "categorias": "Literatura y Ficción, Literatura Universal", "idioma": "Español", "numero_pag":"167", "cantidad": 1 ,"descripcion": ""},
      { "id": 4, "portada":"/portada-libros/Cocina-De-Casa.jpg", "title": "Cocina De Casa", "sku": "408994", "autor": "Tatiana Held",  "precio": 150000, "editorial": "Held Otero Tatiana", "formato": "Libro Impreso", "edicion": "1", "categorias": "No FicciónGastronomía", "idioma": "Español", "numero_pag":"121", "cantidad": 1 ,"descripcion": "Tatiana nos invita a compartir la comida que cocina para sus amigos y familiares. Esta colección de recetas, inspiradas en recuerdos de su infancia, comidas memorables, momentos especiales y viajes a otras tierras, presentan ideas para cocinar de un modo diferente, con facilidad y con resultados asombrosos. ¡Relájese ponga buena música, invite a sus amigos y familiares y prepare un festín!"},
      { "id": 5, "portada":"/portada-libros/En-Agosto-Nos-Vemos.jpg", "title": "En Agosto Nos Vemos", "sku": "407968", "autor": "Gabriel Garcia Marquez",  "precio": 65000, "editorial": "Penguin Random House", "formato": "Libro Impreso", "edicion": "1", "categorias": "Literatura y Ficción, Colombiana", "idioma": "Español", "numero_pag":"137", "cantidad": 1 ,"descripcion": "¿Te imaginas un encuentro que transforma todo un año en una sola noche? \"En agosto nos vemos\", la última joya literaria de Gabriel García Márquez, invita a los lectores a sumergirse en un relato donde el amor, el deseo y la transformación personal se entrelazan con la maestría de un orfebre de las palabras. Este libro no solo marca el cierre del ciclo creativo de Gabo, sino que se erige como un testamento de su genialidad, un canto del cisne que resuena con la fuerza de su legado. Ana Magdalena Bach, protagonista de esta obra, nos guía en un ritual anual hacia la isla donde yace su madre, revelando cómo un viaje puede ser una puerta hacia la autodescubierta y el renacimiento. \"En agosto nos vemos\" es una profunda reflexión sobre el tiempo, el amor y el deseo femenino, escrito con el estilo inconfundible y fascinante que sólo García Márquez podía ofrecer.Es una obra que desafía el paso del tiempo, un regalo inesperado para sus seguidores y una pieza imprescindible para cualquier amante de la literatura. No dejes pasar la oportunidad de poseer este tesoro literario. Cómpralo y déjate llevar por la última obra de un genio que transformó la literatura y descubre por qué agosto será el mes en que todo cambia."},
      { "id": 6, "portada":"/portada-libros/Cien-Anos-De-Soledad.jpg", "title": "Cien AÑos De Soledad", "sku": "408803", "autor": "Gabriel Garcia Marquez",  "precio": 65000, "editorial": "Debolsillo", "formato": "Libro Impreso", "edicion": "1", "categorias": "Literatura y Ficción, Colombiana", "idioma": "Español", "numero_pag":"503", "cantidad": 1 ,"descripcion": "La icónica obra de Gabriel García Márquez, “100 años de soledad”, nos sumerge en el fascinante universo de la familia Buendía, fundadores de Macondo, un pueblo donde lo mágico y lo real se entrelazan en una danza eterna. A través de siete generaciones, esta novela te lleva por un viaje de pasiones, conflictos, y revelaciones que reflejan la complejidad de la vida misma. García Márquez, con su maestría narrativa, teje una historia donde cada personaje y evento se convierte en un espejo de la humanidad, explorando temas universales como el amor, el poder, la muerte y el destino. La magia de Macondo y los misterios que rodean a los Buendía capturan la esencia de la existencia, en un relato que trasciende el tiempo y el espacio, desafiando la percepción de la realidad. \"100 años de soledad\" no es solo un libro; es una experiencia transformadora que deja una huella indeleble en el alma. Cómpralo ya y descubre por qué esta obra es considerada un tesoro de la literatura mundial."},
      { "id": 7, "portada":"/portada-libros/Recupera-Tu-Mente.jpg", "title": "Recupera Tu Mente Reconquista Tu Vida", "sku": "409415", "autor": "Marian Rojas Estape",  "precio": 65000, "editorial": "Espasa", "formato": "Libro Impreso", "edicion": "1", "categorias": "No Ficción, Autoayuda y Superación", "idioma": "Español", "numero_pag":"382", "cantidad": 1 ,"descripcion": "En un mundo donde la prisa y la ansiedad parecen dominar cada momento, este libro es tu guía hacia la serenidad y el autodescubrimiento. Sumérgete en las páginas de una obra que combina ciencia y sabiduría práctica para ayudarte a liberarte de las cadenas de la distracción y el estrés. Marian Rojas Estapé, con su enfoque divulgativo y científico, te invita a explorar los males modernos que fragmentan nuestra atención y diluyen nuestra felicidad. Desde la impaciencia hasta la intolerancia al aburrimiento, descubre cómo nuestra era de gratificación instantánea está remodelando nuestras mentes. Este libro no solo diagnostica los problemas, sino que también ofrece soluciones concretas y prácticas para retomar el control de tu mente y, por ende, de tu vida. ¡Actúa ahora y dale un respiro a tu mente! Compra \"Recupera tu mente, reconquista tu vida\" y comienza el camino hacia un bienestar duradero."},
      { "id": 8, "portada":"/portada-libros/El-Libro-De-Otro-Lugar.jpg", "title": "El Libro De Otro Lugar", "sku": "416458", "autor": "Keanu Reeves",  "precio": 98000, "editorial": "Oceano", "formato": "Libro Impreso", "edicion": "1", "categorias": "Literatura y Ficción, Fantástica y Ciencia Ficción", "idioma": "Español", "numero_pag":"428", "cantidad": 1 ,"descripcion": "Necesitábamos una herramienta -dijo ella-. Así que se la pedí a los dioses\". Siempre ha habido rumores, leyendas, el guerrero que no puede ser asesinado, que ha visto mil civilizaciones levantarse y caer, el guerrero de incontables nombres: Unute, el Hijo del Rayo, la Muerte misma… A quien en estos días se le conoce simplemente como \"B\". Y él sólo anhela ser capaz de morir. Un grupo de operaciones encubiertas del ejército estadounidense le promete conseguir su destino de muerte, todo lo que tiene que hacer a cambio es ayudarles. Pero cuando un soldado vuelve a la vida, el suceso imposible acaba apuntando hacia una fuerza aún más recóndita y, al menos igual de poderosa, que la del propio B. Una fuerza que persigue sus propios objetivos."},
      { "id": 9, "portada":"/portada-libros/Cuentos-De-Navidad-Clasicos.jpg", "title": "Cuentos De Navidad Clasicos", "sku": "416492", "autor": "Estefania Zorita",  "precio": 91000, "editorial": "Alma", "formato": "Libro Impreso", "edicion": "1", "categorias": "Literatura y Ficción, Literatura Universal", "idioma": "Español", "numero_pag":"268", "cantidad": 1 ,"descripcion": "Si hay una época que ha inspirado a autores occidentales de todos los tiempos, esa es la Navidad. Historias entrañables, pero también melancólicas y humorísticas, todas tienen cabida en esta antología que abarca relatos del siglo XIX y principios del siglo XX de cuentistas reconocidos, como Charles Dickens o Antón Chéjov, o aún por descubrir, como O. Henry o Nikolái Gógol. Una sublime recopilación de cuentos clásicos imprescindibles con los que emocionarse."}
    ]
  };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};