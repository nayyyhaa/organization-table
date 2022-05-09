import { colorMap } from "utils/colorMap";

export const OrganizationTree = ({ data }) => {
  return (
    <div className="org">
      <div className={`position-card ${colorMap[data?.careerLevel]}`}>
        <p>
          <strong>Name: </strong>
          {data?.name}
        </p>
        <p>
          <strong>empId: </strong>
          {data?.empId}
        </p>
        <p>
          <strong>Email: </strong>
          {data?.email}
        </p>
      </div>
      <div className="level">
        {data?.isHead &&
          data?.children?.map(
            (dt) => dt && <OrganizationTree key={dt.name} data={dt} />
          )}
      </div>
    </div>
  );
};
