import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "./movieSlice";

export const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie.trim() === "") return; // Prevent empty movie names

    dispatch(addMovie({ id: Date.now(), title: newMovie })); // Dispatch action
    setNewMovie(""); // Clear input after adding
  };

  return (
    <>
      <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        placeholder="Enter movie name"
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </>
  );
};
