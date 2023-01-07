import { IUser } from "../interfaces/user.interface";
import AxiosApi from "./axios.instance";

export default class FetchAuth extends AxiosApi {
  async logIn(data: IUser) {
    await this.api.post("/login", data);
    return
  }

  async register(data: any) {
    await this.api.post("/register", data);
    return
  }

  async logOut() {
    await this.api.post("/logout");
    return
  }
}
