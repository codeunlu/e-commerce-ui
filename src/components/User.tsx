import { FaUser } from "react-icons/fa";

const User = () => {
  return (
    <>
      <div className="flex gap-2">
        <FaUser className="w-6 h-6" />
        <p className="text-lg font-medium">Kerem</p>
      </div>
    </>
  );
};

export default User;
