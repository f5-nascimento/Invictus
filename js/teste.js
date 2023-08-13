var a = document.querySelector('.testando');
var subCliente = document.querySelector('.btn');

a.addEventListener('click', function(){
    
    if (subCliente.style.display === 'none'){
        subCliente.style.display = 'block';
    }else{
        subCliente.style.display = 'none';
    }
});