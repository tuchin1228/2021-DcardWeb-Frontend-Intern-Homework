import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function cityView() {
  const match = useRouteMatch();

  // 跳過的筆數
  const [count, setCount] = useState(0);
  // API資料
  const [cityData, setCityData] = useState([]);
  // 是否最後一頁
  const [isLast, setisLast] = useState(false);
  // 防止重複call api
  const [startGetAPI, setStartGetAPI] = useState(false);

  const onScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      setCount(count + 30);
    }
  };
  const getCityData = async (skip) => {
    const res = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${match.params.city}?$top=30&$skip=${skip}&$format=JSON`);
    const data = await res.json();
    console.log('data', data);
    setCityData(cityData.concat(data));
    if (data.length !== 30) setisLast(true);
    else setisLast(false);
  };
  useEffect(() => {
    if (!isLast) { window.addEventListener('scroll', onScroll); }
    return () => window.removeEventListener('scroll', onScroll);
  });

  useEffect(() => {
    if (count !== 0) {
      getCityData(count);
    }
  }, [count]);

  useEffect(() => {
    setStartGetAPI(true);
    setCityData([]);
  }, [match]);

  useEffect(() => {
    if (cityData.length === 0 && count === 0 && startGetAPI === true) {
      getCityData(0);
      setStartGetAPI(false);
    } else if (cityData.length === 0 && count !== 0) {
      setCount(0);
      getCityData(0);
    }
  }, [cityData]);

  return (
    <div className="view col-10 col-sm-11">

      <ul className="">
        {
           cityData.map((item) => (
             <li key={item.ID} className="mb-3 py-2 px-2">

               <h2>{item.Name}</h2>
               <p>{item.DescriptionDetail}</p>
               {
                  item.Picture.PictureUrl1
                    ? <img src={item.Picture.PictureUrl1} alt="" /> : ''
                }
             </li>
           ))
        }
      </ul>

    </div>
  );
}
