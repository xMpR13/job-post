import { LuSend } from "react-icons/lu";
import { FaWandMagicSparkles } from "react-icons/fa6";

const Location: React.FC = () => {
  return (
    <div className="space-y-4 pt-4">
      <div className="text-4xl font-semibold text-black dark:text-white text-left">
        R2 169 799,20/year
      </div>
      <div className="text-2xl text-gray-700 dark:text-gray-300 text-left">
        Full-time · Work in Midrand Office
      </div>

      <div className="flex gap-4 mt-4">
        <button
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition text-black dark:text-white"
          aria-label="Send message"
        >
          <LuSend className="text-lg" />
          <span>Message</span>
        </button>

        <button
          className="flex items-center gap-2 text-white font-bold py-2 px-4 rounded bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 hover:brightness-110 transition"
          aria-label="Apply for the job"
        >
          <FaWandMagicSparkles className="text-lg" />
          <span>Apply Now</span>
        </button>
      </div>
    </div>
  );
};

export default Location;
