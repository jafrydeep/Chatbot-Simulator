import React from 'react';

const Tags = ({ tags, handleAddTag }) => {
    return (
        <div className="bg-white p-2 rounded-lg h-[48%]">
            <p className='font-semibold mb-2'>Tags Area</p>
            {tags.map((tag, index) => (
                <span key={index} className="bg-blue-300 text-black px-2 py-1 rounded m-1 inline-block">{tag}</span>
            ))}
            <button className="bg-orange-500 text-white mt-2 px-2 py-1 rounded" onClick={handleAddTag}>Add Tag</button>
        </div>
    );
};

export default Tags;
