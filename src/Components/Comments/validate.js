export const validate = (content) => {
  let errors = "";

  if (!content.trim()) {
    errors = "can't post empty content";
  } else {
    errors = "";
  }

  return errors;
};
