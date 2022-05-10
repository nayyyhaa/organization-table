import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { OrganizationRow } from "./OrganizationRow";
import { filterOrgData } from "../utils/filteredOrgData";
import { TextField } from "@mui/material";
import { useState } from "react";

export const OrganizationTable = ({ data }) => {
  const [searchText, setSearchText] = useState("");
  const filteredData = filterOrgData(data, searchText);

  return (
    <>
      <div className="search-box m-v-1">
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow className="blue">
              <TableCell>Emp Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ph. Number</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Options</TableCell>
              <TableCell>Show Teams</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData && <OrganizationRow data={filteredData} />}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
