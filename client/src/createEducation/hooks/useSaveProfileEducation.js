import { useState, useEffect } from "react";

const useSaveProfileEducation = (submitForm, validate) => {
  const [values, setValues] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    name === "current"
      ? setValues({
          ...values,
          [name]: checked,
        })
      : setValues({
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

export default useSaveProfileEducation;
