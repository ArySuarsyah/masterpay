
import React from 'react';

export default function PinData() {


    const PinInput = () => {
        const input1 = React.useRef(null);
        const input2 = React.useRef(null);
        const input3 = React.useRef(null);
        const input4 = React.useRef(null);
        const input5 = React.useRef(null);
        const input6 = React.useRef(null);
        const pinInput = {
            1: input1,
            2: input2,
            3: input3,
            4: input4,
            5: input5,
            6: input6,
        }

        const currentInput = Number(e.target.name)
        pinInput[currentInput + 1].current.focus();
    }


    const changeInput = (e) => {
        if (e.target.value.length > 1) {
            e.target.value = e.target.value.slice(0, 1);
        }
    }


            
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn">open modal</label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex gap-3">
                                

                    {/* Pin Input */}


                    <div className='w-[60px] h-[60px] border-[1px] rounded-lg border-black text-center inline-block overflow-hidden'>
                        <input
                            type="number"
                            name="1"
                            className='w-full h-full text-center outline-none inputModalArrows'
                            onChange={changeInput}
                        />
                    </div>
                    <div className='w-[60px] h-[60px] border-[1px] rounded-lg border-black text-center inline-block overflow-hidden'>
                        <input
                            type="number"
                            name="2"
                            className='w-full h-full text-center outline-none inputModalArrows'
                            onChange={changeInput}
                        />
                    </div>
                    <div className='w-[60px] h-[60px] border-[1px] rounded-lg border-black text-center inline-block overflow-hidden'>
                        <input
                            type="number"
                            name="3"
                            className='w-full h-full text-center outline-none inputModalArrows'
                            onChange={changeInput}
                        />
                    </div>
                    <div className='w-[60px] h-[60px] border-[1px] rounded-lg border-black text-center inline-block overflow-hidden'>
                        <input
                            type="number"
                            name="4"
                            className='w-full h-full text-center outline-none inputModalArrows'
                            onChange={changeInput}
                        />
                    </div>
                    <div className='w-[60px] h-[60px] border-[1px] rounded-lg border-black text-center inline-block overflow-hidden'>
                        <input
                            type="number"
                            name="5"
                            className='w-full h-full text-center outline-none inputModalArrows'
                            onChange={changeInput}
                        />
                    </div>
                    <div className='w-[60px] h-[60px] border-[1px] rounded-lg border-black text-center inline-block overflow-hidden'>
                        <input
                            type="number"
                            name="6"
                            className='w-full h-full text-center outline-none inputModalArrows'
                            onChange={changeInput}
                        />
                    </div>


                    {/* End Pin Input */}
                                

                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
            