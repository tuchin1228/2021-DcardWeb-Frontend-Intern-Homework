import { combineReducers } from 'redux';

function calculate(state = 20, action) {
  switch (action.type) {
    case 'increment':
      return state + 20;
    case 'init':
      console.log('跑init', state);
      return 20;
    default:
      return state;
  }
}

const datas = (state = [], action) => {
  switch (action.type) {
    case 'get_success':
      return { state: action.data, finish: false };
    case 'get_last':
      return { state: action.data, finish: true };
    default:
      return state;
  }
};

const allReducers = combineReducers({
  count: calculate,
  datas,
});

export default allReducers;
