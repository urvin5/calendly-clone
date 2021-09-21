import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { submitDetails } from "../redux/actions";

export function Details() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { timeSlots = [] } = useSelector((state) => state.reducer);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    time: localStorage.getItem("time"),
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(submitDetails(formData));
    history.push("/");
  };

  useEffect(() => {
    timeSlots.filter((time) => {
      if (
        time.time === localStorage.getItem("time") &&
        time.isSelected === true
      ) {
        setFormData(time.details);
      }
    });
  }, [timeSlots]);
  return (
    <div className="">
      <h3>You have selected {localStorage.getItem("time")}</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First name"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            value={formData.firstName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last name"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            value={formData.lastName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone number"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            value={formData.phone}
          />
        </Form.Group>

        <Button
          type="reset"
          variant="light"
          className="me-2"
          onClick={() => history.push("/")}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleFormSubmit(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
