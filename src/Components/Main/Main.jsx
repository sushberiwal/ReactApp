import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
const Main = () => {
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [paginationCount, setPaginationCount] = useState(1);

  useEffect(async () => {
    let response = await axios.get(
      "https://intense-tor-76305.herokuapp.com/merchants"
    );
    let paginationCount = Math.ceil(response.data.length / 5);
    console.log(paginationCount);
    let tableData = response.data.slice(0, 5);
    setData(response.data);
    setTableData(tableData);
    setPaginationCount(paginationCount);
  }, []);

    const tableDataHandler = (pageCount) => {
        let tableData;
        if(pageCount == 1){
            tableData = data.slice(0,5);
        }
        else{
            console.log(data);
            let startIndex = (pageCount-1)*5;
            let elementsPick = startIndex + 5 <= data.length ? startIndex + 5 : data.length;
            console.log(startIndex , elementsPick);
            tableData = data.slice( startIndex , elementsPick );
        }
        setTableData(tableData);
    };

  return (
    <div>
      <Table tableData={tableData}></Table>
      <Pagination
        count={paginationCount}
        tableDataHandler={tableDataHandler}
      ></Pagination>
    </div>
  );
};

export default Main;
