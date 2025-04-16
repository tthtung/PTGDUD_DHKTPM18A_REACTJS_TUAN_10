import { createSlice } from "@reduxjs/toolkit";

let nextId = 1;

const eventSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
  },
  reducers: {
    addEvent: (state, action) => {
      const newEvent = { id: nextId++, ...action.payload };
      state.events.push(newEvent);
    },
    editEvent: (state, action) => {
      const { id, title, date, description } = action.payload;
      const event = state.events.find((e) => e.id === id);
      if (event) {
        event.title = title;
        event.date = date;
        event.description = description;
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter((e) => e.id !== action.payload);
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
