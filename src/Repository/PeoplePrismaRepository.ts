import type { PrismaClient } from "@prisma/client";
import { PeopleRepository } from "./PeopleRepository";

export class PeoplePrismaRepository implements PeopleRepository {
    constructor(
        private prisma: PrismaClient
    ) {

    }

    async findAll() {
        return this.prisma.people.findMany({ include: { homeworld: true } });
    }
}
