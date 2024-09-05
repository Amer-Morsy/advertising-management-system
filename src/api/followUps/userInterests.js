import { METHOD, request } from "./../../utils/request";
import { UserInterests } from "./../api";

async function update(data) {
  return request(UserInterests.update, METHOD.POST, data);
}

export default {
  update,
};
