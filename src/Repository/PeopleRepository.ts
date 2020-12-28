import { People } from "@prisma/client";

export interface PeopleRepository {
    findAll(): Promise<People[]>
}
