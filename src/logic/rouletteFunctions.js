export const randomizeName = names => {
  const randomNb = Math.floor(Math.random() * names.length);

  return names[randomNb].name;
};
