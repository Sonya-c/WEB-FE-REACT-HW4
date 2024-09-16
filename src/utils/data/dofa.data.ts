/* Dofa enum */
export enum DofaTypeEnum {
  STRENGTHS = "Strengths",
  WEAKNESSES = "Weaknesses",
  OPPORTUNITIES = "Opportunities",
  THREATS = "Threats",
}

/* Dofa type */
export type Dofa = {
  id: number;
  type: DofaTypeEnum;
  items: {
    id: number;
    description: string;
  }[];
};

/** Dofa data type */
export const dofaData: Dofa[] = [
  {
    id: 1,
    type: DofaTypeEnum.STRENGTHS,
    items: [
      {
        id: 1,
        description:
          "High-Quality Products: Our glasses are known for durability and comfort, leading to high customer retention",
      },
      {
        id: 2,
        description:
          "Innovative Design Team: The creative team consistently develops stylish and unique eyewear that appeals to a wide range of customers",
      },
      {
        id: 3,
        description:
          "Strong Brand Reputation: Established trust in the market due to consistent product quality and excellent customer service.",
      },
    ],
  },
  {
    id: 2,
    type: DofaTypeEnum.WEAKNESSES,
    items: [
      {
        id: 1,
        description:
          "Limited Online Presence: Our digital marketing and e-commerce channels are underdeveloped, limiting online sales growth",
      },
      {
        id: 2,
        description:
          "High Production Costs: Manufacturing costs remain high, reducing overall profit margins",
      },
      {
        id: 3,
        description:
          "Narrow Product Range: Lack of diversity in product offerings leads to missed opportunities in niche markets",
      },
    ],
  },
  {
    id: 3,
    type: DofaTypeEnum.OPPORTUNITIES,
    items: [
      {
        id: 1,
        description:
          "Growing Demand for Blue-Light Glasses: Increasing screen time has driven demand for blue-light-blocking eyewear",
      },
      {
        id: 2,
        description:
          "Expansion into International Markets: Entering new regions could significantly increase market share and revenue",
      },
      {
        id: 3,
        description:
          "Collaboration with Influencers: Partnering with social media influencers could improve brand visibility and attract younger audiences",
      },
    ],
  },
  {
    id: 4,
    type: DofaTypeEnum.THREATS,
    items: [
      {
        id: 1,
        description:
          "Intense Competition: Many competitors are offering similar products at lower prices, creating pricing pressure",
      },
      {
        id: 2,
        description:
          "Economic Downturn: A weaker economy may reduce discretionary spending on fashion accessories like glasses",
      },
      {
        id: 3,
        description:
          "Supply Chain Disruptions: Global supply chain issues can affect production timelines and increase costs",
      },
    ],
  },
];
