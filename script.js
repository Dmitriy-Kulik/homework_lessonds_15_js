/*
Создать основной объект book. В этом объекте должны быть описаны дефолтные состовляющие каждой книги.
Создать новые книги с их свойствами.
Реализовать два варианта:
    a) Использовать метод в объекте book, который будет возвращать все данные о книге.
    b) Использовать функцию, которая будет возвращать все данные о книге.
В каждом варианте (метод и функция) вывести данные о книге используя call, aplly, bind
*/


function books() {
    function book(name, avtor, year, qantPages) {
        this.name = name;
        this.avtor = avtor;
        this.year = year;
        this.qantPages = qantPages;
        
 /*       this.getInfBook = function () {
            for(var key in book){
                console.log(book[key]);
            };

        }*/
    }

    var War_of_the_Worlds = new book('Война миров', 'Герберт Уельс', 1897, 356);
    var Vingt_mille_lieues_sous_les_mers = new book('Двадцать тысяч льё под водой', 'Жюль Верн', 1870, 483);
    var The_Mysterious_Island = new book('Таинственный остров', 'Жюль Верн', 1874, 400);
    var Hard_to_Be_a_God = new book('Трудно быть богом', 'Аркадий и Борис Стругацкие', 1964, 300);

    function getInfBookCall(b) {
        var arg = [].slice.call(arguments);
        for (var key in arg){
            console.log(arg[key]);
            console.log('1');
        }
    }
    function getInfBookAplly(a) {
        for (var key in a){
            console.log(a[key]);
        }
    }
    function getInfBookBind(c) {
        for (var key in this){
            console.log(this[key]);
        }
        for (var item in c){
            console.log(c[item]);
        }
    }

    getInfBookCall.call(book, War_of_the_Worlds, Hard_to_Be_a_God);
    console.log('///////////////////////////////');
    var arr = [Vingt_mille_lieues_sous_les_mers, The_Mysterious_Island];
    getInfBookAplly.apply(book, arr);
    console.log('///////////////////////////////');
    var b = getInfBookBind.bind(Hard_to_Be_a_God);
    b([War_of_the_Worlds, The_Mysterious_Island]);
    console.log('///////////////////////////////');

    //War_of_the_Worlds.getInfBook();
    //getInfBookAplly.apply(Vingt_mille_lieues_sous_les_mers, Vingt_mille_lieues_sous_les_mers.name);
    //console.log('///////////////////////////////');
}