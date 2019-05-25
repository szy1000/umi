import get from '../utils/https'
import {message} from 'antd'

export default {
  namespace: 'index',
  state: {
    counter: 10000000,
    list: []
  },

  effects: {
    // getData: function* ({payload}, {call, put}) {
    //   const data = yield call(SomeService.getEndpointData, payload, 'maybeSomeOtherParams');
    //   yield put({ type: 'getData_success', payload: data });
    // },
    * queryInitCards(_, sagaEffects) {
      //todo call sgaEffects
      const {call, put} = sagaEffects;
      const endPointURI = 'https://official-joke-api.appspot.com/random_joke';
      try {
        const data = yield call(get, endPointURI)
        yield put({type: 'addNewCard', payload: data});
      } catch (e) {
        message.error('数据获取失败')
      }

    }

  },
  reducers: {
    addNewCard(state, {payload: newCard}) {
      const nextCounter = state.counter + 1;
      const newCardWithId = {...newCard, id: nextCounter};
      const nextData = state.list.concat(newCardWithId);
      console.log(nextCounter)
      return {
        list: nextData,
        counter: nextCounter,
      };
    }
  }

};
