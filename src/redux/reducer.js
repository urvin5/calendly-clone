import { timeSlots } from "../constants";
import { DETAILS_OF_TIME, GET_TIME_SLOTS } from "./actions";

export function reducer(state = {}, action) {
  switch (action.type) {
    case GET_TIME_SLOTS:
      return {
        ...state,
        timeSlots: timeSlots,
      };
    // case SELECT_TIME:
    //   return {
    //     ...state,
    //     timeSlots: timeSlots.filter((time) => {
    //       if (time.time === action.payload) {
    //         time.isSelected = true;
    //       }
    //     }),
    //   };
    case DETAILS_OF_TIME:
      return {
        ...state,
        timeSlots: [
          ...timeSlots,
          timeSlots.filter((time) => {
            if (time.time === action.payload.time) {
              time.isSelected = true;
              time.details = action.payload;
            }
          }),
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
