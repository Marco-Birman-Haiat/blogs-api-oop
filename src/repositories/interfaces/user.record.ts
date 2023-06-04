export default interface UserRecord {
  id: number;
  displayName: string;
  email: string;
  image: string;
}

export type UserInput = {
  displayName: string;
  email: string;
  image: string;
  password: string;
}

export class UserFactoryTemp {
  constructor(
    public displayName: string,
    public email: string,
    public password: string,
    public image: string,
  ) {}
}