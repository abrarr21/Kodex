import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import PostCard from "./PostCard";
import { useState } from "react";

interface PostData {
  title: string;
  description: string;
}

// GET data endpoint
const fetchData = () => {
  return axios.get("http://localhost:6969/posts");
};

// create data endpoint
const addPost = (postData: PostData) => {
  return axios.post(`http://localhost:6969/posts`, postData);
};

const UpdateData = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
    staleTime: 60000,
  });

  const { mutate: addPostMutation } = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ title, description });
    const newPost = { title, description };
    addPostMutation(newPost);
    setTitle("");
    setDescription("");
  };

  if (isLoading) return <h1>Loading....</h1>;

  if (isError) return <h1>Something went wrong....</h1>;

  return (
    <div className="p-3">
      <form className="mb-3" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          value={title}
        />

        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          value={description}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {data?.data.map((post: PostData, index: number) => (
          <PostCard
            key={index}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default UpdateData;
