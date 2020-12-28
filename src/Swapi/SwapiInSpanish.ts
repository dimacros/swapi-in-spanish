import { Film } from "./Model/Film";
import { People } from "./Model/People";
import { Planet } from "./Model/Planet";
import { Specie } from "./Model/Specie";
import { Starship } from "./Model/Starship";
import { Vehicle } from "./Model/Vehicle";

export class SwapiInSpanish {
    transformFilm(film: Film) {
        return {
            url: film.url,
            titulo: film.title,
            planetas: film.planets,
            naves: film.starships,
            director: film.director,
            productor: film.producer,
            fechaDeLanzamiento: film.release_date,
            vehiculos: film.vehicles,
            episodioId: film.episode_id,
            resumen: film.opening_crawl,
            personajes: film.characters,
            especies: film.species,
        }
    }

    transformPeople(people: People) {
        return people;
    }

    transformPlanet(planet: Planet) {
        return {
            url: planet.url,
            nombre: planet.name,
            diametro: planet.diameter,
            clima: planet.climate,
            superficieDelAgua: planet.surface_water,
            periodoDeRotacion: planet.rotation_period,
            terreno: planet.terrain,
            gravedad: planet.gravity,
            periodoOrbital: planet.orbital_period,
            peliculas: planet.films,
            residentes: planet.residents,
            poblacion: planet.population
        }
    }

    transformSpecie(specie: Specie) {
        return specie;
    }

    transformStarship(starship: Starship) {
        return starship;
    }

    transformVehicle(vehicle: Vehicle) {
        return vehicle;
    }
}
