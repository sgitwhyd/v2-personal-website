import React from "react";

const index = ({
  title,
  showSeparator = true,
}: {
  title: string;
  showSeparator?: boolean;
}) => {
  return (
    <>
      <div className="flex justify-start sm:mt-10">
        <div className="relative mb-5 md:text-center">
          <h1 className="relative z-[1] text-3xl font-bold lg:text-5xl">
            {title}
          </h1>
        </div>
      </div>
      {showSeparator && <hr className="my-5 w-full" />}
    </>
  );
};

export default index;
