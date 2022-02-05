import axios from "axios";

export default function getTheWord(props) {
  let data;
  axios
    .get("https://random-word-api.herokuapp.com/word?number=100")
    .then((response) => {
      console.log(response.data);
      data = response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
}
