export default function validateCreateExperience(values) {
  let errors = {};

  //title
  if (!values.title) {
    errors.title = "Title required";
  }

  //company
  if (!values.company) {
    errors.company = "Company required";
  }

  //from
  if (!values.from) {
    errors.from = "Please add your location";
  }

  return errors;
}
