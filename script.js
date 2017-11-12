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
        
        this.getInfBook = function () {
            var arr = {};
            for(var key in book()){
                return console.log(key);
            }
            //return arr;
        }
    }

    var War_of_the_Worlds = new book('Война миров', 'Герберт Уельс', 1897, 356);
    var Vingt_mille_lieues_sous_les_mers = new book('Двадцать тысяч льё под водой', 'Жюль Верн', 1870, 483);
    console.log(War_of_the_Worlds.getInfBook());
    console.log(Vingt_mille_lieues_sous_les_mers);
    console.log(War_of_the_Worlds.getInfBook())
}