import React from 'react';
import Tags from './Tags';

const Instructions = ({ instructions, handleAddInstruction, tags, handleAddTag }) => {
    return (
        <div className="md:w-1/5 bg-yellow-500 p-2 rounded-lg gap-3 flex flex-col">
            <div>
                <button className="bg-orange-500 text-white mb-2 px-2 py-1 rounded" onClick={handleAddInstruction}>New Instruction</button>
            </div>
            <div className="bg-[#FFC000] p-2 rounded-lg h-[50%]">
                <p>Instructions Area</p>
                {instructions.map((instruction, index) => (
                    <p key={index}>{instruction}</p>
                ))}
            </div>

            <Tags tags={tags} handleAddTag={handleAddTag} />

        </div>
    );
};

export default Instructions;
