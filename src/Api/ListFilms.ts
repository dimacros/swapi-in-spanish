import type { APIGatewayEvent } from 'aws-lambda';
import { FilmApiRepository } from '../Repository/FilmApiRepository';
import { Swapi } from '../Swapi';

export async function handler(event: APIGatewayEvent) {
    const repository = new FilmApiRepository(Swapi.default());
    const data = await repository.findByPage(event.queryStringParameters?.page);

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };

    return response;
}
