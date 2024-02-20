// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data2 = useLoaderData();

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white text-3xl">
        Github Followers: {data2.followers + 1}
        <img
          src={data2.avatar_url}
          alt="Github Profile Picture"
          width="300px"
        />
      </div>
    </>
  );
}

const GithubFetcher = async () => {
  const data = fetch("https://api.github.com/users/karanveer43f").then((res) =>
    res.json()
  );
  return data;
};

export { Github, GithubFetcher };
