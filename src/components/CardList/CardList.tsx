
/* Card list props */
export type CardListProps = {
  id: number;
  type: string;
  items: {
    id: number;
    name: string ;
    description: string;
  }[];
}

/**
 * This is a card list component. It receives an id, type and items as props. The items is displayed in a list format.
 */
export const CardList = ({ id, type, items }: CardListProps) => {
  return (
    <div id={type + id} key={id} className="px-3 py-5 border rounded shadow">
      <div>
        <h4 className="text-xl font-semibold capitalize text-center my-3">
          { type }
        </h4>
      </div>
      <div>
        <ul className="list-decimal pl-5">
          {items.map((item) => (
            <li key={item.id} className="pb-3">
              <p className="text-lg capitalize">{item.name}</p>
              <p className="pt-1">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardList;