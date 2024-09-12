
import { DofaData } from "@/utils/data/dofa.data";
import { LoremIpsum } from "lorem-ipsum";
import CardList from "../CardList";
import { DofaTypeEnum } from "@/types/dofa.type";

const lorem = new LoremIpsum({});


const DofaCardListMapping = (type: DofaTypeEnum, items: {
  id: number;
  description: string;
}[]) => {
  return items.map((item, index) => {
    return {
      id: item.id,
      name: `${type} ${index}`,
      description: item.description
    };
  });
}
/**
 * This is a Main component. 
 */
export const Main = () => {
  return (
    <div className="flex flex-col p-5 sm:p-0 gap-10 container mx-auto">
      <section>
        <h1>Introduction</h1>
        <p className="pt-3">{ lorem.generateParagraphs(2) }</p>
      </section>

      <section>
        <h2 className="mt-3 mb-5">Current Diagnostic</h2>
        <div className="grid sm:grid-cols-2 gap-3 auto-rows-fr">
          {DofaData.map((dofa) => {
            return <CardList id={dofa.id} title={dofa.type} items={DofaCardListMapping(dofa.type, dofa.items)} />;
          })}
        </div>
      </section>

      <section>
        <h2>Organizational Identity</h2>

        <div className="pt-3">
          <h3>Mission</h3>
          <p>{ lorem.generateParagraphs(2) }</p>
        </div>

        <div className="pt-3">
          <h3>Vision</h3>
          <p>{ lorem.generateParagraphs(2) }</p>
        </div>
        
        <div className="pt-3">
          <h3>Policy</h3>
          <p>{ lorem.generateParagraphs(2) }</p>
        </div>
      </section>

      <section>
        <h2>Strategic objectives</h2>

      </section>

    </div>
  );
};

export default Main;