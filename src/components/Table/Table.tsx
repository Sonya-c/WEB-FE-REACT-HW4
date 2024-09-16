/** A simple cell */
type SimpleCellType = string | number | boolean;

/** A cell enhanced with JSX.Element */
type EnhancedCellType = SimpleCellType | JSX.Element;

/** A row type definition */
type RowType = Record<string, SimpleCellType>;

/* TableProps type definition */
export type TableProps = {
  tableKey: string;
  headers?: string[];
  data: RowType[];
  options?: {
    headers?: {
      [key: string]: {
        transform?: (value: SimpleCellType) => EnhancedCellType;
      };
    },
    rows?: {
      [key: string]: {
        equation? (row: RowType): SimpleCellType;
        transform?: (value: SimpleCellType) => EnhancedCellType;
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

  /**
   * Transform the header before rendering it
   */
  const transformHeader = (header: string): EnhancedCellType => {
    return options?.headers?.[header]?.transform ? options?.headers?.[header]?.transform(header) : header;
  };

  /**
   * Transform the row before rendering it
   */
  const transformRow = (row: RowType, header: string): EnhancedCellType => {
    return options?.rows?.[header]?.transform ? options?.rows?.[header]?.transform(row[header]) : row[header];
  }

  return (
    <div className="overflow-x-auto bg-white shadow-sm">
      <table className="w-full border shadow">
        <thead className="w-full bg-gray-100 border border-b-2 capitalize">
          <tr>
            {headers.map((header, index) => (
              <th key={`${tableKey}-header-${index}`} className="p-3">
                {transformHeader(header)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => {
            return (
              <tr key={`${tableKey}-row-${rowIndex}`}>
                {headers.map((header, cellIndex) => (
                  <td key={`${tableKey}-cel-${rowIndex}-${cellIndex}`} className="p-3 border-b">
                    { transformRow(row, header) }
                  </td>
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