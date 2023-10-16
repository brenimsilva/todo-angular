export class User {
  userEmail: string;
  userToken: string;
  userGuid: string;
  name: string;
  dt_nasc: Date;
  created_at: Date;
  constructor(name: string, userEmail: string, userToken: string, userGuid: string, dt_nasc: Date, created_at: Date) {
    this.userEmail = userEmail;
    this.userGuid = userGuid;
    this.userToken = userToken;
    this.name = name;
    this.dt_nasc = dt_nasc;
    this.created_at = created_at;
  }

}
