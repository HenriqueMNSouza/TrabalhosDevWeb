class Curse{
    constructor(img, name, price){
        this.img = img;
        this.name = name;
        this.price = price;
    }

    get card() {
        return this.createCard();
    }

    createCard() {
        var _img = "<img src=\"" + this.img  + "\" class=\"card-img-top\" alt=\"...\">";
        var _title = "<h5 class=\"card-title\">" + this.name + "</h5>";
        var _price = "<p class=\"card-text\">Por apenas R$ "+ this.price + "</p>"; 
        
        var _card = "<div class=\"card mx-2\" style=\"width: 18rem;\">" +
            _img +
            "<div class=\"card-body\">" +
                _title + _price + "</div></div>";

        return _card;
    }
}

function generateTabCarousel(list, flag){
    var _tab = "<div class=\"carousel-item" + ((flag)? " active\"": "\"" ) +">"+
        "<div class=\"row d-flex justify-content-center\">";
    
    for(var i = 0; i < list.length; i++){
        _tab = _tab + list[i].card;
    }
        
    _tab = _tab + "</div></div>";

    return _tab;
}

function generateCarousel(list){
    var _carousel = "";

    for(var i = 0; i < 3; i++){
        
        _carousel = _carousel + this.generateTabCarousel(list.slice((i*3),((i+1)*3)), ((i === 0)? true : false));
    }

    return _carousel;
}

// Mais tarde essa lista deverá ser gerada por um json
var curses = [
    new Curse("https://i.udemycdn.com/course/480x270/1344866_5c41.jpg", "Curso de HTML, CSS e JS", 49.99),
    new Curse("https://i.udemycdn.com/course/480x270/1344866_5c41.jpg", "Curso de HTML, CSS e JS", 49.99),
    new Curse("https://i.udemycdn.com/course/480x270/1344866_5c41.jpg", "Curso de HTML, CSS e JS", 49.99),
    new Curse("https://i.udemycdn.com/course/480x270/1344866_5c41.jpg", "Curso de HTML, CSS e JS", 49.99),
    new Curse("https://i.udemycdn.com/course/480x270/1344866_5c41.jpg", "Curso de HTML, CSS e JS", 49.99),
    new Curse("https://i.udemycdn.com/course/480x270/1344866_5c41.jpg", "Curso de HTML, CSS e JS", 49.99),
    new Curse("https://i.udemycdn.com/course/480x270/1344866_5c41.jpg", "Curso de HTML, CSS e JS", 49.99),
    new Curse("https://i.udemycdn.com/course/480x270/1344866_5c41.jpg", "Curso de HTML, CSS e JS", 49.99),
    new Curse("https://i.udemycdn.com/course/480x270/1344866_5c41.jpg", "Curso de HTML, CSS e JS", 49.99)
];

document.getElementById("card_carousel").innerHTML = generateCarousel(curses);