export interface IMenuItems {
  name: string;
  path: string;
}

export interface ICardsTypes {
  name: string;
  status: string;
}

export const menuItems:IMenuItems[] = [
  {
    name: "tasks",
    path: "/",
  },
  {
    name: "notifications",
    path: "/notifications",
  },
]

export const accountMenuItems: string[] = ["my profile", "help", "settings", "info"]


export const statusTypes: ICardsTypes[] = [
  {
    name: "To Do",
    status: "toDo",
  },
  {
    name: "In Progress",
    status: "inProgress",
  },
  {
    name: "Completed",
    status: "completed",
  },
]




