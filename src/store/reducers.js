import {
    SET_COMBINED_STATE,
    SET_SELECTED_DATA_AREA,
    ADD_TAG,
    DELETE_TAG,
    ADD_INSTRUCTION,
    DELETE_INSTRUCTION,
    UPDATE_FILE,
    UPDATE_TEXT,
} from './actions';

const initialState = {
    dataAreas: [
        {
            id: 1,
            subject: 'Subject 1',
            sub: 'Sub 1',
            description: 'Description 1',
            instructions: [{ type: 'test', name: 'test name', value: 'test sample data' }],
            tags: ['Tag1', 'Tag2'],
            file: null,
            text: '',
        },
        {
            id: 2,
            subject: 'Subject 2',
            sub: 'Sub 2',
            description: 'Description 2',
            instructions: [],
            tags: [],
            file: null,
            text: '',
        },
    ],
    selectedDataArea: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMBINED_STATE:
            return {
                ...state,
                ...action.payload,
            };
        case SET_SELECTED_DATA_AREA:
            return {
                ...state,
                selectedDataArea: action.payload,
            };
        case ADD_TAG:
            return {
                ...state,
                dataAreas: state.dataAreas.map(area =>
                    area.id === action.payload.id
                        ? { ...area, tags: [...area.tags, action.payload.newTag] }
                        : area
                ),
            };
        case DELETE_TAG:
            return {
                ...state,
                dataAreas: state.dataAreas.map(area => {
                    if (area.id === action.payload.id) {
                        const updatedTags = [...area.tags];
                        updatedTags.splice(action.payload.index, 1);
                        return { ...area, tags: updatedTags };
                    }
                    return area;
                }),
            };
        case ADD_INSTRUCTION:
            return {
                ...state,
                dataAreas: state.dataAreas.map(area =>
                    area.id === action.payload.id
                        ? { ...area, instructions: [...area.instructions, action.payload.newInstruction] }
                        : area
                ),
            };
        case DELETE_INSTRUCTION:
            return {
                ...state,
                dataAreas: state.dataAreas.map(area => {
                    if (area.id === action.payload.id) {
                        const updatedInstructions = [...area.instructions];
                        updatedInstructions.splice(action.payload.index, 1);
                        return { ...area, instructions: updatedInstructions };
                    }
                    return area;
                }),
            };
        case UPDATE_FILE: {
            const { id, file } = action.payload;
            const newDataAreas = state.dataAreas.map(area =>
                area.id === id ? { ...area, file, text: '' } : area
            );
            const selectedDataArea = newDataAreas.find(area => area.id === id);
            return {
                ...state,
                dataAreas: newDataAreas,
                selectedDataArea,
            };
        }

        case UPDATE_TEXT: {
            const { id, text } = action.payload;
            const newDataAreas = state.dataAreas.map(area =>
                area.id === id ? { ...area, text, file: null } : area
            );
            const selectedDataArea = newDataAreas.find(area => area.id === id);
            return {
                ...state,
                dataAreas: newDataAreas,
                selectedDataArea,
            };
        }

        default:
            return state;
    }
};

export default rootReducer;
