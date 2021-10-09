import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://localhost:3500/",
});

export default apiClient;
