import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setCombinedState,
    setSelectedDataArea,
    addTag,
    deleteTag,
    addInstruction,
    deleteInstruction,
} from '../store/actions';
import FileUpload from '../components/FileUpload';
import Instructions from '../components/Instructions';
import DataAreaList from '../components/DataAreaList';
import ChatFrame from '../components/ChatFrame';

const Homepage = () => {
    const combinedState = useSelector(state => state);
    const dispatch = useDispatch();

    const handleSetSelectedDataArea = (dataArea) => {
        dispatch(setSelectedDataArea(dataArea));
    };

    const handleAddData = (data) => {
        dispatch(setCombinedState({
            dataAreas: [...combinedState.dataAreas, { ...data, id: combinedState.dataAreas.length + 1, instructions: [], tags: [], file: null, text: '' }],
        }));
    };

    const handleAddTag = (id, newTag) => {
        dispatch(addTag(id, newTag));
    };

    const handleDeleteTag = (id, index) => {
        dispatch(deleteTag(id, index));
    };

    const handleAddInstruction = (id, newInstruction) => {
        dispatch(addInstruction(id, newInstruction));
    };

    const handleDeleteInstruction = (id, index) => {
        dispatch(deleteInstruction(id, index));
    };

    const handleSetDataAreas = (dataAreas) => {
        dispatch(setCombinedState({ dataAreas }));
    };

    return (
        <div className="gap-3 flex flex-row p-4 w-screen h-screen text-gray-700">
            <div className='flex flex-col md:w-9/12 gap-3'>
                <div className='flex justify-end'>
                    <button className="bg-[#70AD47] text-white px-3 py-2 rounded-lg">Refresh the Bot</button>
                </div>
                <div className="flex md:flex-1 flex-col md:flex-row space-x-4">
                    {/* File/Text Input */}
                    <FileUpload
                        dataArea={combinedState.dataAreas}
                        setDataAreas={handleSetDataAreas}
                        selectedDataArea={combinedState.selectedDataArea}
                    />

                    {/* Instruction/Tags Column */}
                    <Instructions
                        setInstructions={(instructions) => dispatch(setCombinedState({
                            selectedDataArea: {
                                ...combinedState.selectedDataArea,
                                instructions,
                            },
                        }))}
                        setTags={(tags) => dispatch(setCombinedState({
                            selectedDataArea: {
                                ...combinedState.selectedDataArea,
                                tags,
                            },
                        }))}
                        instructions={combinedState.selectedDataArea ? combinedState.selectedDataArea.instructions : []}
                        tags={combinedState.selectedDataArea ? combinedState.selectedDataArea.tags : []}
                        handleAddInstruction={(instruction) => {
                            dispatch(setCombinedState({
                                selectedDataArea: {
                                    ...combinedState.selectedDataArea,
                                    instructions: [...combinedState.selectedDataArea.instructions, instruction],
                                },
                            }));
                            handleAddInstruction(combinedState.selectedDataArea.id, instruction);
                        }}
                        handleDeleteInstruction={(index) => {
                            const newInstructions = combinedState.selectedDataArea.instructions.filter((_, i) => i !== index);
                            dispatch(setCombinedState({
                                selectedDataArea: {
                                    ...combinedState.selectedDataArea,
                                    instructions: newInstructions,
                                },
                            }));
                            handleDeleteInstruction(combinedState.selectedDataArea.id, index);
                        }}
                        handleAddTag={handleAddTag}
                        handleDeleteTag={handleDeleteTag}
                        selectedDataArea={combinedState?.selectedDataArea}
                    />

                    {/* Data Area */}
                    <DataAreaList
                        dataArea={combinedState.dataAreas}
                        fullData={combinedState}
                        handleAddData={handleAddData}
                        setDataArea={handleSetDataAreas}
                        setSelectedDataArea={handleSetSelectedDataArea}
                    />
                </div>
            </div>
            <div className='flex md:w-3/12 gap-3'>
                {/* Chat View */}
                <ChatFrame />
            </div>
        </div>
    );
};

export default Homepage;
