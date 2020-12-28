import type { APIGatewayEvent } from 'aws-lambda';
import { PlanetApiRepository } from '../Repository/PlanetApiRepository';
import { Swapi } from '../Swapi';

export async function handler(event: APIGatewayEvent) {
    const repository = new PlanetApiRepository(Swapi.default());
    const data = await repository.findByPage(event.queryStringParameters?.page);

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };

    return response;
}
