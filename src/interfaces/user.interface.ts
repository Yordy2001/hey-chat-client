export interface IUser {
  name: string;
  tel: string;
  password: string;
  info: string;
  portada: any;
  isActive?: boolean;
  cloudinary_id?: string;
  friend?: string;
}
