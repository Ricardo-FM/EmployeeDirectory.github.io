import React from "react";
import { useForm } from "react-hook-form";

function search(props) {
  return (
    <form>
      <div>
        <label>Search:</label>
        <input
                  name="search"
                  type="text"
                  placeholder="Search"
                  id="search"
        />
        <button onClick={props.handleFormSubmit}>
          Search
        </button>
      </div>
    </form>
  );
}

export default search;