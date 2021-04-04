import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import getData from './action/getdata';

export default function child() {
  // const count = useSelector((state) => state.count);
  // const API_DATA = useSelector((state) => state.datas);

  // 跳過的筆數
  const [count, setCount] = useState(0);
  // API資料
  const [Alldata, setAlldata] = useState([]);
  // 是否最後一頁
  const [isLast, setisLast] = useState(false);

  // const dispatch = useDispatch();
  // const updataData = () => {
  //   dispatch({ type: 'increment' });
  // };

  const onScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      setCount(count + 30);
    }
  };

  const getData = async (skip) => {
    console.log('全部發送api');
    const corsanywhere = 'https://cors-anywhere.herokuapp.com/';
    const res = await fetch(`${corsanywhere}https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=${skip}&$format=JSON`);
    const data = await res.json();
    setAlldata(Alldata.concat(data));
    if (data.length !== 30) setisLast(true);
    else setisLast(false);
  };
  useEffect(() => {
    if (!isLast) { window.addEventListener('scroll', onScroll); }
    return () => window.removeEventListener('scroll', onScroll);
  });

  useEffect(() => {
    getData(count);
  }, [count]);

  // useEffect(() => {
  //   console.log('組件建立');
  //   // console.log('Alldata', Alldata);
  //   dispatch({ type: 'init' });
  //   setAlldata([]);
  //   // await dispatch(getData(0));
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  // useEffect(() => {
  //   console.log('count變', count);
  //   dispatch(getData(count - 20));
  // }, [count]);

  // useEffect(() => {
  //   console.log('Alldata', Alldata);
  // }, [Alldata]);

  // useEffect(() => {
  //   console.log('寫入');
  //   // console.log('Alldata', Alldata);
  //   console.log('API_DATA', API_DATA);
  //   if (API_DATA.state && !API_DATA.finish) {
  //     setAlldata(Alldata.concat(API_DATA.state));
  //     window.addEventListener('scroll', onScroll);
  //   } else if (API_DATA.finish) {
  //     setAlldata(Alldata.concat(API_DATA.state));
  //   }
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [API_DATA]);

  return (
    <div className="view col-11">
      {/* <h1 className="text-primary">我是子組件</h1> */}
      {/* <button type="button" onClick={() => props.changeNum()}>母組件++</button> */}
      {/* <h4>
        child:
        {count}
      </h4> */}
      {/* <button type="button" onClick={updataData}>更新</button> */}

      <ul>
        {Alldata ? Alldata.map((item) => (
          <li key={item.ID} className="mb-3 py-2 px-2">
            <h2>{item.Name}</h2>
            <p>{item.DescriptionDetail}</p>
            {
              item.Picture.PictureUrl1 ? <img src={item.Picture.PictureUrl1} alt="" /> : ''
            }

          </li>
        )) : ''}
      </ul>
      {/* {API_DATA ? 'yes' : 'no'} */}
    </div>
  );
}
