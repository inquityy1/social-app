export default function validateCreateEducation(values) {
  let errors = {};

  //school
  if (!values.school) {
    errors.school = "School required";
  }

  //degree
  if (!values.degree) {
    errors.degree = "Degree required";
  }

  //fieldOfStudy
  if (!values.fieldofstudy) {
    errors.fieldofstudy = "FieldOfStudy required";
  }

  //from
  if (!values.from) {
    errors.from = "Your date for work required";
  }

  return errors;
}
