

/* TableProps type definition */
export type TableProps = {
  headers: string[];
  data: Record<string, string | number | boolean >[];
  options?: {
    columns?: {
      [key: string]: {
        transform?: (value: string | number | boolean) => string;
      };
    }
  }
};

/**
 * This is a Table component. It displays data in a table format.
 */
export const Table = ({ headers, data, options }: TableProps) => {
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