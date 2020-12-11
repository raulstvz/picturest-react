import { React, useState } from "react";
import "./PinForm.css";
import Button from "../button/Button";

const PinForm = ({ user, boards, visible }) => {

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
    board: formData.board,
  };

  console.log(body);

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

  return (
    <>
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
