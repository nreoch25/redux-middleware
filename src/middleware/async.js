export default function({ dispatch }) {
  return next => action => {
    //action has no payload
    //or action is not a promise
    //we don't care about it, send it on
    if(!action.payload || !action.payload.then) {
      return next(action);
    }
    console.log("We have a promise", action);
    //make sure action promise resolves
    action.payload
      .then(response => {
        //create a new action with the old type
        //replace the promise with the response
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
  };
}
