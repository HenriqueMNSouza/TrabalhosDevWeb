// Classe para mostrar os comentários
class Comments{
    constructor(img, name, comment){
        // Variáveis
        this.img = img;
        this.name = name;
        this.comment = comment;
    }
    // Getters
    get card() {
        return this.createCard();
    }

    // Função que gera um card de commentário
    createCard(){
        // Crio o objeto de imagem
        var _img = "<img class=\"rounded-circle\" style=\"width: 60px; height: 60px;\" src=\"" + this.img + "\"/>";
        // Crio o título do card. Que é o nome de quem comentou
        var _title = "<h5 class=\"card-title px-2 py-3\">" + this.name +"</h5>";
        
        // Crio o objeto de comentário
        var _comment = "<div class=\"row px-2\">" +
            "<p class=\"card-text\">" +this.comment+"</p></div>";

        return "<div class=\"col\"><div class=\"card\">"+
        "<div class=\"card-body\">"+
            "<div class=\"row px-2\">"+
                _img +
                _title +
            "</div>" + _comment + "</div></div></div>";
    }
}

// Função que gera a região dos comentários
function generateComments(list){
    // Título
    var _title = "<div class=\"row mb-2\"><h4>O que dizem nossos alunos</h4></div>";

    // Os Comentários são gerados a partir de uma lista
    var _comments = "<div class=\"row\">";
    for(var i = 0; i < list.length; i++){
        _comments = _comments + list[i].card;
    }
    _comments =  _comments+ "</div>";

    return _title + _comments;
}

// Aqui estão os 4 comentários. Mais tarde deverão ser gerados por um arquivo json
var _fourComments = [
    new Comments("https://conteudo.imguol.com.br/blogs/190/files/2018/05/16228913_239538586504260_3875827892919205888_n.jpg", "Joselino da Silva", "Não tenho tempo nem dinheiro para fazer faculdade. Porém agora estou a um passo de conquistar meus sonhos."),
    new Comments("https://conteudo.imguol.com.br/blogs/190/files/2018/05/16228913_239538586504260_3875827892919205888_n.jpg", "Joselino da Silva", "Não tenho tempo nem dinheiro para fazer faculdade. Porém agora estou a um passo de conquistar meus sonhos."),
    new Comments("https://conteudo.imguol.com.br/blogs/190/files/2018/05/16228913_239538586504260_3875827892919205888_n.jpg", "Joselino da Silva", "Não tenho tempo nem dinheiro para fazer faculdade. Porém agora estou a um passo de conquistar meus sonhos."),
    new Comments("https://conteudo.imguol.com.br/blogs/190/files/2018/05/16228913_239538586504260_3875827892919205888_n.jpg", "Joselino da Silva", "Não tenho tempo nem dinheiro para fazer faculdade. Porém agora estou a um passo de conquistar meus sonhos.")
];

document.getElementById("comentarios").innerHTML = generateComments(_fourComments);
