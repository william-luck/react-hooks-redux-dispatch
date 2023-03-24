let state = { count: 0 };

// The reducer
function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Dispatch, calls the reducer
function dispatch(action) {
  // Removing the need to store the new state in a variable outside this function. 
  state = changeState(state, action)
  // Updates count on page
  render()
}

function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

// Initial render on page
render()


// let state = { count: 0 };
// let action = { type: "counter/increment" };