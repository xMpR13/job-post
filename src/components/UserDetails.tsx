import User from "../assets/image/user.png";
import VerifiedMark from "../assets/image/verified.png";

const UserDetails: React.FC = () => {
  return (
    <div className="flex items-start gap-4">
      <img
        src={User}
        alt="User profile"
        className="w-20 h-20 rounded-full object-cover"
      />

      <div className="pt-2">
        <div className="flex items-center gap-2">
          <h2 className="text-4xl text-amber-500 font-semibold">Thursday</h2>
          <img src={VerifiedMark} alt="Verified badge" className="w-6 h-6" />
        </div>

        <div className="flex gap-1 text-gray-700 mt-1">
          Posted in <span className="font-bold text-black">TikkaBomb💣</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
