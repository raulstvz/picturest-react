import { React, useState } from "react";
import "./PinForm.css";

const PinForm = ({ user, boards, visible }) => {
  //Title
  const [title, setTitle] = useState();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  //Description
  const [description, setDescription] = useState();

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  //Source
  const [source, setSource] = useState();

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  //Selected Board
  const [board, setBoard] = useState();

  const handleSelectedBoard = (e) => {
    setBoard(e.target.value);
  };

  console.log(title, description, source, board);

  //Body
  const body = {
    author: user.id, //by props
    title: title,
    description: description,
    source: source,
    board: board,
  };

  console.log(body)
  //Fetch function
  const handleCreate = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(body),
    };

    fetch("http://localhost:5000/api/pins", options)
      .then((res) => console.log(res.json))
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
              <input type="text" name="name" onChange={handleTitleChange} />
            </label>
            <label>
              Describe your pin
              <input
                type="text"
                name="name"
                onChange={handleDescriptionChange}
              />
            </label>
            <label>
              Source of the image
              <input type="text" name="name" onChange={handleSourceChange} />
            </label>
            <label>
              Board
              <select onChange={handleSelectedBoard}>
                {boards.map((board) => (
                  <option value={board.id}>{board.title}</option>
                ))}
              </select>
            </label>
            <button
              className="create__button"
              type="submit"
              value="Create"
              onClick={handleCreate}
            />
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PinForm;
