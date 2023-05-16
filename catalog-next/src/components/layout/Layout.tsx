import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.interface";
import Footer from "./Footer";
import dynamic from "next/dynamic";

// Щоб Footer грузився тільки на клієнті -->
const DynamicFooter = dynamic(() => import("./Footer"), {
  ssr: false, // Вимикаємо серверний рендеринг
});
// <--

// Аналог імпорту стилів  -->
// import { Titillium_Web } from "next/font/google";
// const titillium = Titillium_Web({
//   weight: ["300", "400", "600"],
//   subsets: ["latin"],
//   variable: "--titillium",
// });
// <--

const Layout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <main>{children}</main>
      <DynamicFooter />
    </Meta>
  );
};

export default Layout;
