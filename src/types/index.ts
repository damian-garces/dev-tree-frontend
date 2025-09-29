export type User = {
  name: string;
  email: string;
  handle: string;
  password: string;
  description?: string;
}

export type RegisterFormData = Pick<User, 'name' | 'email' | 'handle'> & {
  password: string;
  password_confirmation: string;
}

export type LoginFormData = Pick<User, 'email' | 'password'>;

export type ProfileFormData = Pick<User, 'handle' | 'description'> & {
  image?: FileList;
}