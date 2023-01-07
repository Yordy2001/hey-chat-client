import { IUser } from "../../interfaces/user.interface";
import AxiosApi from "./axios.instance";

export class FriendsController extends AxiosApi {
  // server endpoint
  endPoint = "/friends";

  async getFriend(tel: string) {
    const user = await this.api.get(this.endPoint + `/${tel}`);
    return user.data;
  }

  async getFriends() {
    const user = await this.api.get(this.endPoint);
    return user.data;
  }

  async addFriend(data: IUser) {
    const user = await this.api.post(this.endPoint, data);
    return user.data;
  }
}
