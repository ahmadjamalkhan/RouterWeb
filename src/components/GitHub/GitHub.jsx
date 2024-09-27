import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub() {
    const data=useLoaderData()
    // const [data, setData] = useState([]);

    //   useEffect(() => {
    //   fetch(`http://api.github.com/users/hiteshchoudhary`)
    //     .then(response => response.json())
    //     .then(data =>{ setData(data)})
    //     // return data
    // }, []);
  
  return <div  className="flex items-center justify-between"><h1 className="text-3xl">GitHub Followers : {data.followers}</h1>
  
  <img src={data.avatar_url} alt="" />
  
  </div>;
}

export default GitHub;
export const gitHubLoader =async ()=>{
    const response= await fetch(`http://api.github.com/users/hiteshchoudhary`)
    return  response.json()

}
