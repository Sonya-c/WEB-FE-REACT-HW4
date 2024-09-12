import { Dofa, DofaTypeEnum } from "@/types/dofa.type";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({});

export const DofaData: Dofa[] = [
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
