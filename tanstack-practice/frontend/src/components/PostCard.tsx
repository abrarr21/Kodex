interface PostCardProps {
  title: string;
  description: string;
}

const PostCard = ({ title, description }: PostCardProps) => {
  return (
    <div className="border rounded-xl p-4 shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default PostCard;
