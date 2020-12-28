import { SwapiInSpanish } from "../Swapi/SwapiInSpanish";
import { Swapi } from "../Swapi";
import { FilmRepository } from "./FilmRepository";

export class FilmApiRepository implements FilmRepository {
    private swapiInSpanish;

    constructor(
        private swapi: Swapi
    ) {
        this.swapiInSpanish = new SwapiInSpanish();
    }

    async findByPage(page: string|undefined) {
        const response = await this.swapi.getFilms(page);

        return response.data.results.map(this.swapiInSpanish.transformFilm);
    }
}
