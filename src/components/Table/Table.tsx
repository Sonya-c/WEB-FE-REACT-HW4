type rowType = Record<string, string | number | boolean>;

/* TableProps type definition */
export type TableProps = {
  headers: string[];
  data: rowType[];
  options?: {
    columns?: {
      [key: string]: {
        equation? (row: rowType): string | number | boolean;
        transform?: (value: string | number | boolean) => string | number | boolean | JSX.Element;
      };
    }
  }
};

/**
 * This is a Table component. It receives headers, data and options as props. The options prop is optional and can be used to transform the data before rendering it. Data can be transformed into string, number, boolean or JSX.Element.
 */
export const Table = ({ headers, data, options }: TableProps) => {

  // Apply equation to data
  if (options?.columns) {
    Object.entries(options.columns).forEach(([header, column]) => {
      if (column.equation)
        data = data.map(row => ({
          ...row,
          [header]: column.equation?.(row) ?? ''
        }));
    });
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border shadow">
        <thead className="w-full bg-gray-100 border border-b-2 capitalize">
          <tr>
            {headers.map((header) => (
              <th key={header} className="p-3">{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                {headers.map((header) => (
                  <td key={header} className="p-3 border-b">{
                    options?.columns?.[header]?.transform
                      ? options.columns[header].transform(row[header])
                      : row[header]
                  }</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;