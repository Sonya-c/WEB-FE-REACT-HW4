/** Organizational identity data type */
type OrgIdentity = {
  type: string;
  description: string;
};

/** Organizational identity data */
const orgIdentityData: OrgIdentity[] = [
  {
    type: "Mission",
    description:
      "Our mission is to design and provide premium-quality eyewear that combines functionality with style, offering customers clear vision and confidence in their appearance. We are committed to using cutting-edge technology and sustainable materials in crafting eyewear that is both durable and comfortable. Through innovation, customer-centric service, and a passion for excellence, we strive to enhance lives by delivering eyewear that meets the diverse needs of our global customer base, from everyday users to fashion-forward individuals",
  },
  {
    type: "Vision",
    description:
      "Our vision is to become the leading global brand in the eyewear industry, recognized not only for our innovative designs but also for our commitment to sustainability, ethical manufacturing, and exceptional customer experience. We aim to continuously push the boundaries of eyewear technology and fashion, while expanding our market presence worldwide. By fostering long-term relationships with our customers, partners, and communities, we envision a future where our eyewear is the preferred choice for millions of people who seek both style and substance in their vision care",
  },
  {
    type: "Policy",
    description:
      "We are dedicated to maintaining the highest standards in all areas of our business, from product development to customer service. Our policy emphasizes ethical business practices, including fair treatment of our employees, responsible sourcing of materials, and minimizing our environmental footprint. We are committed to transparency, continuously improving the quality of our products, and fostering a culture of innovation. Our company places a strong emphasis on customer satisfaction, ensuring that we listen to feedback and respond proactively to meet the evolving needs of our customers",
  },
];

export default orgIdentityData;
