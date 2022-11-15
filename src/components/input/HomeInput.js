import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Input, SearchButton, Form } from "./style";

function HomeInput() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!input) return;
    navigate(`/search?s=${input}`, { replace: true });

    setInput("");
  };

  return (
    <Form onSubmit={handleForm}>
      <Input
        type="text"
        backg="rgba(255, 255, 255, 0.9)"
        value={input}
        onChange={handleInput}
        ref={inputRef}
      />
      <SearchButton color="#000" type="submit">
        <FiSearch />
      </SearchButton>
    </Form>
  );
}

export default HomeInput;
