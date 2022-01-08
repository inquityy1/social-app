import { useState, useEffect } from "react";

const useCreateUserFormSignUp = (submitForm, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm(values);
    }
  }, [isSubmitting, submitForm, errors, values]);

  return { handleChange, values, handleSubmit, errors };
};

export default useCreateUserFormSignUp;
