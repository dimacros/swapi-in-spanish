import { SwapiInSpanish } from "../Swapi/SwapiInSpanish";
import { Swapi } from "../Swapi";
import { PlanetRepository } from "./PlanetRepository";

export class PlanetApiRepository implements PlanetRepository {
    private swapiInSpanish;

    constructor(
        private swapi: Swapi
    ) {
        this.swapiInSpanish = new SwapiInSpanish();
    }

    async findByPage(page: string|undefined) {
        const response = await this.swapi.getPlanets(page);

        return response.data.results.map(this.swapiInSpanish.transformPlanet);
    }
}
