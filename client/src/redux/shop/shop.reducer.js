import showPageData from './dummyData';

const INITIAL_STATE = {
  showPageData: showPageData
}


const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
        return state;
  }
}

export default shopReducer;