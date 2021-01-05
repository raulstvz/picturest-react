import { React, useState } from "react";
import "./BoardForm.css";
import Button from "../button/Button";
import PlusIcon from "../../assets/plus.svg";

const BoardForm = ({ user }) => {

  //formData : combo for the inputs
  const [formData, setFormData] = useState({
    title: undefined,
    description: undefined
  })

  //Body
  const body = {
    author: user._id, //by props
    title: formData.title,
    description: formData.description,
    collaborators: [],
    pins: []
  };

  console.log(body)


  // Fetch function
  const handleCreate = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:5000/api/boards", options)
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
        <h2 className="boardList__title">Boards</h2>
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
        <div className="boardform__container">
          <h4>Create Board</h4>
          <form>
            <label>
              Title for your board
              <input
                name="title"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })}>
              </input>
            </label>
            <label>
              Describe your board
              <input
                name="description"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })}>
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

export default BoardForm;
