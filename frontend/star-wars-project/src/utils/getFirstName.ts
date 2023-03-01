type getFirstNameType = (name: string) => string;

export const getFirstName: getFirstNameType = (name) => {
  const [firstName, secondName] = name.split(" ");

  return firstName;
};
