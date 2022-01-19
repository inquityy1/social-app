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

  //website
  if (!values.website) {
    errors.website = "Email required";
  } else if (
    !/^(https:\/\/www\.|http:\/\/www\.|www\.)[a-zA-Z0-9\-_$]+\.[a-zA-Z]{2,5}$/g.test(
      values.website
    )
  ) {
    errors.website = "You need .com at the end";
  }
  return errors;
}
