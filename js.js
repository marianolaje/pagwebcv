function hiddenOffOn(elementoId){
  if (document.getElementById(elementoId).style.visibility == 'visible') {
    document.getElementById(elementoId).style.opacity = '0.0';
    document.getElementById(elementoId).style.visibility = 'hidden';
    document.getElementById('ayudaTexto').style.visibility = 'hidden';
  } else {
    document.getElementById(elementoId).style.visibility = 'visible';
    document.getElementById(elementoId).style.opacity = '1.0';
    document.getElementById('ayudaTexto').style.visibility = 'hidden';
  }
}



function hiddenOffOn2(text, img1, img2, img3, img4, distancia1, left, animationTime){
  var px = "px";
  if (document.getElementById(text).style.visibility == 'visible') {
    document.getElementById(text).style.visibility = 'hidden';
    document.getElementById(text).style.opacity = '0.0';
    setTimeout(function(){
      document.getElementById(img1).style.visibility = 'visible';
      document.getElementById(img2).style.visibility = 'visible';
      document.getElementById(img3).style.visibility = 'visible';
    },animationTime)
    document.getElementById(img4).style.position = 'absolute';
    var distancia = left + distancia1;
    var distanciaPx = distancia.toString();
    var final = distanciaPx.concat(px);
    document.getElementById(img4).style.left = final;
    document.getElementById('ayudaTexto').style.visibility = 'hidden';
  } else {
    setTimeout(function(){
      document.getElementById(text).style.visibility = 'visible';
      document.getElementById(text).style.opacity = '1.0';
    },animationTime)
    document.getElementById(img1).style.visibility = 'hidden';
    document.getElementById(img2).style.visibility = 'hidden';
    document.getElementById(img3).style.visibility = 'hidden';
    document.getElementById(img4).style.position = 'absolute';
    var distanciaPx = left +"px"
    document.getElementById(img4).style.left = distanciaPx;
    document.getElementById('ayudaTexto').style.visibility = 'hidden';
  }
}


function opacidad(id){
  if(document.getElementById(id).style.opacity > 0.9){
    document.getElementById(id).style.opacity = '0.0';
  } else {
    document.getElementById(id).style.opacity = '1.0';
  }
}





function nextPageDot(x, img1, img2, img3, img4, img5, img6){
  window.scrollTo(x, 0)
  document.getElementById(img1).src = 'img/dotIn.png';
  document.getElementById(img2).src = 'img/dotOut.png';
  document.getElementById(img3).src = 'img/dotOut.png';
  document.getElementById(img4).src = 'img/dotOut.png';
  document.getElementById(img5).src = 'img/dotOut.png';
  document.getElementById(img6).src = 'img/dotOut.png';
}



var src = "file:///C:/Users/maria/Desktop/Trabajos%20Atom/UTN%20BA/JavaScript/AtomJS/pagwebCV/";

function nextPageArrow(){
  window.scrollBy(1385, 0)
  if(document.getElementById('imgDot1').src == src + 'img/dotIn.png'){
    document.getElementById('imgDot1').src = 'img/dotOut.png';
    document.getElementById('imgDot2').src = 'img/dotIn.png';
  } else if(document.getElementById('imgDot2').src == src + 'img/dotIn.png'){
    document.getElementById('imgDot2').src = 'img/dotOut.png';
    document.getElementById('imgDot3').src = 'img/dotIn.png';
  } else if(document.getElementById('imgDot3').src == src + 'img/dotIn.png'){
    document.getElementById('imgDot3').src = 'img/dotOut.png';
    document.getElementById('imgDot4').src = 'img/dotIn.png';
  } else if(document.getElementById('imgDot4').src == src + 'img/dotIn.png'){
    document.getElementById('imgDot4').src = 'img/dotOut.png';
    document.getElementById('imgDot5').src = 'img/dotIn.png';
  } else if(document.getElementById('imgDot5').src == src + 'img/dotIn.png'){
    document.getElementById('imgDot5').src = 'img/dotOut.png';
    document.getElementById('imgDot6').src = 'img/dotIn.png';
  }
}


