export function formatGraphQLErrors(errors) {
  return errors.reduce(
    (prev, error) => {
      if (error.field) {
        prev.errors[error.field.join(`.`)] = error.message;
      } else {
        prev.messages.push(error.message);
      }

      return prev;
    },
    { errors: {}, messages: [] }
  );
}
