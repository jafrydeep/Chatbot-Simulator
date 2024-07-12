import React, { useState } from 'react';
import Modal from 'react-modal';

const Tags = ({ selectedDataArea, handleAddTag, handleDeleteTag }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newTag, setNewTag] = useState('');

    if (!selectedDataArea) {
        return <div>Please select a data area</div>;
    }

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => {
        setModalIsOpen(false);
        setNewTag(''); // Reset the new tag input when closing modal
    };

    const handleChange = (e) => {
        setNewTag(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTag.trim() !== '') {
            handleAddTag(selectedDataArea.id, newTag.trim());
            setNewTag('');
            closeModal();
        }
    };

    return (
        <>
            <div className='text-end'>
                <button
                    className="bg-orange-500 text-white mt-2 px-2 py-1 rounded"
                    onClick={openModal}
                >
                    Add New Tag
                </button>
            </div>

            <p className='font-semibold mb-2'>Tags Area</p>
            <div className="flex flex-wrap">
                {selectedDataArea.tags.map((tag, index) => (
                    <div key={index} className="relative inline-flex items-center bg-blue-200 text-black px-2 py-1 rounded m-1">
                        <span className="flex-1">{tag}</span>
                        <button
                            onClick={() => handleDeleteTag(selectedDataArea.id, index)}
                            className="bg-transparent rounded-full text-slate-600 px-2 py-1 ml-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 inline"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="New Tag Modal"
                className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto my-20"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <h2 className="text-xl font-semibold mb-4">New Tag</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
                            Tag Name
                        </label>
                        <input
                            type="text"
                            id="tag"
                            value={newTag}
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
        </>
    );
};

export default Tags;
