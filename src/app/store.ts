import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import projectReducer from './features/projects';
import favouritesReducer from './features/favs';
import workingProjectReducer from './features/working_project';
import workingSkillReducer from './features/working_skill';
import workingLanguageReducer from './features/working_language';

import skillsReducer from './features/skills';
import languagesReducer from './features/languages';


export const store = configureStore({
  reducer: {
    projects: projectReducer,
    workingProject: workingProjectReducer,
    workingSkill: workingSkillReducer,
    workingLanguage: workingLanguageReducer,
    favorites:  favouritesReducer,
    skills: skillsReducer,
    languages: languagesReducer,
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
