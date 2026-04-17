"use client";
import React from "react";

export default function Button() {
  return (
    <div className="mt-10">
      <button
        className="btn btn-netural rounded-sm "
        onClick={() => console.log("i've clicked here")}
      >
        Click here...
      </button>
    </div>
  );
}
