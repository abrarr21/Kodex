import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

interface PostData {
  title: string;
  description: string;
}

const Home = () => {
  const [data, setDeta] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:6969/posts");
    return response.data;
  };

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await fetchData();
        setDeta(posts);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (isLoading) return <h1>Loading.....</h1>;

  if (isError) return <h1>Something went wrong</h1>;

  return (
    <div className="">
      {data.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default Home;
