import {
  GET_CATALOGO,
  GET_MULHERES_CATALOGO,
  GET_VOLUNTARIAS,
  GET_AJUDA_ESPECIFICO
} from "./types";
import axios from "axios";

export const getCatalogo = cpf => async dispatch => {
  const catalogo = await axios.get(`/api/catalogo/${cpf}`);

  dispatch({
    type: GET_CATALOGO,
    payload: catalogo.data
  });
};

export const getMulheresCatalogo = id => async dispatch => {
  const catalogo = await axios.get(`/api/catalogo/mulheres/${id}`);

  dispatch({
    type: GET_MULHERES_CATALOGO,
    payload: catalogo.data
  });
};

export const getVoluntarias = () => async dispatch => {
  const voluntarias = await axios.get(`/api/catalogo`);

  dispatch({
    type: GET_VOLUNTARIAS,
    payload: voluntarias.data
  });
};

export const getVoluntariasEspecifico = id => async dispatch => {
  dispatch({
    type: GET_AJUDA_ESPECIFICO,
    payload: id
  });
};
