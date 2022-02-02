import { useState, useEffect } from "react";

const useCreateProfileForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    handle: "",
    company: "",
    website: "",
    bio: "",
    location: "",
    status: "",
    skills: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm(values);
    }

    console.log(values);
  }, [isSubmitting, submitForm, errors, values]);

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

  return { handleChange, values, handleSubmit, errors };
};

export default useCreateProfileForm;
