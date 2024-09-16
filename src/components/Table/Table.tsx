type rowType = Record<string, string | number | boolean>;

/* TableProps type definition */
export type TableProps = {
  tableKey: string;
  headers?: string[];
  data: rowType[];
  options?: {
    headers?: {
      [key: string]: {
        transform?: (value: string | number | boolean) => string | number | boolean | JSX.Element;
      };
    },
    rows?: {
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
export const Table = ({ headers, data, options, tableKey }: TableProps) => {
  // If headers are not provided, get them from the data
  if (!headers) {
    headers = Object.keys(data[0]);
  }

  // Apply equation to data
  if (options?.rows) {
    Object.entries(options.rows).forEach(([header, column]) => {
      if (column.equation)
        data = data.map(row => ({
          ...row,
          [header]: column.equation?.(row) ?? ''
        }));

        // Add a new header if the equation is applied
        if (!headers.includes(header)) {
          headers.push(header);
        }
    });
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border shadow">
        <thead className="w-full bg-gray-100 border border-b-2 capitalize">
          <tr>
            {headers.map((header, index) => (
              <th key={`${tableKey}-header-${index}`} className="p-3">
                {options?.headers?.[header]?.transform ? options?.headers?.[header]?.transform(header) : header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={`${tableKey}-row-${index}`}>
                {headers.map((header, cellIndex) => (
                  <td 
                    key={`${tableKey}-cel-${index}-${cellIndex}`}
                    className="p-3 border-b"
                    >{
                    options?.rows?.[header]?.transform
                      ? options.rows[header].transform(row[header])
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