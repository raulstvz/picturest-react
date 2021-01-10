import { React, useState, useEffect } from "react";
import "./PinForm.css";
import Button from "../button/Button";
import PlusIcon from "../../assets/plus.svg";

const PinForm = ({ user, board }) => {

  //formData : combo for the inputs
  const [formData, setFormData] = useState({
    title: undefined,
    description: undefined,
    source: undefined,
    board: undefined
  })

  //Body
  const body = {
    author: user._id, //by props
    title: formData.title,
    description: formData.description,
    source: formData.source,
    //board: parseInt(formData.board),
    board: board._id, //by props
    comments: []
  };

  //console.log(body)

  //Fetch function
  const handleCreate = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:5000/api/pins", options)
    //.then((response) => console.log(response.json))
    //.then((json) => console.log(json));
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="boardList__header">
        <h2 className="pinList__title">Pins</h2>
        {visible === false ? (
          <img
            className="boardList__plusIcon"
            src={PlusIcon}
            alt="Plus icon"
            onClick={toggleVisible}
          />
        ) : (
            <img
              className="boardList__plusIcon"
              src={PlusIcon}
              alt="Plus icon"
              onClick={toggleVisible}
              style={{
                transform: "rotate(45deg)"
              }}
            />
          )}
      </div>
      {visible === true ? (
        <div className="pinform__container">
          <h4>Create pin</h4>
          <form>
            <label>
              Title
              <input
                name="title"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })}>
              </input>
            </label>
            <label>
              Describe your pin
              <input
                name="description"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })}>
              </input>
            </label>
            <label>
              Source of the image
              <input
                name="source"
                onChange={(e) =>
                  setFormData({ ...formData, source: e.target.value })}>
              </input>
            </label>
            <label>
              Board
              {/* <select onChange={(e) =>
                setFormData({ ...formData, board: e.target.value })}>
                {boards.map((board) => (
                  <option value={board.id}>{board.title}</option>
                ))}
              </select> */}
              <input disabled="disabled" value={board.title}>
              </input>
            </label>
            <div className="createbutton__container">
              <Button name="Create" onClick={handleCreate} />
            </div>
          </form>
        </div>
      ) : (
          <></>
        )}
    </>
  );
};

export default PinForm;
