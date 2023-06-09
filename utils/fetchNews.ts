import {gql} from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // graphql query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          offset
          limit
          total
        }
      }
    }
  `;
  // fetch function with Next.js 13 caching
  const res = await fetch(
    "https://morgantown.stepzen.net/api/gaudy-hyena/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? {revalidate: 0} : {revalidate: 60},
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  console.log(
    "LOADING NEW DATA FROM API for category >>> ",
    {category,
    keywords}
  );

  const newsResponse = await res.json();
  console.log(newsResponse.errors);

  // sort function by images vs not images
  const news = sortNewsByImage(newsResponse.data.myQuery);
  // return  results
  return news;
};

export default fetchNews;
