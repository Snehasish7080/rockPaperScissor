import client from "./Client";

const endPoint = "/auth/topUser";
const getTopUser = () => client.get(endPoint);

export { getTopUser };
