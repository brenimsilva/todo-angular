export class Task {
  public taskId: number;
  public taskTitle: string;
  public userId: number;
  public taskDescription: string;
  public date_inserted: Date;
  public date_limit: Date;
  constructor(id: number, name: string, userId: number, desc: string, dt_inserted: Date, dt_limit: Date) {
    this.taskId = id;
    this.taskTitle = name;
    this.taskDescription = desc;
    this.userId = userId;
    this.date_limit = dt_limit;
    this.date_inserted = dt_inserted;
  }
}
