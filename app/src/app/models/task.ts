export class Task {
  public name: string;
  public description: string;
  public date_inserted: Date;
  public date_limit: Date;

  constructor(name: string, desc: string, dt_inserted: Date, dt_limit: Date) {
    this.name = name;
    this.description = desc;
    this.date_limit = dt_limit;
    this.date_inserted = dt_inserted;
  }
}
