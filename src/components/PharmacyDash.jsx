import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import "./styles/Pharmacy.scss";

const COLUMNS = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Pharmacy ID",
    accessor: "pharmacy_id",
  },
  {
    Header: "Mobile",
    accessor: "mobile",
  },
  {
    Header: "E-mail",
    accessor: "e-mail",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Actions",
    accessor: "actions",
  },
];

const FilteringRow = ({ filter, setFilter }) => {
  return (
    <div className="pharmTitle">
      <>
        <h4>Pharmacy</h4>
        <div>
          <input
            type="text"
            value={filter || ""}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search Organisation"
          />
          <i></i>
        </div>
      </>
      <div className="filterBar">
        <i></i>
        <p>Filter</p>
        <i></i>
      </div>
      <div className="addPharm">
        <div id="plus">+</div>
        <div id="text">Add Pharmacy</div>
      </div>
    </div>
  );
};

const PharmacyDash = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    state,
    page,
    // rows,
    nextPage,
    previousPage,
    setGlobalFilter,
    pageOptions,
    // setPageSize,
    canPreviousPage,
    canNextPage,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="tableDiv">
      <FilteringRow filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <React.Fragment className="checkBoxDisplay">
              <input type="checkbox" name="" id="" />
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <React.Fragment className="checkBoxDisplay">
                <input type="checkbox" name="" id="" />
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <div>
        {/* <selected
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </selected> */}
        <span>
          {pageIndex + 1} of {pageOptions.length}
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PharmacyDash;
