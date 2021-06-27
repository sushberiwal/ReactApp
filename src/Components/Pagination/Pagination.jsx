import React from "react";

const Pagination = (props) => {
  let pageCount = props.count;
  let pagesArray = [];
  for (let i = 1; i <= pageCount; i++) {
    pagesArray.push(i);
  }

  return (
    <ul>
      {pagesArray.map((pageCount) => {
        return (
          <li onClick={ ()=>{ props.tableDataHandler(pageCount) }} key={pageCount}>
            {pageCount}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
