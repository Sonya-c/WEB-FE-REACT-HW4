import { dofaData, DofaTypeEnum } from "@/utils/data/dofa.data";
import { LoremIpsum } from "lorem-ipsum";
import CardList from "../CardList";
import Table from "../Table";
import ObjectivesData from "@/utils/data/objectives.data";
import Chip, { ChipTypeEnum } from "../Chip";
import orgIdentityData from "@/utils/data/orgIdentity.data";
import AuthorInfo from "../AuthorInfo";
import AuthorImage from '@/assets/images/profile-picture.jpg';
import Cover from '@/assets/images/cover.png';

const lorem = new LoremIpsum({});

/**
 * This function maps the Dofa data to the CardList component.
 */
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
    <div className="flex flex-col p-5 sm:p-0 gap-10 items-center [&_section]:max-w-screen-lg mb-10">

      <div className="bg-white w-full flex justify-center p-10">
        <div className="sm:grid grid-cols-2 gap-5 max-w-screen-xl">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-5xl">
              Strategic Planing - Gafufos Inc 2024.
            </h1>
            <p className="text-lg">{lorem.generateParagraphs(1)}</p>
            <AuthorInfo 
              imageUrl={AuthorImage}
              authorName="Sonya Castro"
              date={new Date("2024-09-15")}
            />
          </div>
          <div>
            <img className="rounded-lg" src={Cover} alt="Strategic Planing" />
          </div>
        </div>
      </div>

      <section id="introduction">
        <h2>Introduction</h2>
        <p>{ lorem.generateParagraphs(2) }</p>
      </section>

      <section id="diagnostic">
        <h2>Current Diagnostic</h2>
        <div className="grid sm:grid-cols-2 gap-3 auto-rows-fr">
          {dofaData.map((dofa, index) => {
            return <CardList id={dofa.id} key={`DofaCard-${index}`}title={dofa.type} items={DofaCardListMapping(dofa.type, dofa.items)} />;
          })}
        </div>
      </section>

      <section id="identity">
        <h2>Organizational Identity</h2>

        {orgIdentityData.map((item) => {
            return <div className="pt-3" key={`orgIdentity-${item.type}`}>
              <h3 className="py-2">{item.type}</h3>
              <p>{ item.description }</p>
            </div>
          })
        }
      </section>

      <section id="objectives">
        <h2>Strategic Objectives</h2>
        
        <Table 
          data={ObjectivesData}
          tableKey="objective-table"
          options={{
            headers: {
              id: {
                transform: () => `Code`
              },
            },
            rows: {
              compliance: {
                transform: (value) => `${value}%`,
                equation: (row: { progress: number; target: number }) => {
                  return (row.progress / row.target) * 100;
                }
              },
              status: {
                equation: (row) => {
                  const compliance = Number(row['compliance']);
                  return compliance >= 76 ? 'Successful' : compliance >= 36 ? 'Acceptable' : 'Critical';
                },
                transform: (value) => {
                  return <Chip 
                    value={value.toString()}
                    type={value === 'Critical' ? ChipTypeEnum.danger : value === 'Successful' ? ChipTypeEnum.success : ChipTypeEnum.warning}
                  />
                },
              }
            }
          }}
        />
      </section>

    </div>
  );
};

export default Main;