import React from 'react';

const BTL = () => {
    return (
        <section className="w-full md:h-[70vh] flex flex-col md:flex-row overflow-hidden">
            
            <img 
                src="/BTL.png" 
                alt="Models wearing Beyond The Label street wear apparel" 
                className="w-full h-1/2 hidden md:block md:h-full md:w-5/10 object-cover" 
            />

            <img 
                src="/BTL.svg" 
                alt="Models wearing  Beyond The Label street wear apparel" 
                className="w-full h-1/2 md:hidden block object-cover" 
            />

            
            <div className='w-full flex flex-col justify-center gap-4 md:gap-6 p-6 md:p-12'>
                <h1 className='text-white text-4xl md:text-5xl font-bold inter-base'>
                    BEYOND THE LABEL
                </h1>
                <p className="inter-base text-neutral-200 text-sm md:text-lg font-normal leading-normal">
                    Gangster was born from the streets, for the streets. We reject the ordinary and defy expectations. This is more than just clothing—it's a uniform for the unapologetic, a statement for the rule-breakers, and a tribute to the relentless spirit of the individual.
                </p>
                <button className='w-full md:w-full md:self-start px-6 py-3 border border-white text-white rounded-lg 
                                 text-sm md:text-base font-medium 
                                 transition-colors duration-300 ease-in-out 
                                 hover:bg-white hover:text-black hover:scale-105 cursor-pointer'>
                    Explore More
                </button>
            </div>
        </section>
    );
}

export default BTL;