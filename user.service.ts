import { User } from "./user.model.ts";

export class UserService {
  private readonly allUsers: Array<User> = [];

  constructor() {
    let user = new User();
    user.id = 1;
    user.firstName = 'Balram';
    user.lastName = 'Chavan';
    this.allUsers.push(user);
  }

  public getMockUsers() {
    return this.allUsers;
  }
}