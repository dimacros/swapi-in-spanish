export interface CreatePeopleRequest {
    name: string,
    birthYear: string,
    gender: string,
    height: string,
    mass: string,
    skinColor: string,
    hairColor: string,
    eyeColor: string,
    homeworld: {
        diameter: string,
        climate: string,
        surfaceWater: string,
        name: string,
        rotationPeriod: string,
        terrain: string,
        gravity: string,
        orbitalPeriod: string,
        population: string
    },
}
