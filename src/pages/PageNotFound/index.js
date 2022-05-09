import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export const PageNotFound = () => {
  return (
    <>
      <p>404: Page not found</p>
      <Link to="/">
        <Button variant="contained" className="m-05">
          Go Back
        </Button>
      </Link>
    </>
  );
};
