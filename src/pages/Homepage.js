import React, { useState } from 'react';

const Homepage = () => {
    const [viewTextInput, setViewTextInput] = useState(true);
    const [file, setFile] = useState(null);
    const [text, setText] = useState('');
    const [instructions, setInstructions] = useState(['Dummy instruction 1', 'Dummy instruction 2']);
    const [tags, setTags] = useState(['Tag1', 'Tag2']);
    const [dataArea, setDataArea] = useState([
        { subject: 'Subject 1', sub: 'Sub 1', description: 'Description 1' },
        { subject: 'Subject 2', sub: 'Sub 2', description: 'Description 2' },
    ]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setViewTextInput(false);
    };

    const handleAddInstruction = () => {
        setInstructions([...instructions, `Dummy instruction ${instructions.length + 1}`]);
    };

    const handleAddTag = () => {
        setTags([...tags, `Tag${tags.length + 1}`]);
    };

    const handleAddData = () => {
        setDataArea([...dataArea, { subject: `Subject ${dataArea.length + 1}`, sub: `Sub ${dataArea.length + 1}`, description: `Description ${dataArea.length + 1}` }]);
    };

    return (
        <div className="h-screen flex flex-col md:flex-row gap-3 bg-[#4472C4] p-4">
            <div className='flex flex-col md:w-9/12 gap-3'>
                <div className='flex justify-end'>
                    <button className="bg-[#70AD47] text-white px-3 py-2 rounded-lg">Refresh the Bot</button>
                </div>
                <div className="flex md:flex-1 flex-col md:flex-row space-x-4">
                    {/* Load File / Text Area */}
                    <div className="md:w-3/5 bg-[#bfdbfe] p-2 rounded-lg">
                        <div className="flex justify-end gap-3 mb-4">
                            <input type="file" accept=".pdf,.docx" className="hidden" id="fileInput" onChange={handleFileChange} />
                            <label htmlFor="fileInput" className="bg-green-500 text-white px-2 py-1 rounded cursor-pointer">Load File</label>
                            <button className="bg-[#ED7D31] text-white px-2 py-1 rounded" onClick={() => setViewTextInput(true)}>Text</button>
                        </div>
                        <div className="bg-white p-2 rounded-lg flex justify-center h-[85%] items-center border-2 border-black">
                            {viewTextInput ? (
                                <textarea
                                    className='w-full h-full bg-white text-white text-3xl text-center'
                                    placeholder='Enter your text here...'
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            ) : (
                                file && (
                                    <div className='text-white text-3xl text-center'>
                                        Preview of {file.name}
                                    </div>
                                )
                            )}
                        </div>
                        <button className="bg-[#ED7D31] text-white mt-4 px-4 py-2 rounded">Submit</button>
                    </div>

                    {/* Instructions Area */}
                    <div className="md:w-1/5 bg-[#bfdbfe] p-2 rounded-lg gap-3 flex flex-col">
                        <div>
                            <button className="bg-orange-500 text-white mb-2 px-2 py-1 rounded" onClick={handleAddInstruction}>New Instruction</button>
                        </div>
                        <div className="bg-white p-2 rounded-lg h-[50%]">
                            <p>Instructions Area</p>
                            {instructions.map((instruction, index) => (
                                <p key={index}>{instruction}</p>
                            ))}
                        </div>
                        <div className="bg-white p-2 rounded-lg h-[50%]">
                            <p>Tags Area</p>
                            {tags.map((tag, index) => (
                                <span key={index} className="bg-white text-black px-2 py-1 rounded m-1 inline-block">{tag}</span>
                            ))}
                            <button className="bg-orange-500 text-white mt-2 px-2 py-1 rounded" onClick={handleAddTag}>Add Tag</button>
                        </div>
                    </div>

                    {/* Data Area List */}
                    <div className="md:w-1/5 bg-[#bfdbfe] p-2 rounded-lg flex flex-col gap-3">
                        <div>
                            <button className="bg-orange-500 text-white mb-2 px-2 py-1 rounded" onClick={handleAddData}>New Data Area</button>
                        </div>
                        <div className="bg-white p-2 rounded-lg h-full">
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
                </div>
            </div>

            <div className='md:flex-0 md:w-3/12'>
                <div className="bg-[#bfdbfe] p-2 rounded-lg w-full h-full">
                    <div className="bg-white p-2 rounded-lg h-full">
                        <p>Chat Frame</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
