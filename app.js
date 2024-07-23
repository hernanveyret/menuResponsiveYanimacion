$navBar = document.querySelector('.nav-bar')
$childBtnBar = document.querySelectorAll('.btn-bar')
let $header = document.querySelector('.header')

function redimencionarPantalla(){
    let  width = window.innerWidth // toma que valor del ancho de pantalla actual

    if(width > 651 ){
        // si el ancho de pantalla es mayor a 651px entra en modo desktop y le da el valor de id al navegador
        $header.id = '';
        $navBar.id = 'header';
    }else {
        // si el ancho de pantalla es menor a 651px entra en modo movile y le da el valor de id al header
        $header.id = 'header'
        $navBar.id = '';
    }
}

redimencionarPantalla()

window.addEventListener('resize', redimencionarPantalla); // llama a la funcion que verifica el ancho de pantalla

document.addEventListener('click',e => {
    if(e.target.matches('a')){
        $navBar.classList.remove('active-nav-bar');
        $childBtnBar.forEach((e, i) => {
            e.classList.remove(`active-btn-bar${i+1}`);
        })
    }
})
function abrirMenu(){
    $navBar.classList.toggle('active-nav-bar');    
    $childBtnBar.forEach((e, i) => {
        e.classList.toggle(`active-btn-bar${i+1}`);
    })
}

