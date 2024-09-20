const form = document.getElementById('form-atividade');
const contato = [];
const tel = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputtelefone = document.getElementById('telefone-contato');


    if(contato.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    }else{
        contato.push(inputNomeContato.value);
        tel.push(parseFloat(inputtelefone.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputtelefone.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputtelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
