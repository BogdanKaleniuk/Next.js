import { ICar } from "@/interfaces/cat.interface";
import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;

export const CarService = {
  async getAll() {
    const { data } = await axios.get<ICar[]>("/tasks");
    return data;
  },

  async getById(id: string) {
    const { data } = await axios.get<ICar[]>("/tasks", {
      params: {
        id,
      },
    });
    return data[0];
  },
};
