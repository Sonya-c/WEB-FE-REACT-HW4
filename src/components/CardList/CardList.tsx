
/* Card list props */
export type CardListProps = {
  id: number;
  title: string;
  items: {
    id: number;
    name: string ;
    description: string;
  }[];
}

/**
 * This is a card list component. It receives an id, title and items as props. The items is displayed in a list format.
 */
export const CardList = ({ id, title, items }: CardListProps) => {
  return (
    <div id={title + id} key={id} className="px-3 py-5 border rounded shadow bg-white">
      <div>
        <h4 className="text-xl font-semibold capitalize text-center my-3">
          { title }
        </h4>
      </div>
      <div className="p-3">
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