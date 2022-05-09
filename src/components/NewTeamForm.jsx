import { useState } from "react";
import { useOrganization } from "context/OrganizationContext";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Radio,
  RadioGroup
} from "@mui/material";

export const NewTeamForm = ({ setIsOpenTeam }) => {
  const { org, addNewTeam } = useOrganization();
  const [memberForm, setMemberForm] = useState();
  const [teamForm, setTeamForm] = useState();
  const isTeamValid =
    teamForm?.team?.name &&
    teamForm?.team?.email &&
    teamForm?.team?.empId &&
    teamForm?.team?.pNumber &&
    teamForm?.team?.teamName;
  const isMemberValid =
    memberForm?.name &&
    memberForm?.email &&
    memberForm?.empId &&
    memberForm?.pNumber;

  const addTeamHandler = () => {
    if (isTeamValid && isMemberValid) {
      addNewTeam(teamForm, memberForm);
      setMemberForm();
      setTeamForm();
      setIsOpenTeam(false);
    }
  };

  const teamFormHandler = (field, e) => {
    setTeamForm((prev) => ({
      ...prev,
      team: { ...prev.team, [field]: e.target.value }
    }));
  };

  const memberFormHandler = (field, e) => {
    setMemberForm((prev) => ({
      ...prev,
      [field]: e.target.value
    }));
  };
  return (
    <div className="form yellow m-v-1">
      <p className="align-end" onClick={() => setIsOpenTeam(false)}>
        <span>X</span>
      </p>
      <h2 className="centered-text m-v-1">Add New Team Form</h2>
      <FormControl>
        <h4 id="demo-controlled-radio-buttons-group">Choose Department</h4>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={teamForm?.department}
          onChange={(e) =>
            setTeamForm((prev) => ({ ...prev, department: e.target.value }))
          }
        >
          {org?.children?.map(
            ({ department }) =>
              department && (
                <FormControlLabel
                  key={department}
                  value={department}
                  control={<Radio />}
                  label={department}
                />
              )
          )}
        </RadioGroup>
      </FormControl>
      <Divider />
      {teamForm?.department && (
        <div className="m-v-1">
          <h4>Create Team</h4>
          <TextField
            variant="standard"
            className="m-1"
            label="name"
            onChange={(e) => teamFormHandler("name", e)}
          />
          <TextField
            variant="standard"
            className="m-1"
            label="email"
            onChange={(e) => teamFormHandler("email", e)}
          />
          <TextField
            variant="standard"
            className="m-1"
            label="empId"
            onChange={(e) => teamFormHandler("empId", e)}
          />
          <TextField
            variant="standard"
            className="m-1"
            label="pNumber"
            onChange={(e) => teamFormHandler("pNumber", e)}
          />
          <TextField
            variant="standard"
            className="m-1"
            label="teamName"
            onChange={(e) => teamFormHandler("teamName", e)}
          />
          <Divider />
          {isTeamValid && (
            <div className="m-v-1">
              <h4>Enter member details: </h4>
              <TextField
                variant="standard"
                className="m-1"
                label="enter name"
                onChange={(e) => memberFormHandler("name", e)}
              />
              <TextField
                variant="standard"
                className="m-1"
                label="enter id"
                onChange={(e) => memberFormHandler("empId", e)}
              />
              <TextField
                variant="standard"
                className="m-1"
                label="enter email"
                onChange={(e) => memberFormHandler("email", e)}
              />
              <TextField
                variant="standard"
                className="m-1"
                label="enter phone num."
                onChange={(e) => memberFormHandler("pNumber", e)}
              />
              <Button
                variant="contained"
                className="m-05"
                onClick={addTeamHandler}
              >
                Add Team
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
