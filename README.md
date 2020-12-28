# swapi-in-spanish

## Pre-requisites
Install <b>serverless</b> package: https://www.serverless.com/framework/docs/getting-started/

## Clone repository and Install packages
```git
git clone https://github.com/dimacros/swapi-in-spanish.git
```

```git
npm install
```

## Start server
```git
serverless offline
```

Now the following routes are available:

- GET `http://localhost:3000/dev/films` (Spanish)
- POST `http://localhost:3000/dev/people`
- GET `http://localhost:3000/dev/people`
- GET `http://localhost:3000/dev/planets` (Spanish)
- GET `http://localhost:3000/dev/species`
- GET `http://localhost:3000/dev/starships`
- GET `http://localhost:3000/dev/vehicles`

To create people, you must send the body:
```ts
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
```

### Optional
Use Prisma Studio: `npx prisma studio`
