export interface PlanetRepository {
    findByPage(page: string|undefined): Promise<any[]>;
}
