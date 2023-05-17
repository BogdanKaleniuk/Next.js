import Home from "@/components/screens/home/Home";
import { ICarData } from "@/interfaces/cat.interface";
import { CarService } from "@/services/car.service";
import styles from "@/styles/Home.module.scss";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";

const HomePage: NextPage<ICarData> = ({ tasks }) => {
  return <Home tasks={tasks} />;
};

export const getStaticProps: GetServerSideProps<ICarData> = async () => {
  const tasks = await CarService.getAll();
  return {
    props: { tasks },
    revalidate: 10,
  };
};

// export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
//   const tasks = await CarService.getAll();
//   return {
//     props: { tasks },
//   };
// };

export default HomePage;
