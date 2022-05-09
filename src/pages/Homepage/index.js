import "./homepage.css";
import { Button } from "@mui/material";
import { useState } from "react";
import { NewMemberForm } from "components/NewMemberForm";
import { NewTeamForm } from "components/NewTeamForm";
import { OrganizationTable } from "components/OrganizationTable";
import { useOrganization } from "context/OrganizationContext";

export const Homepage = () => {
  const { org } = useOrganization();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTeam, setIsOpenTeam] = useState(false);

  return (
    <>
      <div className="btn-container">
        <Button
          variant="contained"
          className="m-05"
          onClick={() => {
            setIsOpen(false);
            setIsOpenTeam((prev) => !prev);
          }}
        >
          Add Team
        </Button>
        <Button
          variant="contained"
          className="m-05"
          onClick={() => {
            setIsOpenTeam(false);
            setIsOpen((prev) => !prev);
          }}
        >
          Add Team Member
        </Button>
      </div>
      {isOpen && <NewMemberForm setIsOpen={setIsOpen} />}
      {isOpenTeam && <NewTeamForm setIsOpenTeam={setIsOpenTeam} />}
      <OrganizationTable data={org} />
    </>
  );
};
