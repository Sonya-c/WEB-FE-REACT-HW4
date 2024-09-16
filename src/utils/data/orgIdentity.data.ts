
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({});

/** Organizational identity data type */
type OrgIdentity = {
    type: string,
    description: string
}

/** Organizational identity data */
const orgIdentityData: OrgIdentity[] = [
    {
        type: 'Mission',
        description: lorem.generateParagraphs(2)
    },
    {
        type: 'Vision',
        description: lorem.generateParagraphs(2)
    },
    {
        type: 'Policy',
        description: lorem.generateParagraphs(2)
    }
];

export default orgIdentityData;