import { configureStore } from '@reduxjs/toolkit';
import objectNameReducer from './objectNameSlice.ts';

export const store = configureStore({
    reducer: {
        object_name: objectNameReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
