import { useEffect, useState } from 'react';

const FetchUseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Tanmoy-Santra")
      .then((res) => res.json())
      .then((data) => setData(data));
      console.log(data);
      console.log(typeof(data));
            
  }, []);

  return (
    <div>
      <ul>
        {data.login}
        <img src={data.avatar_url}></img>
        {data.bio}
      </ul>
    </div>
  );
};

export default FetchUseEffect;
