export const blog = () => {
  const divBlog = document.createElement('div');
  const viewBlog = `
<div id="containerViewBlog">
<div id="banner">
  <img class="logoBanner" src="https://i.ibb.co/FX4X35M/logo.png" alt="Logo SocialBeer">
</div>
  <section id="entranceContainer">
    <article class="card article-card">
      <img class="imgEntrance" src="https://images.unsplash.com/photo-1532634726-8b9fb99845fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
      <div class="article-info">
        <a href="#">
          <div>
            <h2 class="article-title">La diferencia entre lager y ale, explicada</h2>
          </div>
          <p class="byline">Escrito por Francisca G</p>
        </a>
      </div>
    </article>

    <article class="card article-card">
      <img class="imgEntrance" src="https://images.unsplash.com/photo-1584225064536-d0fbc0a10f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80">
      <div class="article-info">
        <a href="#">
          <div>
            <h2 class="article-title">Aprende a hacer tu primera cerveza</h2>
          </div>
          <p class="byline">Escrito por Maria Jose G.</p>
        </a>
      </div>
    </article>

    <article class="card article-card">
      <img class="imgEntrance" src="https://images.unsplash.com/photo-1513189737554-b1bbd839b9a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
      <div class="article-info">
        <a href="#">
          <div>
            <h2 class="article-title">La temperatura perfecta</h2>
          </div>
          <p class="byline">Escrito por Katherine C.</p>
        </a>
      </div>
    </article>

    <article class="card article-card">
      <img class="imgEntrance" src="https://images.unsplash.com/photo-1568886875992-b765ae61fd37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
      <div class="article-info">
        <a href="#">
          <div>
            <h2 class="article-title">La cerveza: sinónimo de felicidad</h2>
          </div>
          <p class="byline">Escrito por Belén M.</p>
        </a>
      </div>
    </article>
    </a>
</div>
</div>
`
  divBlog.innerHTML = viewBlog;

  return divBlog;
}
/* <div id="banner">
<img class="logoBanner" src="./img/logo.png" alt="Logo SocialBeer">
</div>
<section id="entranceContainer">
  <article class="articleView" id="entrance4">
    <header>
    <h2 class="titleArticle">La diferencia entre lager y ale, explicada</h2>
    <time datetime="2020-05-27">Hace 1 día</time>
    </header>
    <p>Cuando se trata de cervezas, no hay más palabras que se repitan más como "ale"y "lager". Esto no es extraño, ya que todas la cervezas caen en al menos una de estas categorías, pero muchos de nosotros hemos ido por un camino de mala educación...</p>
    <a href="#post4">Leer más...</a>
    <footer class="footerPost">Escrito por Francisca G.</footer>
  </article>

  <article class="articleView" id="entrance3">
    <header>
    <h2 class="titleArticle">Aprende a hacer tu primera cerveza</h2>
    <time datetime="2014-10-01">Hace 1 semana</time>
    </header>
    <p>When the mating ritual gets stinking drunk, a beer of a burglar ale ruminates. For example, a customer for a burglar ale indicates that an IPA from a Left Hand Milk Stout competes with a bill for a Jamaica Red Ale. </p>
    <a href="#post3">Leer más...</a>
    <footer class="footerPost">Escrito por Maria Jose G.</footer>
   </article>

   <article class="articleView" id="entrance2">
    <header>
    <h2 class="titleArticle">La temperatura perfecta</h2>
    <time datetime="2014-10-05">Hace 3 días</time>
    </header>
    <p>When a miserly malt flies into a rage, a bull ice defined by an air hocky table ruminates. A Fosters behind a Pilsner Urquell barely reaches an understanding with the scooby snack around the blue moon. </p>
    <a href="#post2">Leer más...</a>
    <footer class="footerPost">Escrito por Belén M.</footer>
    </article>

    <article class="articleView" id="entrance1">
     <header>
     <h2 class="titleArticle">La cerveza: sinónimo de felicidad</h2>
     <time datetime="2020-02-17">Hace 4 meses</time>
     </header>
     <p>Tomarse una cerveza no deja de ser una opción perfecta para experimentar grandes sensaciones. Sin embargo, incluso si eres un fanático de esta bebida, quizá ignores por qué cada sorbo te genera tan positivas sensaciones...</p>
     <a href="#post1">Leer más...</a>
     <footer class="footerPost" >Escrito por Katherine C.</footer>
    </article>
    </section>
  
    <section class="postContainer">
      <div class="entrancePost" id="post1"></div>
      <h3 class="tittlePost"></h3>
      <p class="textPost">

      <div class="entrancePost" id="post2"></div>
      <h3 class="tittlePost"></h3>
      <p class="textPost">

      <div class="entrancePost" id="post3"></div>
      <h3 class="tittlePost"></h3>
      <p class="textPost">

      <div class="entrancePost" id="post4">
      <h3 class="tittlePost">La diferencia entre lager y ale, explicada</h3>
      <p class="textPost">

      <img src="./img/blog/ale-lager.jpeg" align="left"> 
      Cuando se trata de cervezas, no hay más palabras que se repitan más como "ale"y "lager". Esto no es extraño, ya que todas la cervezas caen en al menos una de estas categorías, pero muchos de nosotros hemos ido por un camino de mala educación cuando se trata de distinguir a este par. Pero no temas: estamos aquí para ayudarte a comprender las diferencias entre las dos. </p>
      <h2 class="subTittlePost">La lager es mi estilo favorito, ¿qué puedes decirme de ella?</h2>
      <p class="textPost">Bueno, a pesar de lo que el marketing perezoso de las macrocervecerías puede hacerte creer, no es un estilo; lager es una categoría amplia de muchos estilos diferentes. La distinción entre ales y lager puede hacer que sea mucho más fácil encontrar una cerveza que te guste.<br>
      Entonces, ¿cúal es la diferencia entre ambas?,<br> 
      Realmente es simple. Las ales y lager se hacen usando diferentes cepas de levadura. En pocas palabras, las lager se elaboran utilizando cepas de levadura de fermentación inferior mantenidas a temperaturas más frías (alrededor de 4°C), mientras que las ale se elaboran con una levadura de fermentación superior que opera a temperaturas más cálidas (alrededor de 15-25°C, generalmente). 
      
      <h3 class="subTittlePost">¿Y eso es todo?</h3>
      <p class="textPost">Por supuesto, hay un poco más que eso. Lager es un sustantivo (que se traduce del alemán como "almacenamiento"), pero también es un verbo que se refiere al almacenamiento en frío de la cerveza mientras se fermenta. Hay un montón de bioquímica involucrada en comprenderlo completamente, pero es suficiente decir que la levadura lager requiere tradicionalmente un poco más de tiempo para prepararse que las ale.</p> <br>
      <p class="textPost">También vale la pena señalar la fascinante colisión de la biología celular, la artesanía y la civilización humana en general que ha tenido lugar en la elaboración de la cerveza. Las cepas específicas incluso han evolucionado con el tiempo a través de la selección de cerveceros, perfeccionando el proceso de selección incluso más que solo elegir la columna A o la columna B. Hoy en día, compañías enteras se especializan en propagar subcategorías enteras de lúpulos para crear muchos estilos específicos.</p>
      
      <h3 class="subTittlePost">¿Qué hay con el color?</h3>
      <p class="textPost">Contrariamente a una creencia popular extraña, el color o la claridad de una cerveza no tiene nada que ver con su clasificación de ale o larger. Hay cervezas rubias que son tan pálidas como las pilsners checas clásicas (una lager), y lagers suaves y oscuras como schwarzbiers que son tan opacas y negras como las stouts (una cerveza inglesa). Esto se debe a que el color de la cerveza se imparte en la malta, y en el caso de ciertas recetas, aditivos como frutas, especias y otros ingredientes aleatorios, y no tiene nada que ver con la levadura que se usa.</p>
      
      <h3 class="subTittlePost">¿Y el contenido alcoholico?, he leido que las lager son más suaves</h3>
      <p class="textPost">No tiene nada que ver, a menos que considere que un doppelbock de 9.5% de ABV es una "cerveza baja en alcohol", las lager veces pueden ser las cervezas más fuertes que se ofrecen en un menú.</p>
      <h3 class="subTittlePost">¿Entonces al menos deberían tener un sabor diferente?</h3>
      <p class="textPost">¡En tantos casos, sí! Las levaduras ale producen una cerveza de sabor más robusto, son más afrutadas y aromáticas, sabor y aroma complejo y más amargor, mientras que las lager tiene sabor más liero, son altamente carbonadas o "crujientes", poseen un aroma más sutil, equilibrado y limpio, por lo general son más suaves</p>
      
      <h3 class="subTittlePost">¿Hay alguna excepción a esta regla?</h3>
      <p >Con la cerveza, siempre hay excepciones a la regla. Algunos estilos bastante famosos pueden considerarse híbridos de los dos. Kölsch y altbier, por ejemplo, están hechos con levadura de ale fermentada a temperaturas más grandes. La cerveza común de California o "steem beer", es un estilo de origen estadounidense que involucra levadura de lager elaborada a temperaturas de ale. Este término medio puede ser un lugar bastante amigable si sabes lo que estás bebiendo, algo así como la mejor de ambos mundos.</p>
      
      <h3 class="subTittlePost">¿Cuáles son algunos ejemplos populares de cada tipo?</h3>
      <p >Este es un tema bastante amplio, que detallaremos en un futuro post, pero a modo de introducción podemos decir que las cervezas tienen una historia que tiene profundas raíces alemanas y bávaras, por lo que puede ayudar pensar en un país cuando se trata de recordar las categorías. Como pilsners, schwarzbiers, bock, doppelbock y lagers de Viena son ejemplos excelentes. Las ales se vincula más tradicionalmente con Bélgica y Gran Bretaña, así que piense en IPA, stouts,pale ales, brown ales, saisons, dubbels, tripels y quads.</p>

      <h3class="subTittlePost">Esto parece muy básico. ¿Por qué es tan difícil de entender?</h3class=>
      <p >El punto es que la distinción es importante solo para obtener una mejor comprensión de lo que ya te gusta. Ahora toma esto como una excusa para ir a tu bar o tienda de cerveza local favorita y hacer la tarea.</p>
    
      </section>
  </div> */