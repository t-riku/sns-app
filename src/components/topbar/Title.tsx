import Link from "next/link";
import React from "react";

const Title = () => {
  return (
    <div className="col-span-3 font-mono">
      <Link href="/Home">
        <span className="text-2xl text-white ml-5 bold">SNS App</span>
      </Link>
    </div>
  );
};

export default Title;
