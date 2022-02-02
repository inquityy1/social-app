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
  if (values.website && !validURL(values.website)) {
    errors.website = "Invalid website format";
  }

  return errors;
}

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
