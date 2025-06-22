import UserDetails from "./UserDetails";
import Body from "./Body";
import Location from "./Location";

const Post: React.FC = () => {
  return (
    <div className="grid gap-6 border border-dotted border-gray-300 p-6 rounded-lg shadow-md bg-gray-600 max-w-3xl mx-auto">
      <UserDetails />
      <Body />
      <Location />
    </div>
  );
};

export default Post;
