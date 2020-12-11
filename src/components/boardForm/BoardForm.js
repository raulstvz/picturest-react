import { React, useState, useEffect } from "react";
import "./BoardForm.css";
import Button from "../button/Button";

const BoardForm = ({ visible, user }) => {

  //formData : combo for the inputs
  const [formData, setFormData] = useState({
    title: undefined,
    description: undefined
  })

  //Body
  const body = {
    author: user.id, //by props
    title: formData.title,
    description: formData.description,
    collaborators: [],
  };

  console.log(body);

  // Fetch function
  const handleCreate = () => {
    /* setIsFetching(true) */
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

    /* setIsFetching(false) */
  };

  // Crear un estado a parte cuando el post termina de ejecutarse

  const [isFetching, setIsFetching] = useState(false)

  /* seEffect(() => {
    fetch("http://localhost:5000/api/boards")
      .then((response) => response.json())
      .then((json) => setBoards(json));
  }, []); */

  return (
    <>
      {visible === true ? (
        <div className="form__container">
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
            <Button name="Create" onClick={handleCreate} />
          </form>
        </div>
      ) : (
          <></>
        )}
    </>
  );
};

export default BoardForm;
