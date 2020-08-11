export class User{
    constructor(
    private id: string,
    private name: string,
    private nickname: string,
    private email: string,
    private password: string,
    private role: UserRole
    ){}

    getId = () => this.id;
    getName = () => this.name;
    getEmail = () => this.email;
    getNickname = () => this.nickname;
    getPassword = () => this.password;
    getRole = () => this.role;

    setId = (id: string) => this.id = id;
    setName = (name: string) => this.name = name;
    setNickame = (nickname: string) => this.nickname = nickname;
    setEmail = (email: string) => this.email = email;
    setPassword = (password: string) => this.password = password;
    setRole = (role: UserRole) => this.role = role;

   static stringToUserRole(input: string): UserRole{
        switch (input) {
            case "BAND":
              return UserRole.BAND;
            case "PREMIUM_USER":
              return UserRole.PREMIUM_USER;
            case "FREE_USER":
                return UserRole.FREE_USER;
            case "ADMIN":
                return UserRole.ADMIN;
            default:
              throw new Error("Invalid user role");
          }
    }

    static toUserModel(user: any): User {
        return new User(user.id, user.name, user.nickname, user.email, user.password, User.stringToUserRole(user.role));
      }


}

export interface UserInputDTO{
    email: string;
    password: string;
    name: string;
    nickname: string;
    role: string;
}

export interface LoginInputDTO{
    email: string;
    password: string;
}

export enum UserRole{
    BAND = "BAND",
    PREMIUM_USER = "PREMIUM_USER",
    FREE_USER = "FREE_USER",
    ADMIN = "ADMIN"
}