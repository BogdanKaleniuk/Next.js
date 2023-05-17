import React from "react";

export interface ICar {
  id: number;
  text: string;
  createdAt: number;
  completed: boolean;
}

export interface ICarData {
  tasks: ICar[];
}

export interface ICarDataSingle {
  task: ICar[];
}
