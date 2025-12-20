import { useState } from "react";

export const Index = () => {
  const [user, setUser] = useState(false);

  return (
    <div className="border border-gray-300 bg-blue-600 px-4 py-4 ps-4 pe-4 text-white">
      Hello Index
    </div>
  );
};
