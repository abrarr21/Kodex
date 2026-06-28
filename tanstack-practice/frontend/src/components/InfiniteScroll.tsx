import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import PostCard from "./PostCard";
import { useEffect } from "react";

interface PostData {
  title: string;
  description: string;
}

const fetchData = ({ pageParam }: { pageParam: number }) => {
  return axios.get(
    `http://localhost:6969/paginated-posts?limit=10&page=${pageParam}`,
  );
};

const InfiniteScroll = () => {
  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      if (allPages.length < 5) {
        return allPages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  useEffect(() => {
    let handleScrollTofetch = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScrollTofetch);
    return () => {
      window.removeEventListener("scroll", handleScrollTofetch);
    };
  }, []);

  if (isLoading) return <h1>Loading....</h1>;
  return (
    <div>
      {data?.pages.map((page) => {
        return page?.data.data.map((post: PostData, index: number) => {
          return (
            <PostCard
              key={index}
              title={post.title}
              description={post.description}
            />
          );
        });
      })}
    </div>
  );
};

export default InfiniteScroll;
