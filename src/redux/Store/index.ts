import { createStore } from "redux";
import { jobsReducer } from "../Reducers";

export const store = createStore(jobsReducer);

export type RootState = ReturnType<typeof jobsReducer>;
