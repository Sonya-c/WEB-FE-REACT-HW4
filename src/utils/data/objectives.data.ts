/** Objectives data type */
export type Objective = {
  id: number;
  goal: string;
  target: number;
  progress: number;
};

/** Objectives data */
export const ObjectivesData: Objective[] = [
  {
    id: 1,
    goal: "Expand online sales by increasing digital marketing efforts.",
    target: 20,
    progress: 10,
  },
  {
    id: 2,
    goal: "Diversify product offerings by launching 3 new eyewear collections.",
    target: 3,
    progress: 3,
  },
  {
    id: 3,
    goal: "Reduce production costs by 10% through improved supply chain management.",
    target: 10,
    progress: 3,
  },
  {
    id: 4,
    goal: "Increase brand awareness by collaborating with 5 social media influencers.",
    target: 5,
    progress: 2,
  },
  {
    id: 5,
    goal: "Enter 2 new international markets by the end of the year.",
    target: 2,
    progress: 0,
  },
];

export default ObjectivesData;
