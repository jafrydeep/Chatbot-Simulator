import React from 'react';

const ChatFrame = () => {
    return (
        <div className="bg-white-100 border-slate-500 border-2 p-4 rounded-lg w-full h-full">
            <div className="bg-white rounded-lg h-full">
                <p className='font-semibold'>Chat Frame</p>

                <iframe
                    class="iframe"
                    src="https://chatbot-ui-zeta-drab-53.vercel.app/"
                    height={'100%'}
                    width={'100%'}></iframe>
            </div>
        </div>
    );
};

export default ChatFrame;
