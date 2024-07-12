import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Tags from './Tags';
import DataAreaNotSelect from './DataAreaNotSelect';

const Instructions = ({ instructions, handleAddInstruction, tags, handleAddTag,
    setInstructions, handleDeleteTag, setTags, selectedDataArea }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [instructionType, setInstructionType] = useState('');
    const [instructionValue, setInstructionValue] = useState('');

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'type') {
            setInstructionType(value);
        } else if (name === 'value') {
            setInstructionValue(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInstructionObject = {
            type: instructionType,
            value: instructionValue
        };
        handleAddInstruction(newInstructionObject);
        setInstructionType('');
        setInstructionValue('');
        closeModal();
    };

    const handleDeleteInstruction = (index) => {
        const updatedInstructions = [...instructions];
        updatedInstructions.splice(index, 1);
        setInstructions(updatedInstructions)
    };

    useEffect(() => {

    },[selectedDataArea,])
    return (
        <div className="md:w-1/5 bg-white-100 border-slate-500 border-2 p-4 rounded-lg gap-3 flex flex-col">
            {!selectedDataArea ? <DataAreaNotSelect /> :
                <><div className='text-end'>
                    <button
                        className="bg-orange-500 text-white mb-2 px-2 py-1 rounded"
                        onClick={openModal}
                    >
                        Add New Instruction
                    </button>
                </div><div className="rounded-lg h-[48%] overflow-y-auto">
                        <p className="font-semibold mb-2">Instructions Area</p>
                        {instructions?.map((instruction, index) => (
                            <div key={index} className="mb-1 text-gray-700 bg-blue-200 p-2 rounded-lg relative">
                                <p><span className="font-semibold">Type:</span> {instruction.type}</p>
                                <p><span className="font-semibold">Value:</span> {instruction.value}</p>
                                <button
                                    onClick={() => handleDeleteInstruction(index)}
                                    className="absolute top-[5px] right-[5px] text-slate-600 rounded-full"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    <Tags tags={tags} handleAddTag={handleAddTag} setTags={setTags} selectedDataArea={selectedDataArea} handleDeleteTag={handleDeleteTag} />
                </>
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="New Instruction Modal"
                className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto my-20"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <h2 className="text-xl font-semibold mb-4">New Instruction</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                            Instruction Type
                        </label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            value={instructionType}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="value">
                            Instruction Value
                        </label>
                        <input
                            type="text"
                            id="value"
                            name="value"
                            value={instructionValue}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Instructions;
