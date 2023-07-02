import React from "react";
import { useState } from "react";

const useInput = (initialData) => {
  const [values, setValues] = useState(initialData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange,
  };
};

export default useInput;
