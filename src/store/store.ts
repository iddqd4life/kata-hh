import { combineReducers, configureStore } from '@reduxjs/toolkit';
import vacancies from '../slices/vacanciesSlice.ts';

const rootReducer = combineReducers({ vacancies });

const setupStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore();
