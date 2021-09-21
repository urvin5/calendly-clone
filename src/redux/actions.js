export const SELECT_TIME = "SELECT_TIME";
export const GET_TIME_SLOTS = "GET_TIME_SLOTS";
export const DETAILS_OF_TIME = "DETAILS_OF_TIME";
function selectTime(payload) {
  return {
    type: SELECT_TIME,
    payload,
  };
}

function submitDetails(payload) {
  return {
    type: DETAILS_OF_TIME,
    payload,
  };
}

function getTimeSlots() {
  return {
    type: GET_TIME_SLOTS,
  };
}
export { selectTime, getTimeSlots, submitDetails };
