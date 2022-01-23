const hbs = require('hbs');
const fs = require('fs');

//Helpers
hbs.registerHelper('productos', ()=>{
    var jsonString = fs.readFileSync("./data/datos.json");
    var data = JSON.parse(jsonString);
    var products = "";

    for (x of data) {
        products +=
            '<div class="cuadro-3 float-contenedor"> <td><p class="float-text text-blanco">'+x.nombre+'</p><img class="img-responsive img-redondeado" src="'+x.url+'"></td></div>'
        ;             
    }

    return new hbs.SafeString(products);
});

hbs.registerHelper('catagolo', ()=>{
    var jsonString = fs.readFileSync("./data/menu.json");
    var data = JSON.parse(jsonString);
    var menu = "";

    for (x of data) {
        menu +=
        '<div class="menu-comidas-item"><div class="img-plato"><img class=img-responsive src="' + x.url +
        '"></div><div class="desc-plato-menu"><h4>' + x.nombre +
        '</h4><p class="desc-plato">'+ x.descripcion + 
        '</p>'+'<p class="precio-plato">'+x.costo+'</p>'+'<br><a href="#" class="boton boton-color">Ordenar</a></div></div>'
        ;             
    }

    return new hbs.SafeString(menu);
});



 