function prevPageArrow(){
  //bandera = bandera - 1;
  window.scrollBy(-1385, 0)
  console.log(document.getElementById('imgDot1').src == src + 'img/dotIn.png')
  if(document.getElementById('imgDot2').src == src + 'img/dotIn.png'){
    document.getElementById('imgDot2').src = 'img/dotOut.png';
    document.getElementById('imgDot1').src = 'img/dotIn.png'
  } else if(document.getElementById('imgDot3').src == src +  'img/dotIn.png'){
    document.getElementById('imgDot3').src = 'img/dotOut.png';
    document.getElementById('imgDot2').src = 'img/dotIn.png'
  } else if(document.getElementById('imgDot4').src == src +  'img/dotIn.png'){
    document.getElementById('imgDot4').src = 'img/dotOut.png';
    document.getElementById('imgDot3').src = 'img/dotIn.png'
  } else if(document.getElementById('imgDot5').src == src +  'img/dotIn.png'){
    document.getElementById('imgDot5').src = 'img/dotOut.png';
    document.getElementById('imgDot4').src = 'img/dotIn.png'
  } else if(document.getElementById('imgDot6').src == src +  'img/dotIn.png'){
    document.getElementById('imgDot6').src = 'img/dotOut.png';
    document.getElementById('imgDot5').src = 'img/dotIn.png'
  }
}

