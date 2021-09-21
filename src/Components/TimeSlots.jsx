import { useEffect } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getTimeSlots } from "../redux/actions";

export function TimeSlots() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { timeSlots = [] } = useSelector((state) => state.reducer);

  useEffect(() => {
    dispatch(getTimeSlots());
  }, []);
  const handleSelectTime = (time) => {
    // dispatch(selectTime(time));
    localStorage.setItem("time", time);
    history.push("/details");
  };
  return (
    <div>
      <h3>Please select your suitable time slot</h3>
      <ButtonGroup vertical className="d-grid gap-2 m-5">
        {timeSlots.map((time) => (
          <Button
            variant={`outline-${time.isSelected ? "danger" : "primary"}`}
            key={time.time}
            size="lg"
            block
            onClick={() => handleSelectTime(time.time)}
          >
            {time.time}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
