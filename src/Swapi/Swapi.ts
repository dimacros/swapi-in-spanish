import axios from "axios";
import { SwapiResponse } from "./SwapiResponse";
import { Film } from "./Model/Film";
import { People } from "./Model/People";
import { Planet } from "./Model/Planet";
import { Starship } from "./Model/Starship";
import { Specie } from "./Model/Specie";
import { Vehicle } from "./Model/Vehicle";

export class Swapi {
    private http;

    constructor(baseUrl: string) {
        this.http = axios.create({
            baseURL: baseUrl,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    }

    static default() {
        return new Swapi("https://swapi.py4e.com/api");
    }

    async getFilms(page = '1') {
        return this.http.get<SwapiResponse<Film[]>>('/films?page=' + page);
    }

    async getPeople(page = '1') {
        return this.http.get<SwapiResponse<People[]>>('/people?page=' + page);
    }

    async getPlanets(page = '1') {
        return this.http.get<SwapiResponse<Planet[]>>('/planets?page=' + page);
    }

    async getSpecies(page = '1') {
        return this.http.get<SwapiResponse<Specie[]>>('/species?page=' + page);
    }

    async getStarships(page = '1') {
        return this.http.get<SwapiResponse<Starship[]>>('/starships?page=' + page);
    }

    async getVehicles(page = '1') {
        return this.http.get<SwapiResponse<Vehicle[]>>('/vehicles?page=' + page);
    }
}
