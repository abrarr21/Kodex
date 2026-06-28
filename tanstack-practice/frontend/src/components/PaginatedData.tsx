import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostCard from "./PostCard";
import { useState } from "react";

interface PostData {
  title: string;
  description: string;
}

const fetchData = (page: number) => {
  return axios.get(
    `http://localhost:6969/paginated-posts?limit=5&page=${page}`,
  );
};

const PaginatedData = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchData(pageNumber),
  });

  if (isLoading) return <h1>Loading....</h1>;
  return (
    <div>
      {data?.data?.data.map((post: PostData, index: number) => (
        <PostCard
          key={index}
          title={post.title}
          description={post.description}
        />
      ))}
      <div className="flex gap-10">
        <button
          className="py-2 px-4 bg-neutral-400"
          onClick={() => setPageNumber((prev) => prev - 1)}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          className="py-2 px-4 bg-neutral-400"
          onClick={() => setPageNumber((prev) => prev + 1)}
          disabled={pageNumber === data?.data.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedData;
