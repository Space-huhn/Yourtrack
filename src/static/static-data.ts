export interface IMenuItems {
  name: string;
  path: string;
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