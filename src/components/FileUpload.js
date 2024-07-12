import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const FileUpload = ({ file, setFile, setViewTextInput, setText, text, viewTextInput }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setViewTextInput(false);
    };

    const goToPrevPage = () => setPageNumber(prevPage => Math.max(prevPage - 1, 1));
    const goToNextPage = () => setPageNumber(prevPage => Math.min(prevPage + 1, numPages));

    return (
        <div className="md:w-3/5 bg-blue-100 p-4 rounded-lg">
            <div className="flex justify-end gap-3 mb-4">
                <input type="file" accept=".pdf,.docx" className="hidden" id="fileInput" onChange={handleFileChange} />
                <label htmlFor="fileInput" className="bg-green-500 text-white px-2 py-1 rounded cursor-pointer">Load File</label>
                <button className="bg-[#ED7D31] text-white px-2 py-1 rounded" onClick={() => setViewTextInput(true)}>Text</button>
            </div>
            <div className="bg-white bg-opacity-90 group hover:bg-opacity-100 p-2 rounded-lg flex justify-center h-[85%] items-center shadow-xl">
                {viewTextInput ? (
                    <textarea
                        className='w-full h-full bg-white text-black text-3xl text-start outline-none placeholder:text-black py-3'
                        placeholder='Enter your text here...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                ) : (
                    <div className='relative'>
                        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} width={280} />
                        </Document>
                        <div className='flex justify-center'>
                            <div className="md:w-2/5 flex justify-between mt-2 bg-transparent p-2 rounded-xl">
                                <button onClick={goToPrevPage} className="bg-[#D1D5DB] text-black px-2 py-1 rounded">Previous</button>
                                <p> {pageNumber} / {numPages}</p>
                                <button onClick={goToNextPage} className="bg-[#D1D5DB] text-black px-2 py-1 rounded">Next</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <button className="bg-[#ED7D31] text-white mt-4 px-4 py-2 rounded">Submit</button>
        </div>
    );
};

export default FileUpload;
