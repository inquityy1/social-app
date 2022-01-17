export default function ValidateInfoCreateProfile(values) {
  let errors = {};

  //Handle
  if (!values.handle) {
    errors.handle = "Username required";
  } else if (values.handle.length < 2 || values.handle.length > 40) {
    errors.handle =
      "Username needs to have minimum of 2 char and maximum of 40 char";
  }

  //Skills
  if (!values.skills) {
    errors.skills = "U need to enter some of ur skills ";
  }

  return errors;
}
// handle: "",
//     skills
