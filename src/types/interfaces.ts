export interface ILink {
  guideVisible: boolean;
  object: IMenuItems;
}

export interface IMenuItems {
  name: string;
  path: string;
}

export interface IResponsible {
  name: string;
  avatar: string;
  position: string;
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  categories: string[];
  status: string;
  responsible: IResponsible[]
}

export interface IList {
  id: number,
  title: string,
  description: string,
  categories: string[],
  status: string,
  responsible: IResponsible[]
}

// interface IColumn {
//   name: string,  list: IList[]
// }

// export interface IColumns {
//   [key: string]: IColumn
// }

interface IStatusColumn {
  name: string,
  items: IList[],
}


export interface ITodoListColumns {
  toDo: IStatusColumn,
  inProgress: IStatusColumn,
  completed: IStatusColumn,
}