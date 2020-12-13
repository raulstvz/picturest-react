import { React, useState } from "react";
import "./PinForm.css";
import Button from "../button/Button";
import PlusIcon from "../../assets/plus.svg";

const PinForm = ({ user, boards }) => {

  //formData : combo for the inputs
  const [formData, setFormData] = useState({
    title: undefined,
    description: undefined,
    source: undefined,
    board: undefined
  })

  //Body
  const body = {
    author: user.id, //by props
    title: formData.title,
    description: formData.description,
    source: formData.source,
    board: parseInt(formData.board), //🎖️ self-developed: stores the id as integer
    comments: []
  };

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
      .then((response) => console.log(response.json))
      .then((json) => console.log(json));
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
        <div className="form__container">
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
              <select onChange={(e) =>
                setFormData({ ...formData, board: e.target.value })}>
                {boards.map((board) => (
                  <option value={board.id}>{board.title}</option>
                ))}
              </select>
            </label>
            <Button name="Create" onClick={handleCreate} />
          </form>
        </div>
      ) : (
          <></>
        )}
    </>
  );
};

export default PinForm;