function pasajeIdiomaIngles(){
  document.getElementById('idiomaIngles').style.color = 'black';
  document.getElementById('idiomaIngles').style.cursor = 'default';
  document.getElementById('idiomaEspaniol').style.color = 'lightgray';
  document.getElementById('idiomaEspaniol').style.cursor = 'pointer';
  document.getElementById('textTitulo').innerHTML = 'Welcome to my Curriculum Vitae';
  document.getElementById('textNombre').innerHTML = 'Mariano Laje Arrigoni <br> Programmer Jr.';
  document.getElementById('textPresentation').innerHTML = 'Now we gonna meet me a little more!';
  document.getElementById('textConsejo').innerHTML = 'Tip! This is an interactive web site';
  document.getElementById('textTitulo2').innerHTML = 'here we´re gonna see a little more of my studies';
  document.getElementById('textSubTitulo2').innerHTML = '¡Count with 2 types of studies!';
  document.getElementById('textEstudioFormal').innerHTML = 'My formal studies';
  document.getElementById('textEstudioInformal').innerHTML = 'And my unformal studies';
  document.getElementById('textAnalista').innerHTML = 'Information Systems Analyst';
  document.getElementById('textAdmin').innerHTML = 'Business Administration technician';
  document.getElementById('textCourse1').innerHTML = 'Web Development in Html5 and Css3 with Bootstrap';
  document.getElementById('textCourse2a').innerHTML = 'Oracle Database 11g: SQL Fundamentals 1';
  document.getElementById('textCourse2b').innerHTML = 'Oracle Database 11g: PL/SQL Fundamentals';
  document.getElementById('textCourse3').innerHTML = 'Master Hibernate and JPA with Spring Boot in 100 Steps';
  document.getElementById('textCourse4').innerHTML = 'Introduction to programming web pages with JavaScript';
  document.getElementById('textCourse5a').innerHTML = 'Java Standard Web Programming, J2SE';
  document.getElementById('textCourse5b').innerHTML = 'Java Advanced Programming: Threads, Networking, J2SE';
  document.getElementById('textCourse6a').innerHTML = 'Fundamentals of programming';
  document.getElementById('textCourse6b').innerHTML = 'Website Development';
  document.getElementById('textCourse6c').innerHTML = 'Web development in Html5 and Css3';
  document.getElementById('textCourse6d').innerHTML = 'Web Development with JavaScript';
  document.getElementById('textCourse6e').innerHTML = 'Web development in HTML 5, CSS3 and Javascript (advanced level)';
  document.getElementById('textCourse6f').innerHTML = 'Web development in Bootstrap';
  document.getElementById('textAyuda').innerHTML = 'PASS THE MOUSE OVER HERE! <br> By left or right';
  document.getElementById('textTitulo3').innerHTML = 'We started with the interesting thing!';
  document.getElementById('textSubTitulo3').innerHTML = 'If you asked yourself: what technologies does this guy handle? You are in the right place';
  document.getElementById('textTecno1').innerHTML = 'Very good management, with incorporation of Bootstrap as working framework';
  document.getElementById('textTecno2').innerHTML = 'Excellent layout, experience making pages for your own pleasure';
  document.getElementById('textTecno3').innerHTML = 'Good management With verifiable work experience in the language';
  document.getElementById('textTecno4').innerHTML = 'Constantly incorporating knowledge';
  document.getElementById('textTecno5').innerHTML = 'Good management With proven work experience in the tool';
  document.getElementById('textTecno6').innerHTML = 'Very good management, with verifiable work experience';
  document.getElementById('textTitulo4').innerHTML = 'Work experience';
  document.getElementById('textEvo1').innerHTML = 'First steps';
  document.getElementById('subtextEvo1').innerHTML = 'After finishing high school in the Republic of Italy, at age 18, I was working as an arranger, for Orfeo, and also as a Seller of the Kevingston clothing house, covering the vacations of the fixed sellers.';
  document.getElementById('textEvo2').innerHTML = 'Experience as a seller';
  document.getElementById('subtextEvo2').innerHTML = 'Then I continued with my skills as a Wrangler salesman, for one year, finally finished when the Manager of the house of clothing offered me the job of salesman for his place, being more daily hours, and better payment.';
  document.getElementById('textEvo3').innerHTML = 'Experience as Administrator';
  document.getElementById('subtextEvo3').innerHTML = 'In the technique taught by Tertiary Zorrilla Higher Institute, where in 2nd year by average high, I was recommended from the institute, for an internship in the construction company Ingemax S.A. for 4 months, to be the manager of the Kempes park work. <br> Then I was in another administrative internship for the tourism company Bentancourt S.A, for 6 months, and finally working in the construction company Corfur S.A. as fixed, for a year and a half. In all of them he played an administrative role where he was in charge of controlling expenses, uploading data to the system, arranging accounts, among many other tasks.';
  document.getElementById('textEvo4').innerHTML = 'Experience as a Programmer';
  document.getElementById('subtextEvo4').innerHTML = 'Allowed by my studies in Systems Analyst, and by the multiple courses I have completed, I am currently working in the company Servicios y Consultoría SA, which works for Rentas de la Provincia, where I am playing a Java Jr. Programmer since 20 / 05/2019';
  document.getElementById('textTitulo5').innerHTML = 'Another information of interest';
  document.getElementById('textIngles').innerHTML = 'English';
  document.getElementById('textIngles2').innerHTML = 'Advanced English. EF SET English Certificate 60/100 (B2 upper intermediate) Listening Section 56/100 (B2 upper intermediate) Reading Section 64/100 (C1 advanced).';
  document.getElementById('textBirth').innerHTML = 'Birthdate';
  document.getElementById('textBirth2').innerHTML = 'March 15, 1993';
  document.getElementById('textEstadoCivil').innerHTML = 'Civil status';
  document.getElementById('textEstadoCivil2').innerHTML = 'Single';
  document.getElementById('textNacionalidad').innerHTML = 'Nationality';
  document.getElementById('textNacionalidad2').innerHTML = 'Argentinean - Italian';
  document.getElementById('textVideoJuegos').innerHTML = 'Videogame skills develop';
  document.getElementById('textVideoJuegos1').innerHTML = '3D Modeling: Intermediate Level';
  document.getElementById('textVideoJuegos2').innerHTML = '3D Modeling: Intermediate Level';
  document.getElementById('textVideoJuegos3').innerHTML = 'Textured: Intermediate Level';
  document.getElementById('textVideoJuegos4').innerHTML = 'Rendering: Basic Level';
  document.getElementById('textVideoJuegos5').innerHTML = 'Rigging and Animation: Basic Level';
  document.getElementById('textTitulo6').innerHTML = 'Contact me';
  document.getElementById('formTitulo').placeholder = 'Name';
  document.getElementById('formTexto').placeholder = 'Send me a message';
  document.getElementById('formBoton').value = 'Send';
}

