var lblData = document.getElementById('lblTimeYear');
var ano = new Date().getFullYear();

lblData.textContent = ano;

var novoItem1 = document.createElement('li');
novoItem1.textContent = 'Zina';

var novoItem2 = document.createElement('li');
novoItem2.textContent = 'Ronadoooo';
novoItem2.style.color = 'yellow';

var listaNome = document.getElementById('nomes');
listaNome.appendChild(novoItem1);
listaNome.appendChild(novoItem2);

var btnIncluir = document.getElementById('btnIncluir');

btnIncluir.addEventListener('click', function(){

    var nome = document.getElementById('nome');
    var email = document.getElementById('email');

    var novoItem = document.createElement('li');

    novoItem.textContent = nome.value + " - " + email.value;


    var listaNomes = document.getElementById('nomes');

    listaNomes.appendChild(novoItem);

    nome.value = "";
    email.value = "";

    nome.focus();
});
