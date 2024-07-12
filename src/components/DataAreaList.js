import React from 'react';

const DataAreaList = ({ dataArea, handleAddData }) => {
    return (
        <div className="md:w-1/5 bg-yellow-500 p-2 rounded-lg flex flex-col gap-3">
            <div>
                <button className="bg-orange-500 text-white mb-2 px-2 py-1 rounded" onClick={handleAddData}>New Data Area</button>
            </div>
            <div className="bg-[#FFC000] p-2 rounded-lg h-full">
                <p>Data Area List</p>
                {dataArea.map((data, index) => (
                    <div key={index} className="bg-white p-2 rounded-lg mb-2">
                        <p>{data.subject}</p>
                        <p>{data.sub}</p>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataAreaList;
