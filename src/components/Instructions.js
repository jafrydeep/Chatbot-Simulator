import React from 'react';
import Tags from './Tags';

const Instructions = ({ instructions, handleAddInstruction, tags, handleAddTag }) => {
    return (
        <div className="md:w-1/5 bg-[#bfdbfe] p-4 rounded-lg gap-3 flex flex-col">
            <div className='text-end'>
                <button className="bg-orange-500 text-white mb-2 px-2 py-1 rounded" onClick={handleAddInstruction}>New Instruction</button>
            </div>
            <div className="bg-white p-4 rounded-lg h-[48%] shadow overflow-y-auto">
                <p className="font-semibold mb-2">Instructions Area</p>
                {instructions.map((instruction, index) => (
                    <p key={index} className="mb-1 text-gray-700 bg-blue-200 p-2 rounded-lg">{instruction}</p>
                ))}
            </div>

            <Tags tags={tags} handleAddTag={handleAddTag} />

        </div>
    );
};

export default Instructions;
