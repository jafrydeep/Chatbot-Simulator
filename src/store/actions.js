export const SET_COMBINED_STATE = 'SET_COMBINED_STATE';
export const SET_SELECTED_DATA_AREA = 'SET_SELECTED_DATA_AREA';
export const ADD_TAG = 'ADD_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';
export const DELETE_INSTRUCTION = 'DELETE_INSTRUCTION';
export const UPDATE_FILE = 'UPDATE_FILE';
export const UPDATE_TEXT = 'UPDATE_TEXT';

export const setCombinedState = (combinedState) => ({
    type: SET_COMBINED_STATE,
    payload: combinedState,
});

export const setSelectedDataArea = (dataArea) => ({
    type: SET_SELECTED_DATA_AREA,
    payload: dataArea,
});

export const addTag = (id, newTag) => ({
    type: ADD_TAG,
    payload: { id, newTag },
});

export const deleteTag = (id, index) => ({
    type: DELETE_TAG,
    payload: { id, index },
});

export const addInstruction = (id, newInstruction) => ({
    type: ADD_INSTRUCTION,
    payload: { id, newInstruction },
});

export const deleteInstruction = (id, index) => ({
    type: DELETE_INSTRUCTION,
    payload: { id, index },
});

export const updateFile = (id, file) => {
    console.log(file)
    return ({
        type: UPDATE_FILE,
        payload: { id, file },
    });
}

export const updateText = (id, text) => ({
    type: UPDATE_TEXT,
    payload: { id, text },
});
export const toggleViewTextInput = (id, viewTextInput) => ({
    type: 'TOGGLE_VIEW_TEXT_INPUT',
    payload: { id, viewTextInput }
});