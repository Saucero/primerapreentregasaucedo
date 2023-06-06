const salirmenu = 3;
const precioenvio = 480;
let preciobasedelproducto = 2500;

let nombreusuario = prompt("ingrese su nombre")

alert("bienvenido, " + nombreusuario);


const productos = () => {
    let menu;
    menu = parseint(prompt("Elija la opcion que desee \n 1-Pantaloes, \n 2-zapatillas, \n 3-salir "));

    while (menu !== salirmenu) {

        switch (menu) {

            case 1: Pantalones();
                break;

            case 2: zapatillas();
                break;

            case 3:
                break;

            default:
                alert("Opcion invalida, intentalo denuevo");
                break;
        }

        menu = parseint(prompt("Elija la opcion que desee \n 1-Pantaloes, \n 2-zapatillas, \n 3-salir "));

    }


}

const calcularprecioconenvio = (preciodeenvio) => {
const precio = preciodeenvio + preciobasedelproducto 
alert("total del envio es, " + precio );
}

let menu = prompt("Elija la opcion que desee \n 1-productos \n 2-calcular precio con envio \n 3-salir ");

while (menu != salirmenu) {

    switch(menu){

        case 1: productos();
            break;

        case 2: calcularprecioconenvio(preciobasedelproducto);
            break;

        case 3:
            break;

        default:
            alert("Opcion invalida, intentalo denuevo");
            break;
    }

    let menu = prompt("Elija la opcion que desee, /n 1-productos, /n 2-calcular precio con envio. /n 3-salir ");

}

alert("Muchas gracias por su visita vuelva prontos");









