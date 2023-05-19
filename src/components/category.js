import React from "react";

export default function Category({category,image}) {
  return (
    <>
      <div className="flex mb-5 items-center gap-10 p-5 rounded-2xl bg-emerald-400">
        <img
          className="h-32 rounded-2xl w-40"
          src={image}
          alt={category}
        />
        <h3 className="font-mono font-bold text-2xl">{category}</h3>
      </div>
    </>
  );
}
