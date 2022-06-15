import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import projectReducer from './features/projects';
import favouritesReducer from './features/favs';
import workingProjectReducer from './working_project';

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    workingProject: workingProjectReducer,
    favorites:  favouritesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
