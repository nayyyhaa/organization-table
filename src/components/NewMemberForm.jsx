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

export const NewMemberForm = ({ setIsOpen }) => {
  const { org, addNewMember } = useOrganization();
  const [memberForm, setMemberForm] = useState();
  const teamArr = org?.children?.find(
    ({ department }) => memberForm?.department === department
  );
  const isMemberValid =
    memberForm?.name &&
    memberForm?.email &&
    memberForm?.empId &&
    memberForm?.pNumber;

  const addMemberHandler = () => {
    addNewMember(memberForm);
    setMemberForm();
    setIsOpen(false);
  };

  const memberFormHandler = (field, e) => {
    setMemberForm((prev) => ({
      ...prev,
      [field]: e.target.value
    }));
  };
  return (
    <div className="form blue m-v-1">
      <p className="align-end" onClick={() => setIsOpen(false)}>
        <span>X</span>
      </p>
      <h2 className="centered-text m-v-1">Add New Member Form</h2>
      <FormControl className="m-v-1">
        <h4 id="demo-controlled-radio-buttons-group">Choose Department</h4>
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
          <h4 id="demo-controlled-radio-buttons-group2">Choose Team</h4>
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
              onClick={addMemberHandler}
              disabled={!isMemberValid}
            >
              Add Member
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
