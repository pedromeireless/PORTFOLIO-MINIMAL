function Menu(e){
    let listaMenu = document.querySelector('ul');
    let conteudo = document.querySelector('main')

    if (e.name === 'menu'){
        e.name = 'close';
        listaMenu.classList.add('top-[80px]')
        listaMenu.classList.add('opacity-100')
        conteudo.classList.add('blur-sm')
    } else {
        e.name = 'menu'
        listaMenu.classList.remove('top-[80px]')
        listaMenu.classList.remove('opacity-100')
        conteudo.classList.remove('blur-sm')
    }
}

let acc = document.getElementsByClassName('ctn');
console.log(acc)

for (i=0; i<acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active')
    })
}

window.addEventListener('scroll', ()=>{
    let header = document.querySelector('.nav-header')
    return (window.scrollY > 85) ? header.classList.add('fixed') : header.classList.remove('fixed')
})