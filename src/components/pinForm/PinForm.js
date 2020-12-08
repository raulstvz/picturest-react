import React from "react";
import "./PinForm.css";

const PinForm = ({ visible }) => {
  return (
    <>
      {visible === true ? (
        <div className="form__container">
          <h4>Create pin</h4>
          <form>
            <label>
              Title
              <input type="text" name="name" />
            </label>
            <label>
              Describe your pin
              <input type="text" name="name" />
            </label>
            <label>
              URL link
              <input type="text" name="name" />
            </label>
            <label>
              Board
              <input type="text" name="name" />
            </label>
            <input className="create__button" type="submit" value="Create" />
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PinForm;
