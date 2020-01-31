// Classe para mostrar os instrutores da empresa
class Instructor{
    constructor(img, name, formation){
        this.img = img;
        this.name = name;
        this.formation = formation;
    }

    get card() {
        return this.createCard();
    }

    // Função que gera um card de commentário
    createCard(){
        // Crio o objeto de imagem
        var _img = "<img class=\"rounded-circle\" style=\"width: 100px; height: 100px;\" src=\"" + this.img + "\"/>";
        // Crio o título do card. Que é o nome de quem comentou
        var _title = "<h4 class=\"card-title px-2 py-3\">" + this.name +"</h4>";
        
        // Crio o objeto de formação do instrutor
        var _formation = "<p class=\"card-text\">" +this.formation+"</p>";

        return "<div class=\"col\"><div class=\"card\">"+
        "<div class=\"card-body px-2\">"+
                _img +
                _title +
                _formation + "</div></div></div>";
    }
}

// Função que gera a região dos comentários
function generateInstructor(list){
    // Título
    var _title = "<h3 class=\"text-light font-weight-bold pb-3\">Conheça a nossa equipe de instrutores</h3>";

    // Os Instrutores são gerados a partir de uma lista
    var _instructors = "<div class=\"row card-group\">";
    for(var i = 0; i < list.length; i++){
        _instructors = _instructors + list[i].card;
    }
    _instructors = _instructors + "</div>";
    return _title + _instructors;
}

// Aqui estão os instrutores. Mais tarde deverão ser gerados por um arquivo json
var _instructors = [
    new Instructor("https://conteudo.imguol.com.br/blogs/190/files/2018/05/16228913_239538586504260_3875827892919205888_n.jpg", "Joselino da Silva", "Formado em Ciência da Computação pela UFF."),
    new Instructor("https://conteudo.imguol.com.br/blogs/190/files/2018/05/16228913_239538586504260_3875827892919205888_n.jpg", "Joselino da Silva", "Formado em Ciência da Computação pela UFF."),
    new Instructor("https://conteudo.imguol.com.br/blogs/190/files/2018/05/16228913_239538586504260_3875827892919205888_n.jpg", "Joselino da Silva", "Formado em Ciência da Computação pela UFF."),
    new Instructor("https://conteudo.imguol.com.br/blogs/190/files/2018/05/16228913_239538586504260_3875827892919205888_n.jpg", "Joselino da Silva", "Formado em Ciência da Computação pela UFF.")
];

document.getElementById("instrutores").innerHTML = generateInstructor(_instructors);