import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { updateFile, updateText } from '../store/actions';
import DataAreaNotSelect from './DataAreaNotSelect';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const FileUpload = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [viewTextInput, setViewTextInput] = useState(false);

    const selectedDataArea = useSelector((state) => state.selectedDataArea);
    const dispatch = useDispatch();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        dispatch(updateFile(selectedDataArea.id, file));
    };

    const goToPrevPage = () => setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
    const goToNextPage = () => setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));

    const handleTextChange = (event) => {
        const newText = event.target.value;
        dispatch(updateText(selectedDataArea.id, newText));
    };

    useEffect(() => {
        if (selectedDataArea?.file && !selectedDataArea?.text) {
            setViewTextInput(false);
        } else {
            setViewTextInput(true);
        }
    }, [selectedDataArea?.file, selectedDataArea?.text]);

    const handleTextButtonClick = () => {
        dispatch(updateText(selectedDataArea.id, 'Enter Text'));
        setViewTextInput(true);
    };
    
    return (
        !selectedDataArea ?
            <div className="md:w-3/5 bg-white-100 p-4 rounded-lg">
                <DataAreaNotSelect />
            </div> :
            <div className="md:w-3/5 bg-white-100 p-4 rounded-lg">
                <div className="flex justify-end gap-3 mb-4">
                    <input type="file" accept=".pdf,.docx" className="hidden" id="fileInput" onChange={handleFileChange} />
                    <label htmlFor="fileInput" className="bg-green-500 text-white px-2 py-1 rounded cursor-pointer">Load File</label>
                    <button className="bg-[#ED7D31] text-white px-2 py-1 rounded" onClick={handleTextButtonClick}>Text</button>
                </div>
                <div className="bg-white-100 border-slate-500 border-2 bg-opacity-90 group hover:bg-opacity-100 p-2 rounded-lg flex justify-center h-[85%] items-center ">
                    {(selectedDataArea?.file) ? (
                        <div className='relative shadow-xl'>
                            <Document file={selectedDataArea.file} onLoadSuccess={onDocumentLoadSuccess}>
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
                    ) : (
                        <textarea
                            className='w-full h-full p-3 text-black text-3xl text-start outline-none placeholder:text-black py-3'
                            placeholder='Enter your text here...'
                            value={selectedDataArea?.text}
                            onChange={handleTextChange}
                        />
                    )}
                </div>
                <button className="bg-[#ED7D31] text-white mt-4 px-4 py-2 rounded" disabled={!viewTextInput && selectedDataArea?.file}>Submit</button>
            </div>
    );
};

export default FileUpload;
