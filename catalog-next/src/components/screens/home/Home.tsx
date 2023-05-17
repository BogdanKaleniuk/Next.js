import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.scss";
import Layout from "@/components/layout/Layout";
import { ICarData } from "@/interfaces/cat.interface";
import CarItem from "@/components/ui/car/CarItem";

const Home: FC<ICarData> = ({ tasks }) => {
  return (
    <Layout title="Home" description="description">
      {tasks ? (
        tasks.map((task) => <CarItem key={task.id} task={task} />)
      ) : (
        <div>Cars not found!</div>
      )}
    </Layout>
  );
};

export default Home;
