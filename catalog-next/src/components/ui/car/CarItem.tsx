import { ICarData } from "@/interfaces/cat.interface";
import { FC } from "react";

const CarItem: FC<ICarData> = ({ task }) => {
  return <div>{task.text}</div>;
};

export default CarItem;
