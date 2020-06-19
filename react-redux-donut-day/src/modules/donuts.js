

// Reducer and its initialState go here

const initialState = {
  donutOrderList: [
    {
      id: 1,
      name: "Brianna",
      flavor: "Everything Bagel Doughnut",
    },
    {
      id: 2,
      name: "Alex",
      flavor: "Blackberry Hibiscus",
    },
    {
      id: 3,
      name: "Dan",
      flavor: "The biggest coffee roll ever",
    },
  ],
};

const donuts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DONUT:
      const newDonut = state.donutOrderList.concat(action.donut);
      return { ...state, donutOrderList: newDonut };

    case CLEAR_FORM:
      return { ...state, name: "", flavor: "" };

    case HANDLE_FIELD_CHANGE:
    const fieldName = action.event.target.name
    const fieldValue = action.event.target.value
      return {...state,
        [fieldName]: fieldValue
      }

    default:
      return state;
  }
};

// Action type constants go here
// Action creators go here
const ADD_DONUT = "ADD_DONUT";


const addDonutOrder = (donut) => {
  return {
    type: ADD_DONUT,
    donut,
  };
};

const HANDLE_FIELD_CHANGE = "HANDLE_FIELD_CHANGE";

const handleFieldChange = (event) => {
  const newName = event.target.value;
  return {
    type: HANDLE_FIELD_CHANGE,
      event
  };
};

const CLEAR_FORM = "CLEAR_FORM";

const clearForm = () => {
  return {
    type: CLEAR_FORM,
  };
};

// Export statement goes here

export { donuts, addDonutOrder, clearForm, handleFieldChange };
