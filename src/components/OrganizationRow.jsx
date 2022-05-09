import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { useOrganization } from "../context/OrganizationContext";

export const OrganizationRow = ({ data }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [empForm, setEmpForm] = useState({
    id: data.id,
    name: data.name,
    empId: data.empId,
    email: data.email,
    pNumber: data.pNumber
  });
  const { editMember, deleteMember } = useOrganization();

  const editFormField = (fieldName, e) => {
    setEmpForm((prev) => ({ ...prev, [fieldName]: e.target.value }));
  };

  const editFormHandler = () => {
    let isFormOpen = !openEdit;
    setOpenEdit(isFormOpen);
    if (!isFormOpen) {
      editMember(empForm);
    }
  };

  return (
    <>
      {data.isVisible && (
        <TableRow>
          {openEdit ? (
            <>
              <TableCell>
                <input
                  type="text"
                  value={empForm.empId}
                  onChange={(e) => editFormField("empId", e)}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={empForm.name}
                  onChange={(e) => editFormField("name", e)}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={empForm.email}
                  onChange={(e) => editFormField("email", e)}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={empForm.pNumber}
                  onChange={(e) => editFormField("pNumber", e)}
                />
              </TableCell>
            </>
          ) : (
            <>
              <TableCell>{data.empId}</TableCell>
              <TableCell>
                <Link to={`/tree/${data.id}`}>{data.name}</Link>
              </TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.pNumber}</TableCell>
            </>
          )}
          <TableCell>{data.position}</TableCell>
          <TableCell>{data.department}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              className="m-05"
              onClick={editFormHandler}
            >
              {openEdit ? "Save" : "edit"}
            </Button>
            {data.careerLevel === 4 && (
              <Button
                variant="contained"
                className="m-05"
                onClick={() => deleteMember(data)}
              >
                Delete
              </Button>
            )}
          </TableCell>
        </TableRow>
      )}
      {data.isHead &&
        data?.children?.map(
          (dt) => dt && <OrganizationRow key={dt.name} data={dt} />
        )}
    </>
  );
};
