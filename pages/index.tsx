import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import HomeSection from "../components/HomeSection";
import ItemCard from "../components/ItemCard";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NattyGames - Trang chủ</title>
      </Head>
      <HomeSection name="Trending">
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
      </HomeSection>
      <HomeSection name="Mới cập nhật">
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
        <ItemCard name="SIFU - Digital Deluxe Edition" version="v1.7.3" />
      </HomeSection>
    </>
  );
};

export default Home;
