import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"
import { useNavigate} from "react-router-dom";
import { Input, SearchButton, Form } from "./style";

function NavInput() {
  const [input, setInput] = useState("")
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!input) return;
    navigate(`/search?s=${input}`, { replace: true })

    setInput("");
  };

  return (
    <Form onSubmit={handleForm}>
      <Input
        type="text"
        backg="#1f1f1f"
        color="#fff"
        value={input}
        placeholder="Search for..."
        onChange={handleInput}
      />
      <SearchButton color="#fff" type="submit"><FiSearch/></SearchButton>
    </Form>
  );
}

export default NavInput;
