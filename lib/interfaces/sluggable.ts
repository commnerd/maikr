export interface Sluggable<EnumStringOrString extends string> {
    /**
     * Retrieve the slug for the storage medium
     */
    getSlug(): EnumStringOrString;

    /**
     * Get the displayable label for the storage medium 
     */
    getLabel(): string;
}