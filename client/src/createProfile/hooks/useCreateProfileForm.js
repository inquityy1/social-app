import { useState, useEffect } from "react";

const useCreateProfileForm = (profile, submitForm, validate) => {
  const [values, setValues] = useState(profile);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
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

  useEffect(async () => {
    let mounted = true;
    if (mounted, profile) {
      setValues(profile)
    }
    return () => {
      mounted = false;
    };
  }, [profile, setValues]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm(values);
    }
  }, [isSubmitting, submitForm, errors, values]);

  return { handleChange, values, handleSubmit, errors };
};

export default useCreateProfileForm;
