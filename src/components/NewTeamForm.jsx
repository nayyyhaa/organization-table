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
    teamForm?.team?.teamName;
  const isMemberValid =
    memberForm?.name && memberForm?.email && memberForm?.empId;

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
      <h3 className="m-v-1">Add New Team Form</h3>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Choose Department
        </FormLabel>
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
          <p>Create Team</p>
          <TextField
            variant="standard"
            label="name"
            onChange={(e) => teamFormHandler("name", e)}
          />
          <TextField
            variant="standard"
            label="email"
            onChange={(e) => teamFormHandler("email", e)}
          />
          <TextField
            variant="standard"
            label="empId"
            onChange={(e) => teamFormHandler("empId", e)}
          />
          <TextField
            variant="standard"
            label="teamName"
            onChange={(e) => teamFormHandler("teamName", e)}
          />
          <Divider />
          {isTeamValid && (
            <div className="m-v-1">
              <p>Enter member details: </p>
              <TextField
                variant="standard"
                label="enter name"
                onChange={(e) => memberFormHandler("name", e)}
              />
              <TextField
                variant="standard"
                label="enter id"
                onChange={(e) => memberFormHandler("empId", e)}
              />
              <TextField
                variant="standard"
                label="enter email"
                onChange={(e) => memberFormHandler("email", e)}
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
