
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({});

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

/** Dofa data type */
export const dofaData: Dofa[] = [
    {
        id: 1,
        type: DofaTypeEnum.STRENGTHS,
        items: [
            {
                id: 1,
                description: lorem.generateSentences(1)
            },
            {
                id: 2,
                description: lorem.generateSentences(1)
            },
            {
                id: 3,
                description: lorem.generateSentences(1)
            }
        ]
    },
    {
        id: 2,
        type: DofaTypeEnum.WEAKNESSES,
        items: [
            {
                id: 1,
                description: lorem.generateSentences(1)
            },
            {
                id: 2,
                description: lorem.generateSentences(1)
            },
            {
                id: 3,
                description: lorem.generateSentences(1)
            }
        ]

    },
    {
        id: 3,
        type: DofaTypeEnum.OPPORTUNITIES,
        items: [
            {
                id: 1,
                description: lorem.generateSentences(1)
            },
            {
                id: 2,
                description: lorem.generateSentences(1)
            },
            {
                id: 3,
                description: lorem.generateSentences(1)
            }
        ]
    },
    {
        id: 4,
        type: DofaTypeEnum.THREATS,
        items: [
            {
                id: 1,
                description: lorem.generateSentences(1)
            },
            {
                id: 2,
                description: lorem.generateSentences(1)
            },
            {
                id: 3,
                description: lorem.generateSentences(1)
            }
        ]
    },
];
