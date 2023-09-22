import React from "react";

interface ITableProps {
  data: { [key: string]: string }[];
  headers: string[];
  cellClass?: string;
  tableClass?: string;
}

const Table = ({ data, headers, tableClass } : ITableProps) => {
  return (
    <table className={tableClass}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => {
          const itemsInLine = Object.values(row);
          return (
            <tr key={rowIndex}>
              {itemsInLine.map((item, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`}>{item}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default Table;