export default function weatherReducer(state = [], action) {
  switch (action.type) {
    case "GET_WEATHER":
      return [...state, { ...action.weather }];

    default:
      return state;
  }
}
