import { GET_POSTS, DELETE_POST, ADD_POST } from "./types";
import axios from "axios";

export const getPosts = () => async dispatch => {
  const posts = await axios.get("/api/post/");
  dispatch({
    type: GET_POSTS,
    payload: posts.data
  });
};

export const addPost = post => async dispatch => {
  const { dta_post, mulher_CPF, descricao, anonimo } = post;
  await axios.post("/api/post/add", {
    dta_post,
    mulher_CPF,
    descricao,
    anonimo
  });

  dispatch({
    type: ADD_POST,
    payload: { ...post, nome: post.nome }
  });
};

export const deletePost = post => async dispatch => {
  const { dta_post, mulher_CPF } = post;

  await axios.post("/api/post/delete", {
    dta_post,
    mulher_CPF
  });

  dispatch({
    type: DELETE_POST,
    payload: { dta_post, mulher_CPF }
  });
};
