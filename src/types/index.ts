export type User = {
  name: string;
  email: string;
  handle: string;
  password: string;
  description?: string;
  imageUrl: string;
  links: string;
}

export type UserHandle = Pick<User, 'description' | 'handle' | 'imageUrl'  | 'links' | 'name'>;

export type RegisterFormData = Pick<User, 'name' | 'email' | 'handle'> & {
  password: string;
  password_confirmation: string;
}

export type LoginFormData = Pick<User, 'email' | 'password'>;

export type ProfileFormData = Pick<User, 'handle' | 'description'> & {
  image?: FileList;
}

export type PfrofileImage = Pick<User, 'imageUrl'>;

export type SocialNetwork = {
  id: number;
  name: string;
  url: string;
  enabled: boolean;
}

export type DevTreeLink = Pick<SocialNetwork, 'name' | 'url' | 'enabled'>;