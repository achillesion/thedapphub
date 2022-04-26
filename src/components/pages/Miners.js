import axios from "axios";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { useState, useEffect } from "react";



  
  function Miners() {
    const [data,setData] = useState([]);
    
  useEffect(()=>{
    getData();
  },[])

  const getData = () => {
    axios("https://jsonplaceholder.typicode.com/comments").then((res)=>{
    console.log(res.data);
    setData(res.data);
      
    });
  };

  const columns=[{
    dataField:"email",
    text:"Email",

  },
  {
    dataField:"postId",
    text:"Product ID",

  },
  {
    dataField:"Token",
    text:"Token",

  },
  {
    dataField:"Fees",
    text:"Fees",

  },
  {
    dataField:"Age",
    text:"Age",

  },
  {
    dataField:"TVL",
    text:"TVL",

  },
  {
    dataField:"Daily %",
    text:"Daily %",

  },
  {
    dataField:"Contract",
    text:"Contract",

  },
  {
    dataField:"Social",
    text:"Social",

  }

];


    return (
        <div style={{width:"100%", overflowX: "scroll" }}>
          <h2>sdsdsdd</h2>
        <BootstrapTable keyField="id" data={data} columns={columns} />
       </div>
    );
  }

export default Miners;
