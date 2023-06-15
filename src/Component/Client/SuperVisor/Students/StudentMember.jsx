import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import style from './Member.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../../Store/Auth";
const StudentMember = () => {
  const users = useSelector((state) => state.auth.user);
  const studentUser = users?.filter((item)=> item.role === 'Student')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])
  const columns = [
    {
      name: "ID",
      selector: (row) => row.Id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.fullName,
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
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "User Type",
      selector: (row) => row.role,
      sortable: true,
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
        data={studentUser}
        fixedHeader
        pagination
        customStyles={customStyle}
      />
    </div>
  );
};

export default StudentMember;
