import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import Instructions from '../components/Instructions';
import DataAreaList from '../components/DataAreaList';
import ChatFrame from '../components/ChatFrame';

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
                    <FileUpload
                        file={file}
                        setFile={setFile}
                        setViewTextInput={setViewTextInput}
                        text={text}
                        setText={setText}
                        viewTextInput={viewTextInput}
                    />
                    <Instructions instructions={instructions} handleAddInstruction={handleAddInstruction} tags={tags} handleAddTag={handleAddTag} />
                    <DataAreaList dataArea={dataArea} handleAddData={handleAddData} />
                </div>
            </div>
            <div className='md:flex-0 md:w-3/12'>
                <ChatFrame />
            </div>
        </div>
    );
};

export default Homepage;
