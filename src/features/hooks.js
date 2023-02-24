export const useUpdateFields = () => {
  const fields = {
    firstName: "",
    lastName: "",
    region: "",
    contact: "",
  };

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);
      fields[field] = value;
    },
  };
};
