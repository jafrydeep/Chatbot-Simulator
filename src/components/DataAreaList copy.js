import React, { useState } from 'react';
import Modal from 'react-modal';

const DataAreaList = ({ dataArea, handleAddData, setDataArea }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        subject: '',
        sub: '',
        description: ''
    });

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddData(formData);
        setFormData({ subject: '', sub: '', description: '' });
        closeModal();
    };

    const handleDeleteData = (index) => {
        const updatedData = [...dataArea];
        updatedData.splice(index, 1);
        setDataArea(updatedData)
    };

    return (
        <div className="md:w-1/5 bg-white-100 border-slate-500 border-2 p-4 rounded-lg flex flex-col gap-3">
            <div className="text-end">
                <button
                    className="bg-orange-500 hover:bg-orange-600 text-white mb-2 px-4 py-1 rounded shadow"
                    onClick={openModal}
                >
                    Add New Data Area
                </button>
            </div>
            <p className="font-semibold text-gray-800">Data Area List</p>
            <div className="rounded-lg h-fit overflow-y-auto max-h-[800px]">
                {dataArea.map((data, index) => (
                    <div key={index} className="bg-blue-200 p-4 rounded-lg mb-4 relative">
                        <h3 className="text-lg font-semibold mb-1 text-gray-800">{data.subject}</h3>
                        <p className="text-md mb-1 text-gray-600">{data.sub}</p>
                        <p className="text-sm text-gray-500">{data.description}</p>
                        <button
                            onClick={() => handleDeleteData(index)}
                            className="absolute top-2 right-2 text-slate-500 px-2 py-1 rounded"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
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

            {/* Create Form */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="New Data Area Modal"
                className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto my-20"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <h2 className="text-xl font-semibold mb-4">New Data Area</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sub">
                            Sub
                        </label>
                        <input
                            type="text"
                            id="sub"
                            name="sub"
                            value={formData.sub}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default DataAreaList;
