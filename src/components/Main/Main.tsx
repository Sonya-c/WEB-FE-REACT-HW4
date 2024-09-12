
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({});

/**
 * This is a Main component. 
 */
export const Main = () => {
  return (
    <div className="flex flex-col gap-3 container mx-auto">
      <section>
        <h1>Introduction</h1>
        <p className="pt-3">{ lorem.generateParagraphs(2) }</p>
      </section>

      <section>
        <h2>Current Diagnostic</h2>
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