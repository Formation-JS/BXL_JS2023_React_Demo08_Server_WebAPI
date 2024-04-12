export class BookDTO {
    constructor({ id, name, desc, price, categorie }) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.categorie = categorie; 
    }
}

export class BookListDTO {
    constructor({ id, name }) {
        this.id = id;
        this.name = name;
    }
}