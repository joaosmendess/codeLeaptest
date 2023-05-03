import { Dispatch } from "redux";
import axios from "axios";
import { IJob } from "../types";
import { combineReducers } from "redux";

// Defina os tipos para as ações do reducer
export enum JobsActionTypes {
  FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST",
  FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS",
  FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE",
}

// Defina o tipo de uma ação
export interface JobsAction {
  type: JobsActionTypes;
  payload?: IJob[];
  error?: string;
}

// Defina o tipo do estado inicial
export interface JobsState {
  jobs: IJob[];
  loading: boolean;
  error: string | null;
}

// Defina o estado inicial
const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: null,
};

// Defina as funções do reducer
export const jobsReducer = (
  state: JobsState = initialState,
  action: JobsAction
): JobsState => {
  switch (action.type) {
    case JobsActionTypes.FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case JobsActionTypes.FETCH_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload || [],
      };
    case JobsActionTypes.FETCH_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error || "Unknown error",
      };
    default:
      return state;
  }
};

// Defina uma função para buscar os dados da API
export const fetchJobs = (limit: number, offset: number) => {
  return async (dispatch: Dispatch<JobsAction>) => {
    dispatch({
      type: JobsActionTypes.FETCH_JOBS_REQUEST,
    });
    try {
      const response = await axios.get(
        `https://dev.codeleap.co.uk/careers/?limit=${limit}&offset=${offset}`
      );
      dispatch({
        type: JobsActionTypes.FETCH_JOBS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: JobsActionTypes.FETCH_JOBS_FAILURE,
        error:"",
      });
    }
  };
};
