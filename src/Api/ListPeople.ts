import type { APIGatewayEvent } from 'aws-lambda';
import { PrismaFactory } from '../Factory/PrismaFactory';
import { PeoplePrismaRepository } from '../Repository/PeoplePrismaRepository';

export async function handler(event: APIGatewayEvent) {
    const repository = new PeoplePrismaRepository(PrismaFactory.create());
    const data = await repository.findAll();

    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };

    return response;
}
