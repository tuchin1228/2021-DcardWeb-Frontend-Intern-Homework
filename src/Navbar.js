import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';

export default function Navbar() {
  const CityArray = [
    { name: '臺北市', eng: 'Taipei' },
    { name: '新北市', eng: 'NewTaipei' },
    { name: '桃園市', eng: 'Taoyuan' },
    { name: '臺中市', eng: 'Taichung' },
    { name: '臺南市', eng: 'Tainan' },
    { name: '高雄市', eng: 'Kaohsiung' },
    { name: '基隆市', eng: 'Keelung' },
    { name: '新竹市', eng: 'Hsinchu' },
    { name: '新竹縣', eng: 'HsinchuCounty' },
    { name: '苗栗縣', eng: 'MiaoliCounty' },
    { name: '彰化縣', eng: 'ChanghuaCounty' },
    { name: '南投縣', eng: 'NantouCounty' },
    { name: '雲林縣', eng: 'YunlinCounty' },
    { name: '嘉義縣', eng: 'ChiayiCounty' },
    { name: '嘉義市', eng: 'Chiayi' },
    { name: '屏東縣', eng: 'PingtungCounty' },
    { name: '宜蘭縣', eng: 'YilanCounty' },
    { name: '花蓮縣', eng: 'HualienCounty' },
    { name: '臺東縣', eng: 'TaitungCounty' },
    { name: '金門縣', eng: 'KinmenCounty' },
    { name: '澎湖縣', eng: 'PenghuCounty' },
    { name: '連江縣', eng: 'LienchiangCounty' },
  ];

  return (
    <HashRouter>
      <ul className="bar col-2 col-sm-1   px-0">
        <li>
          <NavLink activeClassName="active" exact to="/scenicSpot">ALL</NavLink>
        </li>
        {
          CityArray.map((item) => (
            <li key={item.eng}>
              <NavLink activeClassName="active" to={`/scenicSpot/${item.eng}`}>{item.name}</NavLink>
            </li>
          ))
        }
        {/* <li>
          <NavLink activeClassName="active" to="/scenicSpot/Taipei">臺北市</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/NewTaipei">新北市</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/Taoyuan">桃園市</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/Taichung">臺中市</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/Tainan">臺南市</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/Kaohsiung">高雄市</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/Keelung">基隆市</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/Hsinchu">新竹市</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/HsinchuCounty">新竹縣</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/MiaoliCounty">苗栗縣</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/ChanghuaCounty">彰化縣</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/NantouCounty">南投縣</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/YunlinCounty">雲林縣</NavLink>

        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/ChiayiCounty">嘉義縣</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/Chiayi">嘉義市</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/PingtungCounty">屏東縣</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/YilanCounty">宜蘭縣</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/HualienCounty">花蓮縣</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/TaitungCounty">臺東縣</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/KinmenCounty">金門縣</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/PenghuCounty">澎湖縣</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scenicSpot/LienchiangCounty">連江縣</NavLink>
        </li> */}
      </ul>
    </HashRouter>
  );
}
