import { useState } from "react";
import { useOrganization } from "context/OrganizationContext";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  TextField,
  Radio,
  RadioGroup
} from "@mui/material";
import { formFieldData } from "data/formFieldData";

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
    addNewTeam(teamForm, memberForm);
    setMemberForm();
    setTeamForm();
    setIsOpenTeam(false);
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
          {formFieldData?.map(({ id, label, placeHolder }) => (
            <TextField
              key={id}
              variant="standard"
              className="m-1"
              label={placeHolder}
              onChange={(e) => teamFormHandler(label, e)}
            />
          ))}
          <Divider />
          {isTeamValid && (
            <div className="m-v-1">
              <h4>Enter member details: </h4>
              {formFieldData?.map(
                ({ id, label, placeHolder }) =>
                  label !== "teamName" && (
                    <TextField
                      key={id}
                      variant="standard"
                      className="m-1"
                      label={placeHolder}
                      onChange={(e) => memberFormHandler(label, e)}
                    />
                  )
              )}
              <Button
                variant="contained"
                className="m-05"
                onClick={addTeamHandler}
                disabled={!(isTeamValid && isMemberValid)}
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
