import { Link, useParams } from "react-router-dom";
import { OrganizationTree } from "components/OrganizationTree";
import { useOrganization } from "context/OrganizationContext";
import { findTreeById } from "utils/findTreeById";

export const TreePage = () => {
  const { org } = useOrganization();
  const { id } = useParams();
  const visibleTree = findTreeById(org, id);
  return (
    <>
      <Link to="/">back</Link>
      <OrganizationTree data={visibleTree} />
    </>
  );
};
