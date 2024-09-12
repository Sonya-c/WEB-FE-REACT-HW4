
/* Dofa enum */
export enum DofaTypeEnum {
    STRENGTHS = 'Strengths',
    WEAKNESSES = 'Weaknesses',
    OPPORTUNITIES = 'Opportunities',
    THREATS = 'Threats',
};

/* Dofa type */
export type Dofa = {
    id: number, 
    type: DofaTypeEnum, 
    items: {
        id: number, 
        description: string,
    }[]
};

