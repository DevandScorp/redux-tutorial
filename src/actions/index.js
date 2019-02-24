/* eslint-disable import/prefer-default-export */
export function selectUser(user) {
  console.log(`You clicked on user: ${user.first}`);
  return {
    type: 'USER_SELECTED',
    payload: user,
  };
}
