import Image from "next/image";
import {Inter} from "next/font/google";
import styles from "./page.module.css";
import {categories} from "@/constants";
import fetchNews from "@/utils/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";
import sortNewsByImage from "@/utils/sortNewsByImage";

const inter = Inter({subsets: ["latin"]});

async function HomePage() {
  const news: NewsResponse = response
    ? sortNewsByImage(response)
    : await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
