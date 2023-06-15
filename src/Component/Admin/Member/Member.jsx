import React ,{ useEffect }from "react";
import DataTable from "react-data-table-component";
import style from "./Member.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../Store/Auth";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
function Members() {
  const users = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
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
    {
      name: "Action",
      selector: (row) => (
        <div className={style["Action-container"]}>
          <div className={style["Action-edit"]}>
            <FiEdit />
          </div>
          <div className={style["Action-delete"]}>
            <FaTrashAlt onClick={() => deleteHandler(row._id)} />
          </div>
        </div>
      ),
    },
  ];
  const deleteHandler = (id) => {
    console.log(id);
  };
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
    <div className={style.transactions}>
      <DataTable
        data={users}
        columns={columns}
        customStyles={customStyle}
        pagination
      />
    </div>
  );
}

export default Members;
