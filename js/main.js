$(document).ready(function(){

    
    if(window.location.href.indexOf("index")>-1){
        $('.galeria').bxSlider({
          mode: 'fade',
          captions: false,
          slideWidth: 1200,
          responsive:true,
          //Eliminar los tres puntos de abajo
          pager:false
        });
    }

    if(window.location.href.indexOf("index")>-1){

      //POSTS
            var posts=[{
                title:"Prueba de titulo1",
                date:"Publicado el dia"+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
                content:'Prueba dinamica de post'
            },{
                title:"Prueba de titulo1",
                date:"Publicado el dia"+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
                content:'Prueba dinamica de post'
            },{
                title:"Prueba de titulo1",
                date:"Publicado el dia"+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
                content:'Prueba dinamica de post'
            },{
                title:"Prueba de titulo1",
                date:"Publicado el dia"+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
                content:'Prueba dinamica de post'
            }]

            posts.forEach((item,index)=>{
                var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>

                </article>
                `;
                console.log(post);
                $("#posts").append(post);
            });
    }
    //Selector de tema
    var theme = $("#theme");
    $("#a-verde").click(function(){
        theme.attr("href","css/green.css");
    });
    $("#a-rojo").click(function(){
        theme.attr("href","css/red.css");
    });
    $("#a-azul").click(function(){
        theme.attr("href","css/blue.css");
    });


    //Scroll arriba a la web
    $(".subir").click(function(e){
        e.preventDefault();

        $("html,body").animate({
            scrollTop:0
        },500);
    });
    
    //LOGIN FALSO

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name",form_name);
    });

    var form_name=localStorage.getItem("form_name",form_name);;

    if(form_name!=null && form_name!="undefined"){
        var about_parrafo =$("#about p");

        about_parrafo.html("<br><strong>Bienvenido,"+form_name+"</strong> <br/>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });

    }
    //acordeon
    if(window.location.href.indexOf("about")>-1){
        $("#acordeon").accordion();

    }
    //reloj
    if(window.location.href.indexOf("reloj")>-1){
        setInterval(() => {
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj); 
        }, 1000);
       
    }

    //Validacion
    if(window.location.href.indexOf("contact")>-1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd/mm/yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition:"top",
            scrollTopError:true
            
          });  
    }
});