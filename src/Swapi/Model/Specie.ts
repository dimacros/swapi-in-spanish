/**
 * A species within the Star Wars universe
 */
export interface Specie {
    /**
     * The ISO 8601 date format of the time that this resource was edited.
     */
    edited: string;
    /**
     * The name of this species.
     */
    name: string;
    /**
     * The classification of this species.
     */
    classification: string;
    /**
     * An array of People URL Resources that are a part of this species.
     */
    people: string[];
    /**
     * A comma-seperated string of common eye colors for this species, none if this species does not typically have eyes.
     */
    eye_colors: string;
    /**
     * The ISO 8601 date format of the time that this resource was created.
     */
    created: string;
    /**
     * The designation of this species.
     */
    designation: string;
    /**
     * A comma-seperated string of common skin colors for this species, none if this species does not typically have skin.
     */
    skin_colors: string;
    /**
     * The language commonly spoken by this species.
     */
    language: string;
    /**
     * The hypermedia URL of this resource.
     */
    url: string;
    /**
     * A comma-seperated string of common hair colors for this species, none if this species does not typically have hair.
     */
    hair_colors: string;
    /**
     * The URL of a planet resource, a planet that this species originates from.
     */
    homeworld: string;
    /**
     *  An array of Film URL Resources that this species has appeared in.
     */
    films: string[];
    /**
     * The average lifespan of this species in years.
     */
    average_lifespan: string;
    /**
     * The average height of this person in centimeters.
     */
    average_height: string;
}
  