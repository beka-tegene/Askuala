import React from "react";
import DataTable from "react-data-table-component";
import style from './Member.module.css'
const StudentMember = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "location",
      selector: (row) => row.place,
      sortable: true,
    },
  ];
  const data = [
    
    {
      id: "0002",
      firstName: "abel max",
      email: "abelmax@gmail.com",
      phoneNumber: "+25178981223",
      place: "Addis ababa",
    },
    {
      id: "0003",
      firstName: "kayel max",
      email: "kayelmax@gmail.com",
      phoneNumber: "+25178981223",
      place: "Addis ababa",
    },
    {
      id: "0007",
      firstName: "smon max",
      email: "smonmax@gmail.com",
      phoneNumber: "+25178981223",
      place: "Addis ababa",
    },
    {
      id: "0008",
      firstName: "ragnar max",
      email: "ragnarmax@gmail.com",
      phoneNumber: "+25178981223",
      place: "Addis ababa",
    },
    {
      id: "0009",
      firstName: "gelila max",
      email: "gelilamax@gmail.com",
      phoneNumber: "+25178981223",
      place: "Addis ababa",
    },
    {
      id: "0010",
      firstName: "fasica max",
      email: "fasicamax@gmail.com",
      phoneNumber: "+25178981223",
      place: "Addis ababa",
    },
    {
      id: "0011",
      firstName: "beimnet max",
      email: "beimnetmax@gmail.com",
      phoneNumber: "+25178981223",
      place: "Addis ababa",
    },
    {
      id: "0012",
      firstName: "aron max",
      email: "aronmax@gmail.com",
      phoneNumber: "+25178981223",
      place: "Addis ababa",
    },
  ];
  const customStyle = {
    rows: {
        style: {
          cursor: "pointer",
          backgroundColor: "#fefefe",
          color: "#272727",
          "&:hover": {
            backgroundColor: "#979797",
            color: "#fff",
          },
        },
      },
      headCells: {
        style: {
          backgroundColor: "#ffffff",
          color: "#272727",
        },
      },
  };
  return (
    <div className={style.container}>
      <DataTable
        columns={columns}
        data={data}
        // selectableRows
        fixedHeader
        pagination
        customStyles={customStyle}
      />
    </div>
  );
};

export default StudentMember;
