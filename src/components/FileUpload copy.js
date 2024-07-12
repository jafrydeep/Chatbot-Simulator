import React, { useState, useEffect } from 'react';

const FileUpload = ({ file, setFile, setViewTextInput, setText, text, viewTextInput }) => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setViewTextInput(false);
    };

    console.log(file)
    return (
        <div className="md:w-3/5 bg-[#bfdbfe] p-2 rounded-lg">
            <div className="flex justify-end gap-3 mb-4">
                <input type="file" accept=".pdf,.docx" className="hidden" id="fileInput" onChange={handleFileChange} />
                <label htmlFor="fileInput" className="bg-green-500 text-white px-2 py-1 rounded cursor-pointer">Load File</label>
                <button className="bg-[#ED7D31] text-white px-2 py-1 rounded" onClick={() => setViewTextInput(true)}>Text</button>
            </div>
            <div className="bg-white p-2 rounded-lg flex justify-center h-[85%] items-center border-2 border-black">
                {viewTextInput ? (
                    <textarea
                        className='w-full h-full bg-white text-white text-3xl text-start outline-none placeholder:text-white py-3'
                        placeholder='Enter your text here...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                ) : (
                    <div>
                       
                    </div>
                )}
            </div>
            <button className="bg-[#ED7D31] text-white mt-4 px-4 py-2 rounded">Submit</button>
        </div>
    );
};

export default FileUpload;
