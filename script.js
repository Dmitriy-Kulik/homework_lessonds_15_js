/*
Создать основной объект book. В этом объекте должны быть описаны дефолтные состовляющие каждой книги.
Создать новые книги с их свойствами.
Реализовать два варианта:
    a) Использовать метод в объекте book, который будет возвращать все данные о книге.
    b) Использовать функцию, которая будет возвращать все данные о книге.
В каждом варианте (метод и функция) вывести данные о книге используя call, aplly, bind
*/


/*function books() {
    function book(name, avtor, year, qantPages) {
        this.name = name;
        this.avtor = avtor;
        this.year = year;
        this.qantPages = qantPages;

    }*/
function books() {
    var book = {
        name: 'chto-to-tam',
        avtor: 'kto-to-tam',
        year: 'gdeto-tam',
        
        getCall: function (name, avtor) {
/*            for (var i in arg){
                console.log(arg[i]);
            }*/
            console.log(this[name] + ' ' + this[avtor]);
        },
        getAplly: function (arg1, arg2) {
            for (var i in this)
                console.log(this[i]);
        },
        getBind: function (a) {
            console.log('//');
            for (var key in this) {
                console.log(this[key]);
            }
            for (var key in a) {
                console.log(a[key]);
            }
        }
    }
    var War_of_the_Worlds = Object.create(book);
    War_of_the_Worlds.name = "Война миров";
    War_of_the_Worlds.avtor = "Герберт Уельс";
    War_of_the_Worlds.year = 1897;

    var Vingt_mille_lieues_sous_les_mers = Object.create(book);
    Vingt_mille_lieues_sous_les_mers.name = "Двадцать тысяч льё под водой";
    Vingt_mille_lieues_sous_les_mers.avtor = "Жюль Верн";
    Vingt_mille_lieues_sous_les_mers.year = 1870;

    var The_Mysterious_Island = Object.create(book);
    The_Mysterious_Island.name = "Таинственный остров";
    The_Mysterious_Island.avtor = "Жюль Верн";
    The_Mysterious_Island.year = 1874;

    var Hard_to_Be_a_God = Object.create(book);
    Hard_to_Be_a_God.name = "Трудно быть богом";
    Hard_to_Be_a_God.avtor = "Аркадий и Борис Стругацкие";
    Hard_to_Be_a_God.year = 1964;

    function getInfBookCall(avtor, name, year) {
        console.log(this[avtor] + " " + this[name] + " " + this[year]);
/*        for (var key in b){
            console.log(b[key]);
        }*/
    }
    function getInfBookAplly(a) {
        for (var key in a){
            console.log(a[key]);
        }
    }
    function getInfBookBind(arg){
        for (var key1 in this){
            console.log(this[key1]);
        }
        console.log('//');
        for (var key2 in arg) {
            console.log(arg[key2]);
        }
    }

    getInfBookCall.call(book, 'avtor', 'name', 'year');
    getInfBookCall.call(War_of_the_Worlds, 'avtor', 'name', 'year');
    console.log('////////////////////////////////////////////////////////1');

    getInfBookAplly.apply(book, [book]);
    //console.log('//');
    getInfBookAplly.apply(War_of_the_Worlds, [War_of_the_Worlds]);
    console.log('////////////////////////////////////////////////////////2');

    var w = getInfBookBind.bind(book);
    w(The_Mysterious_Island);
    console.log('////////////////////////////////////////////////////////3');

    book.getCall.call(book, 'name', 'avtor');
    console.log('////////////////////////////////////////////////////////4');

    book.getAplly.apply(book, ["name", "avtor"]);
    console.log('////////////////////////////////////////////////////////5');

    var g = book.getBind.bind(book);
    g(War_of_the_Worlds);
}