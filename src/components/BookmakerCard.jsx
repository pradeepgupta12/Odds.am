import React from "react";

const BookmakerCard = ({ bookmaker = {} }) => {
  const { name = "Bookie", rating = "-", bonus = "-", country = "-" } = bookmaker;

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-sm font-semibold">
          {name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <div className="font-medium text-sm">{name}</div>
          <div className="text-xs text-gray-500">{country} • {rating}★</div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-sm font-semibold">{bonus}</div>
        <button className="mt-2 bg-red-600 text-white text-xs px-3 py-1 rounded">Claim</button>
      </div>
    </div>
  );
};

export default BookmakerCard;
