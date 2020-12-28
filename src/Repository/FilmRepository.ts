export interface FilmRepository {
    findByPage(page: string|undefined): Promise<any[]>;
}
