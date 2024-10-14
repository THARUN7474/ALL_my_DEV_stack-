import { React, useState, useEffect } from "react";

const Github = () => {
  const [githubdetails, setgithubdetails] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/THARUN7474")
      .then((response) => response.json())
      .then((data) => {
        setgithubdetails(data);
        console.log(data);
      });
    // Fetch user repositories
    fetch("https://api.github.com/users/THARUN7474/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);

  return (
    <div>
      <h1>Github</h1>
      <div className="flex gap-3">
        <img src={githubdetails.avatar_url} alt="github avatar" />
        <h2>Name: {githubdetails.name}</h2>
        <h2>Bio: {githubdetails.bio}</h2>
        <h2>Repositories:</h2>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Github;


// import React from 'react'
// import { useEffect } from 'react'
// import {useLoaderData} from 'react-router-dom'

// function Github() {

//     const data = useLoaderData()

//     // const [data, setData] = React.useState([])
//     // useEffect(() => {
//     //     fetch('https://api.github.com/users/THARUN7474')
//     //     .then((response) => response.json())
//     //     .then(data => {
//     //         console.log(data)
//     //         setData(data)
//     //     })
//     // }, [])

//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
//     <img src={data.avatar_url} width={300} alt="" />
//     </div>
//   )
// }

// export default Github


// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/THARUN7474')
//     return response.json()
// }