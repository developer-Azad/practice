// For generating static metadata for a page
export const metaDatas = (
  title: string = 'Buxx Tanda',
  //  The description of the company can be added here
  desc: string = 'Buxx Tanda'
) => {
  return {
    title,
    description: desc,
  };
};
