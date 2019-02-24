/* eslint-disable default-case */
// all actions are sent to reducers
// default value to state
export default function (state = null, action) {
  switch (action.type) {
    case 'USER_SELECTED':
      return action.payload;
  }
  return state;
}
