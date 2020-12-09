import { React, useState } from "react";
import "./BoardForm.css";

const BoardForm = ({ visible, user }) => {
  // Title
  const [title, setTitle] = useState();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  //Description
  const [description, setDescription] = useState();

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  //Body
  const body = {
    author: user.id, //by props
    title: title,
    description: description,
    collaborators: [],
  };

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
      .then((res) => console.log(res.json))
      .then((json) => console.log(json));
  };

  return (
    <>
      {visible === true ? (
        <div className="form__container">
          <h4>Create Board</h4>
          <form>
            <label>
              Name
              <input type="text" name="name" onChange={handleTitleChange} />
            </label>
            <label>
              Description
              <input
                type="text"
                name="description"
                onChange={handleDescriptionChange}
              />
            </label>
            <input
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

export default BoardForm;
