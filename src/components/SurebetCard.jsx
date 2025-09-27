import React from "react";

const SurebetCard = ({ contest = {} }) => {
  const { name = "Contest", prize = "-", status = "-" } = contest;

  return (
    <div className="bg-white p-3 rounded shadow-sm">
      <div className="font-medium text-sm">{name}</div>
      <div className="text-xs text-gray-500 mt-1">{status} • Prize: {prize}</div>
    </div>
  );
};

export default SurebetCard;
