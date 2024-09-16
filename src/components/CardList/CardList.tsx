/* Card list props */
export type CardListProps = {
  id: number;
  title: string;
  items: {
    id: number;
    name?: string;
    description?: string;
  }[];
};

/**
 * This is a card list component. It receives an id, title and items as props. The items is displayed in a list format.
 */
export const CardList = ({ id, title, items }: CardListProps) => {
  return (
    <div
      id={title + id}
      key={id}
      className="rounded border bg-white px-3 py-5 shadow"
    >
      <div>
        <h4 className="my-3 text-center text-xl font-semibold capitalize">
          {title}
        </h4>
      </div>
      <div className="p-3">
        <ul className="list-decimal pl-5">
          {items.map((item) => (
            <li key={item.id} className="pb-3">
              {item.name && <p className="text-lg capitalize">{item.name}</p>}
              {item.description && <p className="pt-1">{item.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardList;
