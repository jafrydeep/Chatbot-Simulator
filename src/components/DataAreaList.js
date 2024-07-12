import React from 'react';

const DataAreaList = ({ dataArea, handleAddData }) => {
    return (
        <div className="md:w-1/5 bg-blue-100 p-4 rounded-lg flex flex-col gap-3">
            <div className="text-end">
                <button className="bg-orange-500 hover:bg-orange-600 text-white mb-2 px-4 py-2 rounded shadow" onClick={handleAddData}>
                    New Data Area
                </button>
            </div>
                <p className="font-semibold text-gray-800">Data Area List</p>
            <div className="rounded-lg h-fit overflow-y-auto max-h-[800px]">
                {dataArea.map((data, index) => (
                    <div key={index} className="bg-blue-200 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold mb-1 text-gray-800">{data.subject}</h3>
                        <p className="text-md mb-1 text-gray-600">{data.sub}</p>
                        <p className="text-sm text-gray-500">{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataAreaList;
