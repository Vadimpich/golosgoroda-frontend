import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ObjectNameState {
    objectName: string;
}

const initialState: ObjectNameState = {
    objectName: '',
};

const objectNameSlice = createSlice({
    name: 'objectName',
    initialState,
    reducers: {
        setObjectName: (state, action: PayloadAction<string>) => {
            state.objectName = action.payload;
        },
    },
});

export const { setObjectName } = objectNameSlice.actions;
export default objectNameSlice.reducer;
