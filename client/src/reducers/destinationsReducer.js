export default function reducer(state = {
  destinations: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_DESTINATION': {
      return {
        ...state,
        fetching: true,
      };
    }
    case 'FETCH_DESTINATION_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case 'FETCH_DESTINATION_FULFILLED': {
      return { ...state,
        fetching: false,
        fetched: true,
        destinations: action.payload,
      };
    }
    // case 'ADD_TWEET': {
    //   return {
    //     ...state,
    //     tweets: [...state.tweet, action.payload],
    //   };
    // }
    // case 'UPDATE_TWEET': {
    //   const { id, text } = action.payload;
    //   const newTweets = [...state.tweets];
    //   const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
    //   newTweets[tweetToUpdate] = action.payload;
    //   return {
    //     ...state,
    //     tweets: newTweets,
    //   };
    // }
    // case 'DELETE_TWEET': {
    //   return { ...state,
    //     tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
    //   };
    // }
  }
  return state;
}