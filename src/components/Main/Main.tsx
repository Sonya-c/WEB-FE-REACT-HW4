import { dofaData } from "@/utils/data/dofa.data";
import CardList from "../CardList";
import Table from "../Table";
import ObjectivesData from "@/utils/data/objectives.data";
import Chip, { ChipTypeEnum } from "../Chip";
import orgIdentityData from "@/utils/data/orgIdentity.data";
import AuthorInfo from "../AuthorInfo";
import AuthorImage from "@/assets/images/profile-picture.jpg";
import Cover from "@/assets/images/cover.png";

/**
 * This function maps the Dofa data to the CardList component.
 */
const DofaCardListMapping = (
  items: {
    id: number;
    description: string;
  }[],
) => {
  return items.map((item) => {
    return {
      id: item.id,
      description: item.description,
    };
  });
};

/**
 * This is a Main component.
 */
export const Main = () => {
  return (
    <div className="mb-10 flex flex-col items-center">
      <div className="flex w-full justify-center bg-white p-10">
        <div className="flex max-w-screen-xl grid-cols-2 flex-col gap-5 sm:grid">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="mb-5 mt-3 text-3xl leading-relaxed sm:mb-7 sm:mt-5 sm:text-5xl">
              Strategic Planing - Gafufos Inc 2024.
            </h1>
            <p className="text-lg">
              This strategic plan outlines the direction for a glasses company
              aiming to enhance its market presence, strengthen internal
              operations, and capitalize on growth opportunities
            </p>
            <AuthorInfo
              imageUrl={AuthorImage}
              authorName="Sonya Castro"
              date={new Date("2024-09-15")}
            />
          </div>
          <div className="order-first sm:order-none">
            <img className="rounded-lg" src={Cover} alt="Strategic Planing" />
          </div>
        </div>
      </div>

      <div className="flex max-w-full flex-col gap-10 p-5 sm:max-w-screen-lg">
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            The glasses industry is highly competitive, with growing demand for
            both fashion-forward and functional eyewear. Our company seeks to
            become a leading provider by offering high-quality products,
            innovative designs, and excellent customer service. This strategic
            plan aims to leverage our strengths, address weaknesses, capitalize
            on opportunities, and mitigate threats in order to achieve
            sustainable growth. With a clear focus on improving product
            offerings and operational efficiency, we intend to solidify our
            position in the market while creating value for our customers and
            stakeholders.
          </p>
        </section>

        <section id="diagnostic">
          <h2>Current Diagnostic</h2>
          <div className="grid auto-rows-fr gap-3 sm:grid-cols-2">
            {dofaData.map((dofa, index) => {
              return (
                <CardList
                  id={dofa.id}
                  key={`DofaCard-${index}`}
                  title={dofa.type}
                  items={DofaCardListMapping(dofa.items)}
                />
              );
            })}
          </div>
        </section>

        <section id="identity">
          <h2>Organizational Identity</h2>

          {orgIdentityData.map((item) => {
            return (
              <div className="pt-3" key={`orgIdentity-${item.type}`}>
                <h3 className="py-2">{item.type}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </section>

        <section id="objectives">
          <h2>Strategic Objectives</h2>

          <Table
            data={ObjectivesData}
            tableKey="objective-table"
            options={{
              headers: {
                id: {
                  transform: () => `Code`,
                },
              },
              rows: {
                compliance: {
                  transform: (value) => `${value}%`,
                  equation: (row: { progress: number; target: number }) => {
                    return ((row.progress / row.target) * 100).toFixed(2);
                  },
                },
                status: {
                  equation: (row) => {
                    const compliance = Number(row["compliance"]);
                    return compliance >= 76
                      ? "Successful"
                      : compliance >= 36
                        ? "Acceptable"
                        : "Critical";
                  },
                  transform: (value) => {
                    return (
                      <Chip
                        value={value.toString()}
                        type={
                          value === "Critical"
                            ? ChipTypeEnum.danger
                            : value === "Successful"
                              ? ChipTypeEnum.success
                              : ChipTypeEnum.warning
                        }
                      />
                    );
                  },
                },
              },
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default Main;
