class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    get PG() {
        return `The ${this.title} ${this.studio} is rated ${this.rating}`;
    }
}

const Casino = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(Casino.PG);
