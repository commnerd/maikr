export interface Sluggable<EnumStringOrString extends string> {
    /**
     * Retrieve the slug for the storage medium
     */
    slug: EnumStringOrString;

    /**
     * Get the displayable label for the storage medium 
     */
    label: string;
}