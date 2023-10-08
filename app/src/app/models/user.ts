import { Task } from "./task";

export class User {
  userId: number;
  userEmail: string;
  userName: string;
  taskList: Task[];
  created_at: Date;
  updated_at: Date;
  constructor(userId: number, userEmail: string, userName: string, taskList: Task[], created_at: Date, updated_at: Date) {
    this.userId = userId;
    this.userName = userName;
    this.taskList = taskList;
    this.userEmail = userEmail
    this.updated_at = updated_at;
    this.created_at = created_at;
  }

}
