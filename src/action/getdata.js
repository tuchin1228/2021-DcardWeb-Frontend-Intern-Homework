const getData = (skip) => async (dispatch) => {
  console.log('skip', skip);
  const res = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=20&$skip=${skip}&$format=JSON`);
  // console.log('res', res);
  const data = await res.json();
  console.log('data', data);

  if (data.length === 20) {
    await dispatch({
      type: 'get_success',
      data,
    });
  } else if (data.length < 20) {
    await dispatch({
      type: 'get_last',
      data,
    });
  }
};

export default getData;
