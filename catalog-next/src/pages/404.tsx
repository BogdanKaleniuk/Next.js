import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const NotFound: NextPage = () => {
  return (
    <Layout title="Not found">
      <Head>
        <title>Not found</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png"
          alt=""
        />
      </div>
      {/* <Image
        src="https://png.pngtree.com/png-vector/20190627/ourmid/pngtree-25d-stereo-404-page-lost-png-image_1511831.jpg"
        alt=""
        fill
      /> */}
    </Layout>
  );
};

export default NotFound;
