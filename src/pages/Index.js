import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import Instructions from '../components/Instructions';
import DataAreaList from '../components/DataAreaList';
import ChatFrame from '../components/ChatFrame';

const Homepage = () => {
    const [combinedState, setCombinedState] = useState({
        dataAreas: [
            {
                id: 1,
                subject: 'Subject 1',
                sub: 'Sub 1',
                description: 'Description 1',
                instructions: [{ type: 'test', value: 'test sample data' }],
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
    });

    const setSelectedDataArea = (dataArea) => {
        setCombinedState((prevState) => ({
            ...prevState,
            selectedDataArea: dataArea,
        }));
    };

    const handleAddData = (data) => {
        setCombinedState((prevState) => ({
            ...prevState,
            dataAreas: [...prevState.dataAreas, { ...data, id: prevState.dataAreas.length + 1, instructions: [], tags: [], file: null, text: '' }],
        }));
    };

    const setDataAreas = (dataAreas) => {
        setCombinedState((prevState) => ({
            ...prevState,
            dataAreas,
        }));
    };

    return (
        <div className="gap-3 flex flex-row p-4 w-screen h-screen text-gray-700">
            <div className='flex flex-col md:w-9/12 gap-3'>
                <div className='flex justify-end'>
                    <button className="bg-[#70AD47] text-white px-3 py-2 rounded-lg">Refresh the Bot</button>
                </div>
                <div className="flex md:flex-1 flex-col md:flex-row space-x-4">
                    <FileUpload
                        dataArea={combinedState.dataAreas}
                        setDataAreas={setDataAreas}
                        selectedDataArea={combinedState.selectedDataArea}
                    />
                    <Instructions
                        setInstructions={(instructions) => setCombinedState((prevState) => ({
                            ...prevState,
                            selectedDataArea: {
                                ...prevState.selectedDataArea,
                                instructions,
                            },
                        }))}
                        setTags={(tags) => setCombinedState((prevState) => ({
                            ...prevState,
                            selectedDataArea: {
                                ...prevState.selectedDataArea,
                                tags,
                            },
                        }))}
                        instructions={combinedState.selectedDataArea ? combinedState.selectedDataArea.instructions : []}
                        tags={combinedState.selectedDataArea ? combinedState.selectedDataArea.tags : []}
                        handleAddInstruction={(instruction) => setCombinedState((prevState) => ({
                            ...prevState,
                            selectedDataArea: {
                                ...prevState.selectedDataArea,
                                instructions: [...prevState.selectedDataArea.instructions, instruction],
                            },
                        }))}
                        handleDeleteInstruction={(index) => {
                            const newInstructions = combinedState.selectedDataArea.instructions.filter((_, i) => i !== index);
                            setCombinedState((prevState) => ({
                                ...prevState,
                                selectedDataArea: {
                                    ...prevState.selectedDataArea,
                                    instructions: newInstructions,
                                },
                            }));
                        }}
                    />
                     <DataAreaList
                    dataArea={combinedState.dataAreas}
                    fullData={combinedState}
                    handleAddData={handleAddData}
                    setDataArea={setDataAreas}
                    setSelectedDataArea={setSelectedDataArea}
                />
                </div>
            </div>
            <div className='flex md:w-3/12 gap-3'>
            <ChatFrame />

            </div>
        </div>
    );
};

export default Homepage;
