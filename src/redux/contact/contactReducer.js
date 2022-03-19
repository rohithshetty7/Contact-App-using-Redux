const initialState = [
  {
    id: 0,
    name: "Rohith Shetty",
    number: 123456789,
    email: "rs@gmail.com",
  },
  {
    id: 1,
    name: "Pavan Sheregar",
    number: 9875439876,
    email: "ps@gmail.com",
  },
  {
    id: 2,
    name: "Azeem",
    number: 8312679141,
    email: "azeem@gmail.com",
  },
  {
    id: 3,
    name: "Chetan Kumar",
    number: 8106530261,
    email: "ck@gmail.com",
  },
  {
    id: 4,
    name: "Harish Sherigar",
    number: 990154701,
    email: "hs@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_Contact":
      state = [...state, action.payload];
      return state;

    case "Update_Contact":
      const updateState = state.map(
        (contact) => contact.id === action.payload.id ? action.payload :contact);
        state=updateState;
        return state

        case"Delete_contact":
        const filteredContacts=state.filter(
          (contact)=>contact.id !==action.payload && contact
        );
        state=filteredContacts;
        return state

    default:
      return state;
  }
};
export default contactReducer;
