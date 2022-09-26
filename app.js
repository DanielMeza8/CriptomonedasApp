function ejecutar(){
    let opciones = $('#opciones').val(); //id de formulario (Select)
    let cantidad = Number($('#cantidad').val());
    let mensaje = '';
    let bitcoin = 500000;
    let etherium = 20000;
    let dogcoin = 0.60;
    let xrp = 6;
    let resultado = 0;

    switch (opciones) {
        case 'bitcoin':
            mensaje = 'Bitcoin puedes comprar solo ';
            resultado =  cantidad/bitcoin;
            break;
        case 'etherium':
            mensaje = 'Etherium puedes comprar solo ';
            resultado =  cantidad/etherium;
            break;
        case 'dogcoin':
            mensaje = 'Dogcoin puedes comprar solo ';
            resultado =  cantidad/dogcoin;
            break;
        case 'xrp':
            mensaje = 'XRP puedes comprar solo ';
            resultado =  cantidad/xrp;
            break;
        default:
            alert('No existe esta opcion..!!!');
            break;
    }

    swal(mensaje, resultado.toString(), 'success'); //swal solo acepta etring
    //alert(mensaje + resultado);
}

$(document).ready(function(){
    $('#btnEjecutar').click(function(){
        ejecutar();
    });
});