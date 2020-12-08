import React from "react";
import "./BoardForm.css";

const BoardForm = ({ visible }) => {
  return (
    <>
      {visible === true ? (
        <div className="form__container">
          <h4>Create Board</h4>
          <form>
            <label>
              Name
              <input type="text" name="name" />
            </label>
            <label>
              Description
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

export default BoardForm;
