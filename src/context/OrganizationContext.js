import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import organizationData from "../data/hierarchyData";

const OrganizationContext = createContext();

const OrganizationProvider = ({ children }) => {
  const [org, setOrg] = useState(organizationData);

  const addNewMember = (memberForm) => {
    let newOrg = {
      ...org,
      children: org?.children?.map((dep) =>
        dep?.department === memberForm?.department
          ? {
              ...dep,
              children: dep?.children?.map((team) =>
                team?.teamName === memberForm?.team
                  ? {
                      ...team,
                      children: [
                        ...team.children,
                        {
                          name: memberForm.name,
                          empId: memberForm.empId,
                          email: memberForm.email,
                          id: uuid(),
                          isVisible: true,
                          teamName: memberForm.team,
                          department: memberForm?.department,
                          careerLevel: 4,
                          isHead: false
                        }
                      ]
                    }
                  : team
              )
            }
          : dep
      )
    };
    setOrg(newOrg);
  };

  const addNewTeam = (teamForm, memberForm) => {
    let newOrg = {
      ...org,
      children: org?.children?.map((dep) =>
        dep?.department === teamForm?.department
          ? {
              ...dep,
              children: [
                ...dep?.children,
                {
                  position: "Team leader",
                  name: teamForm.team.name,
                  id: uuid(),
                  empId: teamForm.team.empId,
                  email: teamForm.team.email,
                  department: teamForm.department,
                  isHead: true,
                  teamName: teamForm.team.teamName,
                  careerLevel: 3,
                  isVisible: true,
                  children: [
                    {
                      name: memberForm.name,
                      empId: memberForm.empId,
                      email: memberForm.email,
                      isVisible: true,
                      id: uuid(),
                      teamName: teamForm.team.teamName,
                      department: teamForm.department,
                      careerLevel: 4,
                      isHead: false
                    }
                  ]
                }
              ]
            }
          : dep
      )
    };
    setOrg(newOrg);
  };

  const deleteMember = (empForm) => {
    let newOrg = {
      ...org,
      children: org?.children?.map((dep) =>
        dep?.department === empForm?.department
          ? dep?.id !== empForm.id && {
              ...dep,
              children: dep?.children?.map((team) =>
                team?.teamName === empForm?.teamName
                  ? team?.id !== empForm.id && {
                      ...team,
                      children: team?.children?.filter(
                        (mem) => mem.id !== empForm.id
                      )
                    }
                  : team
              )
            }
          : dep
      )
    };
    setOrg(newOrg);
  };

  const editMember = (empForm) => {
    let newOrg = {
      ...org,
      name: empForm.id === org.id ? empForm.name : org.name,
      email: empForm.id === org.id ? empForm.email : org.email,
      empId: empForm.id === org.id ? empForm.empId : org.empId,
      children: org?.children?.map((dep) => ({
        ...dep,
        name: empForm.id === dep.id ? empForm.name : dep.name,
        email: empForm.id === dep.id ? empForm.email : dep.email,
        empId: empForm.id === dep.id ? empForm.empId : dep.empId,
        children: dep?.children?.map((team) => ({
          ...team,
          name: empForm.id === team.id ? empForm.name : team.name,
          email: empForm.id === team.id ? empForm.email : team.email,
          empId: empForm.id === team.id ? empForm.empId : team.empId,
          children: team?.children?.map((mem) => ({
            ...mem,
            name: empForm.id === mem.id ? empForm.name : mem.name,
            email: empForm.id === mem.id ? empForm.email : mem.email,
            empId: empForm.id === mem.id ? empForm.empId : mem.empId
          }))
        }))
      }))
    };
    setOrg(newOrg);
  };
  return (
    <OrganizationContext.Provider
      value={{
        org,
        setOrg,
        addNewMember,
        addNewTeam,
        deleteMember,
        editMember
      }}
    >
      {children}{" "}
    </OrganizationContext.Provider>
  );
};

const useOrganization = () => useContext(OrganizationContext);

export { OrganizationProvider, useOrganization };
