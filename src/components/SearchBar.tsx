// import { useState } from "react";
import { useForm } from "react-hook-form";

const SearchBar = ({ setText }: any) => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    // console.log(data);
    setText(data.search);
  };

  return (
    <>
      <form
        className="d-flex p-2"
        role="search"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          {...register("search")}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
