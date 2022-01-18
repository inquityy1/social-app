export default function validateProfileInfo(values) {
    let errors = {};
  
    //handle
    if (!values.handle) {
      errors.handle = "Username/handle is required";
    } else if (values.handle.length > 40) {
      errors.handle = "Username cannot be more than 40 characters";
    }

    //status
    if (!values.status) {
      errors.status = "Status is required";
    }

    //skills
    if (!values.skills && values.skills.length === 0) {
      errors.skills = "Skills is required";
    }
  
    return errors;
  }
  