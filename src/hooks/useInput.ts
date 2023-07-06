import { useState } from "react";

type InitialDataType = {
  email: string;
  password: string;
  name?: string;
};

const useInput = (initialData: InitialDataType) => {
  const [values, setValues] = useState(initialData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange,
  };
};

export default useInput;
