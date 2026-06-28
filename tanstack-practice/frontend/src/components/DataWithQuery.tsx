import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostCard from "./PostCard";

interface PostData {
  title: string;
  description: string;
}

const fetchData = () => {
  return axios.get("http://localhost:6969/posts");
};

const DataWithQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
    staleTime: 60000,
  });

  if (isLoading) return <h1>Loading....</h1>;
  return (
    <div>
      {data?.data.map((post: PostData, index: number) => (
        <PostCard
          key={index}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default DataWithQuery;
