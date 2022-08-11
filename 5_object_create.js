// Object Of Protos
const BookProtos = {
    getSummary: function(){
        return `${this.title} was written by $
{this.author} in ${this.year}`;

    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return`${this.title} is ${years} years old`;
        

    }
}
// Create object
// const book1 = Object.create(BookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = '2013';
// console.log(book1);
const book1 = Object.create(BookProtos, {
    title: {value: 'Book One'},
    auther: {value:'John Doe'},
    year: {value: '2013'},
});
console.log(book1);