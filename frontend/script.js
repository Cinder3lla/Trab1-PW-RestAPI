// JS para operações CRUD com Fetch API

// Função para buscar e mostrar o conteúdo de bd.json
function ShowDB() {
    fetch('http://localhost:3000/bd.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao dar fetch da base de dados');
            }
            return response.json();
        })
        .then(data => {
            // Exibe o conteúdo no console
            console.log(data);

            // Exemplo: mostrar em um elemento HTML com id="conteudo"
            const conteudo = document.getElementById('conteudo');
            if (conteudo) {
                conteudo.textContent = JSON.stringify(data, null, 2);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

// Chama a função ao carregar a página
window.onload = ShowDB;