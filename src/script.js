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