import { v4 as uuid } from "uuid";

const organizationData = {
  id: uuid(),
  position: "CFO",
  name: "Megha",
  empId: "cfoId",
  email: "cfo@company.com",
  pNumber: 6788023233,
  department: "CFO",
  isVisible: true,
  isHead: true,
  careerLevel: 1,
  children: [
    {
      id: uuid(),
      position: "Head of staff/HR",
      name: "Angela",
      empId: "a.jose",
      email: "a.jose@company.com",
      pNumber: 987623233,
      department: "HR",
      isVisible: true,
      isHead: true,
      careerLevel: 2,
      children: [
        {
          id: uuid(),
          position: "Team Leader",
          name: "Palani",
          empId: "palaniId",
          email: "palaniId@company.com",
          pNumber: 9818021234,
          department: "HR",
          isVisible: true,
          isHead: true,
          teamName: "Team Palani",
          careerLevel: 3,
          children: [
            {
              id: uuid(),
              position: "Team member",
              name: "Bharathi",
              teamName: "Team Palani",
              empId: "bhId",
              email: "bhId@company.com",
              pNumber: 9123423233,
              department: "HR",
              isVisible: true,
              isHead: false,
              careerLevel: 4
            }
          ]
        },
        {
          id: uuid(),
          position: "Team leader",
          name: "Saravana",
          empId: "s.ra",
          email: "s.ra2@company.com",
          pNumber: 9811234233,
          department: "HR",
          isVisible: true,
          isHead: true,
          careerLevel: 3,
          teamName: "Team Saravana",
          children: [
            {
              id: uuid(),
              position: "Team member",
              name: "Krishna",
              empId: "k.murthy",
              teamName: "Team Saravana",
              email: "k.murthy2@company.com",
              pNumber: 9818024321,
              department: "HR",
              isVisible: true,
              isHead: false,
              careerLevel: 4
            }
          ]
        }
      ]
    },
    {
      id: uuid(),
      position: "Head of Eng.",
      name: "Nishu",
      empId: "n.raina",
      email: "n.raina@company.com",
      pNumber: 9818456783,
      department: "ENG.",
      isVisible: true,
      isHead: true,
      careerLevel: 2,
      children: [
        {
          id: uuid(),
          position: "Team leader",
          name: "Neha",
          empId: "n.gupta",
          email: "n.gupta@company.com",
          pNumber: 9818348643,
          department: "ENG.",
          isVisible: true,
          isHead: true,
          careerLevel: 3,
          teamName: "Team Neha",
          children: [
            {
              id: uuid(),
              position: "Team member",
              name: "Divya",
              teamName: "Team Neha",
              empId: "d.ving",
              email: "d.ving@company.com",
              pNumber: 9845623233,
              department: "ENG.",
              isVisible: true,
              isHead: false,
              careerLevel: 4
            }
          ]
        }
      ]
    },
    {
      id: uuid(),
      position: "Head of design",
      name: "Jayant",
      empId: "j.wal",
      email: "j.wal@company.com",
      pNumber: 9818025678,
      department: "DESIGN",
      isVisible: true,
      isHead: true,
      careerLevel: 2,
      children: [
        {
          id: uuid(),
          position: "Team leader",
          name: "Chandiya",
          empId: "c.nat",
          email: "c.nat@company.com",
          pNumber: 9813851033,
          department: "DESIGN",
          isVisible: true,
          isHead: true,
          careerLevel: 3,
          teamName: "Team Chandiya",
          children: [
            {
              id: uuid(),
              position: "Team member",
              name: "zoya",
              teamName: "Team Chandiya",
              empId: "zozan",
              email: "zozan@company.com",
              pNumber: 9814443233,
              department: "DESIGN",
              isVisible: true,
              isHead: false,
              careerLevel: 4
            }
          ]
        }
      ]
    }
  ]
};

export default organizationData;
