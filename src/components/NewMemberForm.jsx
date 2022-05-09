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

export const NewMemberForm = ({ setIsOpen }) => {
  const { org, addNewMember } = useOrganization();
  const [memberForm, setMemberForm] = useState();
  const teamArr = org?.children?.find(
    ({ department }) => memberForm?.department === department
  );

  const addMemberHandler = () => {
    if (memberForm.name && memberForm.email && memberForm.empId) {
      addNewMember(memberForm);
      setMemberForm();
      setIsOpen(false);
    }
  };

  const memberFormHandler = (field, e) => {
    setMemberForm((prev) => ({
      ...prev,
      [field]: e.target.value
    }));
  };
  return (
    <div className="form blue m-v-1">
      <h3 className="m-v-1">Add New Member Form</h3>
      <FormControl className="m-v-1">
        <FormLabel id="demo-controlled-radio-buttons-group">
          Choose Department
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={setMemberForm?.department}
          onChange={(e) =>
            setMemberForm((prev) => ({
              ...prev,
              department: e.target.value,
              team: null
            }))
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
      <Divider className="m-1" />
      {memberForm?.department && (
        <FormControl className="m-v-1">
          <FormLabel id="demo-controlled-radio-buttons-group2">
            Choose Team
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group2"
            name="controlled-radio-buttons-group"
            value={setMemberForm?.department}
            onChange={(e) =>
              setMemberForm((prev) => ({ ...prev, team: e.target.value }))
            }
          >
            {teamArr?.children?.map(
              ({ teamName }) =>
                teamName && (
                  <FormControlLabel
                    key={teamName}
                    value={teamName}
                    checked={teamName === memberForm.team}
                    control={<Radio />}
                    label={teamName}
                  />
                )
            )}
          </RadioGroup>
        </FormControl>
      )}
      {memberForm?.team && (
        <>
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
              onClick={addMemberHandler}
            >
              Add Member
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
