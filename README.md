<h1>Recriando a Interface do Netflix</h1>

Recrie a interface do principal site de streaming mundial utilizando tecnologias simples como HTML5, CSS3 e JavaScript. Nesse projeto você aprenderá: como estruturar um layout, técnicas de CSS3 com containers e variáveis, como posicionar os elementos com Flexbox e como utilizar plugins Jquery a favor da sua aplicação.

##Contribuições

Nas imagens dos filmes ao se passar o mouse sobre a imagem é apresentada a sinopse e ao se clicar é redirecionado para a página do filme em http://https://www.themoviedb.org/

###Codigo modificado em index.html

<a href="">                              **Link para o filme ou série em https://www.themoviedb.org **
	<img class="box-filme" src="">   **Capa do filme ou série**
        <div>
        	<h3>Título do filme ou série</h3>
                Sinopse do filme ou série
        </div>
</a>


###Codigo adicionado em main.css

   .item div{
        position: absolute;
        bottom: 0;
        right: 0;
        background: black;
        color: white;
        margin-bottom: 5px;
        font-family: Arial, Helvetica, sans-serif;
        opacity: 0;
        visibility: hidden;
        -webkit-transition: visibility 0s, opacity 0.5s linear; 
        transition: visibility 0s, opacity 0.5s linear;
   }
   
   .item:hover{
        cursor: pointer;
   }
   
   .item:hover div{
        width: 100%;
        padding: 8px 15px;
        visibility: visible;
        opacity: 0.7; 
   }
