import { User } from "../interfaces/User";

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;

  public static get instance(): MyDatabaseClassic {
    if (this._instance == null) this._instance = new MyDatabaseClassic();
    return this._instance;
  }

  private users: User[] = [];

  private constructor() {}

  public add(user: User): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
