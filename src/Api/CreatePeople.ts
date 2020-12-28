import type { APIGatewayEvent } from 'aws-lambda';
import { CreatePeopleRequest } from '../Request/CreatePeopleRequest';
import { PrismaFactory } from '../Factory/PrismaFactory';

export async function handler(event: APIGatewayEvent) {
    const prisma = PrismaFactory.create();
    const request: CreatePeopleRequest = JSON.parse(event.body || '');

    try {
        const people = await prisma.people.create({
            data: {
                name: request.name,
                birthYear: request.birthYear,
                gender: request.gender,
                height: request.height,
                mass: request.mass,
                skinColor: request.skinColor,
                hairColor: request.hairColor,
                eyeColor: request.eyeColor,
                homeworld: {
                    connectOrCreate: {
                        where: { name: request.homeworld.name },
                        create: {
                            diameter: request.homeworld.diameter,
                            climate: request.homeworld.climate,
                            surfaceWater: request.homeworld.surfaceWater,
                            name: request.homeworld.name,
                            rotationPeriod: request.homeworld.rotationPeriod,
                            terrain: request.homeworld.terrain,
                            gravity: request.homeworld.gravity,
                            orbitalPeriod: request.homeworld.orbitalPeriod,
                            population: request.homeworld.population
                        }
                    }
                }
            }
        });

        return {
            statusCode: 201,
            headers: {
                Location: event.path + '/' + people.id
            }
        };
    } catch (e) {
        prisma.$disconnect();
    }
}
