import React, { useState } from 'react'
import s from "./style.module.css"
import { Search as SearchIcon } from "react-bootstrap-icons"

export function SearchBar({ onSubmit }) {

  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value)
  }

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        value={value}
        onChange={handleChange}
        onKeyUp={submit}
        className={s.input}
        type='text'
        placeholder={"Search a TV Show you may like..."} />

    </>
  )
}
