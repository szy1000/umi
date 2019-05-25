import get from '../utils/https'

export default {
  namespace: 'index',
  state: {
    count: 100,
    list: [
      {
        id: 1,
        setup: 'Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
      },
      {
        id: 2,
        setup: 'What happens to a frog\'s car when it breaks down?',
        punchline: 'It gets toad away',
      },
    ]
  },

  effects: {
    // getData: function* ({payload}, {call, put}) {
    //   const data = yield call(SomeService.getEndpointData, payload, 'maybeSomeOtherParams');
    //   yield put({ type: 'getData_success', payload: data });
    // },
    *queryInitCards (_, sagaEffects) {
      //todo call sgaEffects
      const {call, put} = sagaEffects;
      const endPointURI = 'https://official-joke-api.appspot.com/random_joke';
      const data = yield call(get, endPointURI)
      yield put({ type: 'addNewCard', payload: data });
    }

  },
  reducers: {
    addNewCard(state, {payload: newCard}) {
      const nextCounter = state.counter + 1;
      const newCardWithId = {...newCard, id: nextCounter};
      const nextData = state.list.concat(newCardWithId);
      return {
        list: nextData,
        counter: nextCounter,
      };
    }
  }

};
