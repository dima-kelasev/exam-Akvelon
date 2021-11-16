function getRandomFloat(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const randomazer = getRandomFloat(1, 100);

const URL = `https://jsonplaceholder.typicode.com/posts/${randomazer}`;

export const loadData = () => async (dispatch: any) => {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    if (result) {
      dispatch({ type: "ADD_POSTS", data: result });
    }
  } catch (e) {
    console.error(e);
  }
};
