import type { APIGatewayEvent } from 'aws-lambda';

export async function handler(_: APIGatewayEvent) {

    const response = {
        statusCode: 200,
        body: JSON.stringify([]),
    };

    return response;
}
