
export interface UserDetails<T> {
  data : T
}

export type UserType = {
  slackUsername: string;
  backend: boolean;
  age: number;
  bio: string;
}

// export interface IUserRequest extends Request{
//   userDetails:UserDetails
// }