function pasajeIdiomaEspaniol(){
  document.getElementById('idiomaIngles').style.color = 'lightgray';
  document.getElementById('idiomaIngles').style.cursor = 'pointer';
  document.getElementById('idiomaEspaniol').style.color = 'black';
  document.getElementById('idiomaEspaniol').style.cursor = 'default';
  document.getElementById('textTitulo').innerHTML = 'Bienvenido a mi Curriculum Vitae';
  document.getElementById('textNombre').innerHTML = 'Mariano Laje Arrigoni <br> Programador Jr.';
  document.getElementById('textPresentation').innerHTML = 'Vamos a cononocerme un poco mas!';
  document.getElementById('textConsejo').innerHTML = 'Consejo! Esta es una pag web interactiva, no dejes de pasar el mouse!';
  document.getElementById('textTitulo2').innerHTML = 'Acá veremos un poco mas de mis estudios';
  document.getElementById('textSubTitulo2').innerHTML = '¡Cuento con 2 tipos de estudios!';
  document.getElementById('textEstudioFormal').innerHTML = 'Mis estudios Formales';
  document.getElementById('textEstudioInformal').innerHTML = 'Y mis estudios Informales';
  document.getElementById('textAnalista').innerHTML = 'Analista en Sistemas de Información';
  document.getElementById('textAdmin').innerHTML = 'Técnico en Administración de Empresas';
  document.getElementById('textCourse1').innerHTML = 'Desarrollo Web en Html5 y Css3 con Bootstrap';
  document.getElementById('textCourse2a').innerHTML = 'Base de datos Oracle 11g: Fundamentos de SQL 1';
  document.getElementById('textCourse2b').innerHTML = 'Base de datos Oracle 11g: Fundamentos de PL/SQL';
  document.getElementById('textCourse3').innerHTML = 'Maestro en Hibernate y JPA con Spring Boot en 100 pasos';
  document.getElementById('textCourse4').innerHTML = 'Introducción a la programación de paginas web con JavaScript';
  document.getElementById('textCourse5a').innerHTML = 'Programación Web Estándar Java, J2SE';
  document.getElementById('textCourse5b').innerHTML = 'Programación avanzada de Java: hilos, redes, J2SE';
  document.getElementById('textCourse6a').innerHTML = 'Fundamentos de la programación';
  document.getElementById('textCourse6b').innerHTML = 'Desarrollo de Pagina Web';
  document.getElementById('textCourse6c').innerHTML = 'Desarrollo web en Html5 y Css3';
  document.getElementById('textCourse6d').innerHTML = 'Desarrollo Web con JavaScript';
  document.getElementById('textCourse6e').innerHTML = 'Desarrollo web en HTML 5, CSS3 y Javascript (nivel avanzado)';
  document.getElementById('textCourse6f').innerHTML = 'Desarrollo web en Bootstrap';
  document.getElementById('textAyuda').innerHTML = 'PASA EL MOUSE POR ACA! <br> Por izquierda o derecha ';
  document.getElementById('textTitulo3').innerHTML = 'Empezamos con lo interesante!';
  document.getElementById('textSubTitulo3').innerHTML = 'Si te preguntaste: ¿que tecnologias maneja este chico? Estas en el lugar correcto';
  document.getElementById('textTecno1').innerHTML = 'Manejo muy bueno, con incorporación de Bootstrap como framework de trabajo';
  document.getElementById('textTecno2').innerHTML = 'Maquetación excelente, experiencia realizando paginas por gusto propio';
  document.getElementById('textTecno3').innerHTML = 'Buen manejo. Con experiencia laboral comprobable en el lenguaje';
  document.getElementById('textTecno4').innerHTML = 'Incorporando conocimientos constantemente';
  document.getElementById('textTecno5').innerHTML = 'Buen manejo. Con experiencia laboral comprobable en la herramienta';
  document.getElementById('textTecno6').innerHTML = 'Muy buen manejo, con experiencia laboral comprobable';
  document.getElementById('textTitulo4').innerHTML = 'Experiencia Laboral';
  document.getElementById('textEvo1').innerHTML = 'Primeros pasos';
  document.getElementById('subtextEvo1').innerHTML = 'Luego de finalizar el secundario en el Republica de Italia, a los 18 años estaba trabajando como Acomodador, para el Orfeo, y a su vez como Vendedor para la casa de ropa Kevingston, cubriendo las vacaciones de los vendedores fijos.';
  document.getElementById('textEvo2').innerHTML = 'Experiencia como vendedor';
  document.getElementById('subtextEvo2').innerHTML = 'Luego continué con mis dotes de vendedor (mientras seguía en el Orfeo) en la casa de ropa Wrangler, por un año, viendose finalizado cuando la Gerente de la casa de ropa Panther me ofreció trabajo de Vendedor para su local, siendo más horas diarias, y mejor pago.';
  document.getElementById('textEvo3').innerHTML = 'Experiencia como Administrador';
  document.getElementById('subtextEvo3').innerHTML = 'En la tecnicatura dictada por Instituto Superior Zorrilla Terciario, donde en 2do año por alto promedio, se me recomendó desde el instituto, para una pasantía en la empresa constructora Ingemax S.A. por 4 meses, para ser el administrador de la obra del parque del Kempes. <br> Luego estuve en otra pasantía administrativa para la empresa de turismo Bentancourt S.A, por 6 meses, y por último trabajando en la empresa constructora Corfur S.A. como fijo, por un año y medio. En todas desempeñaba un rol administrativo donde era el encargado del control de los gastos, carga de datos al sistema, concileacion de cuentas, entre otras multiples tareas.';
  document.getElementById('textEvo4').innerHTML = 'Experiencia como Programador';
  document.getElementById('subtextEvo4').innerHTML = 'Permitido por mis estudios en Analista en Sistemas, y por los multiples cursos realizados, actualmente estoy trabajando en la empresa Servicios y Consultoría S.A., que la misma trabaja para Rentas de la Provincia, donde estoy efectuando un papel de Programador Java Jr. desde el 20/05/2019';
  document.getElementById('textTitulo5').innerHTML = 'Otra informacion de interes';
  document.getElementById('textIngles').innerHTML = 'Ingles';
  document.getElementById('textIngles2').innerHTML = 'Inglés: Avanzado. EF SET Certificado de inglés 60/100 (B2 intermedio superior) Sección de escucha 56/100 (B2 superior intermedio) Sección de lectura 64/100 (C1 avanzado).';
  document.getElementById('textBirth').innerHTML = 'Fecha de Nacimiento';
  document.getElementById('textBirth2').innerHTML = '15 de Marzo de 1993';
  document.getElementById('textEstadoCivil').innerHTML = 'Estado Civil';
  document.getElementById('textEstadoCivil2').innerHTML = 'Soltero';
  document.getElementById('textNacionalidad').innerHTML = 'Nacionalidad';
  document.getElementById('textNacionalidad2').innerHTML = 'Argentina - Italiana';
  document.getElementById('textVideoJuegos').innerHTML = 'Destrezas en Desarrollo de Videojuegos';
  document.getElementById('textVideoJuegos1').innerHTML = 'Modelado 3D: Nivel Intermedio';
  document.getElementById('textVideoJuegos2').innerHTML = 'Modelado 3D: Nivel Intermedio';
  document.getElementById('textVideoJuegos3').innerHTML = 'Texturizado: Nivel Intermedio';
  document.getElementById('textVideoJuegos4').innerHTML = 'Renderizado: Nivel Básico';
  document.getElementById('textVideoJuegos5').innerHTML = 'Rigging y Animación: Nivel Básico';
  document.getElementById('textTitulo6').innerHTML = 'Contactame';
  document.getElementById('formTitulo').placeholder = 'Nombre';
  document.getElementById('formTexto').placeholder = 'Escribime un mensaje';
  document.getElementById('formBoton').value = 'Enviar';
}
