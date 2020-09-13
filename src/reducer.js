export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove
  // token: 'BQC8QW8vRO75QyENnd25bwmlxI0jYGjACNiYpo5M_wBYTOg-oRLmjAKHSsMIGjWiYLfqNugqt336lvSwn0SAP-uVa7XlZo--3tqdCf_mUho_f5RsHeZtmjQ3QZrGOHweQRb8EruTjjAidBkquG-ErQAGNvPb3U4M4Qkh91K5OlXHvFzL',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      }
    default:
      return state;
  }
};

export default reducer;
