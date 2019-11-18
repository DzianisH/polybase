
export const logState = (newState, actionType) => {
  const msg = actionType
    ? 'after ' + actionType
    : undefined;
    
  console.log(newState, msg);
  return newState;
}
