import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { useOrganization } from "../context/OrganizationContext";
import { formFieldData } from "data/formFieldData";

export const OrganizationRow = ({ data }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [empForm, setEmpForm] = useState({
    id: data.id,
    empId: data.empId,
    name: data.name,
    email: data.email,
    pNumber: data.pNumber
  });
  const { editMember, deleteMember } = useOrganization();
  const validateFormField =
    empForm?.email && empForm?.name && empForm?.empId && empForm?.pNumber;
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
              {formFieldData?.map(
                ({ id, label, placeHolder }) =>
                  label !== "teamName" && (
                    <TableCell key={id}>
                      <input
                        type="text"
                        placeholder={placeHolder}
                        value={empForm[label]}
                        onChange={(e) => editFormField(label, e)}
                      />
                    </TableCell>
                  )
              )}
            </>
          ) : (
            <>
              <TableCell>{data.empId}</TableCell>
              <TableCell>{data.name}</TableCell>
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
              disabled={!validateFormField && openEdit}
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
          <TableCell>
            {" "}
            <Link to={`/tree/${data.id}`}>
              <Button variant="contained" className="m-05">
                Open
              </Button>
            </Link>
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
