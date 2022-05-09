import { colorMap } from "utils/colorMap";

export const OrganizationTree = ({ data }) => {
  return (
    <div className="org">
      <div className={`position-card ${colorMap[data?.careerLevel]}`}>
        <p>{data?.name}</p>
        <p>id: {data?.empId}</p>
        <p>{data?.email}</p>
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
