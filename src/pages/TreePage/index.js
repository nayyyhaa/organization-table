import "./Treepage.css";
import { Link, useParams } from "react-router-dom";
import { OrganizationTree } from "components/OrganizationTree";
import { useOrganization } from "context/OrganizationContext";
import { findTreeById } from "utils/findTreeById";
import { Button } from "@mui/material";
import { colorMap } from "utils/colorMap";

export const TreePage = () => {
  const { org } = useOrganization();
  const { id } = useParams();
  const visibleTree = findTreeById(org, id);
  return (
    <>
      <Link to="/">
        <Button variant="contained" className="m-v-1">
          Go Back
        </Button>
      </Link>
      {Object.values(colorMap).map((level, idx) => (
        <div className="label-color m-v-1" key={level}>
          Career Level - {idx + 1}
          <div className={`circle ${level} m-l-1`}></div>
        </div>
      ))}
      <OrganizationTree data={visibleTree} />
    </>
  );
};
