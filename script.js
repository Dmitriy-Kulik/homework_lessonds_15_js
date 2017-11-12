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
        
/*        this.getInfBook = function () {
            for(var key in book()){
                console.log(key);
            }

        }*/
    }


    var War_of_the_Worlds = new book('Война миров', 'Герберт Уельс', 1897, 356);
    var Vingt_mille_lieues_sous_les_mers = new book('Двадцать тысяч льё под водой', 'Жюль Верн', 1870, 483);
    //console.log(War_of_the_Worlds.getInfBook());
    //console.log(Vingt_mille_lieues_sous_les_mers);

    function getInfBookCall() {
        for (var key in War_of_the_Worlds){
            console.log(War_of_the_Worlds[key]);
        }
    }
    function getInfBookAplly() {
        for (var key in Vingt_mille_lieues_sous_les_mers){
            console.log(Vingt_mille_lieues_sous_les_mers[key]);
        }
    }
    getInfBookCall.call(War_of_the_Worlds);
    console.log('///////////////////////////////');
    getInfBookAplly.apply(Vingt_mille_lieues_sous_les_mers, Vingt_mille_lieues_sous_les_mers.name);
    console.log('///////////////////////////////');
}