import React from "react";

const Table = (props) => {
  return (
    <div className="table">
        
      {props.tableData.map((tableRow) => {
        return (
          <div key={tableRow.id} className="table-row">
            <div className="table-col-image">
              <img src={tableRow.avatarUrl} alt="" />
            </div>
            <div className="table-col-name">
              <p>{tableRow.firstname}</p>
            </div>
            <div className="table-col-email">
              <p>{tableRow.email}</p>
            </div>
            <div className="table-col-phone">
              <p>{tableRow.phone}</p>
            </div>
            <div className="table-col-premium">
              <p>{tableRow.hasPremium}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
