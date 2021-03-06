import { Project } from './project';

export class User {
  _id: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  designation: string;
  userId: string;
  roles: object;
  status: string;
  assignedProjects: Project[];
  activated: boolean;
}
