import { PrismaClient } from "@prisma/client"

export class PrismaFactory {
    static create() {
        return new PrismaClient();
    }
}
