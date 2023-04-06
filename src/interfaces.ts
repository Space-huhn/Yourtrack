export interface ILink {
  guideVisible: boolean;
  object: IMenuItems;
}

export interface IMenuItems {
  name: string;
  path: string;
}

interface IResponsible {
  name: string;
  avatar: string;
  position: string;
}

export interface ITask {
  title: string;
  description: string;
  categories: string[];
  responsible: IResponsible[]
}

