import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.scss";
import Layout from "@/components/layout/Layout";

const Home: FC = () => {
  return (
    <Layout title="Home" description="description">
      <h1>Hello</h1>
    </Layout>
  );
};

export default Home;
