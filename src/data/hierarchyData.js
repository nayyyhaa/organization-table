import { v4 as uuid } from "uuid";

const organizationData = {
  position: "CFO",
  name: "CFO name",
  id: uuid(),
  isVisible: true,
  empId: "cfoId",
  email: "cfo@cfo",
  department: "cfo",
  isHead: true,
  careerLevel: 1,
  children: [
    {
      position: "Head of staff/HR",
      name: "HR name",
      id: uuid(),
      isVisible: true,
      empId: "hodengId",
      email: "hr@hr",
      department: "hr",
      isHead: true,
      careerLevel: 2,
      children: [
        {
          position: "Team leader",
          name: "leader1",
          id: uuid(),
          isVisible: true,
          empId: "hodengId",
          email: "leader1@leader1",
          department: "hr",
          isHead: true,
          teamName: "Team 1",
          careerLevel: 3,
          children: [
            {
              position: "Team member",
              name: "member1",
              teamName: "Team 1",
              id: uuid(),
              isVisible: true,
              empId: "emId",
              email: "member1@member1",
              department: "hr",
              isHead: false,
              careerLevel: 4
            }
          ]
        },
        {
          position: "Team leader",
          name: "leader2",
          id: uuid(),
          isVisible: true,
          empId: "ledf",
          email: "leader2@leader2",
          department: "hr",
          isHead: true,
          careerLevel: 3,
          teamName: "Team 2",
          children: [
            {
              position: "Team member",
              name: "member2",
              id: uuid(),
              isVisible: true,
              empId: "sdfsdf",
              teamName: "Team 2",
              email: "member2@member2",
              department: "hr",
              isHead: false,
              careerLevel: 4
            }
          ]
        }
      ]
    },
    {
      position: "Head of eng",
      name: "eng name",

      id: uuid(),
      isVisible: true,
      empId: "fdsfs",
      email: "HOD-eng@HOD-eng",
      department: "eng",
      isHead: true,
      careerLevel: 2,
      children: [
        {
          position: "Team leader",
          name: "leader1",
          id: uuid(),
          isVisible: true,
          empId: "fsdsd",
          email: "leader1@leader1",
          department: "eng",
          isHead: true,
          careerLevel: 3,
          teamName: "Team 1",
          children: [
            {
              position: "Team member",
              name: "member1",
              teamName: "Team 1",
              id: uuid(),
              isVisible: true,
              empId: "sdfsdf",
              email: "member1@member1",
              department: "eng",
              isHead: false,
              careerLevel: 4
            }
          ]
        }
      ]
    },
    {
      position: "Head of design",
      name: "design name",
      id: uuid(),
      isVisible: true,
      empId: "sdfsdf",
      email: "HOD-design@HOD-design",
      department: "design",
      isHead: true,
      careerLevel: 2,
      children: [
        {
          position: "Team leader",
          name: "leader1",
          id: uuid(),
          isVisible: true,
          empId: "sdfsdf",
          email: "leader1@leader1",
          department: "design",
          isHead: true,
          careerLevel: 3,
          teamName: "Team 1",
          children: [
            {
              position: "Team member",
              name: "member1",
              teamName: "Team 1",
              id: uuid(),
              isVisible: true,
              empId: "sdfdsf",
              email: "member1@member1",
              department: "design",
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
