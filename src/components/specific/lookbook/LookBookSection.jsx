import { useState } from 'react';
import LBCardContainer from './LBCardContainer';
const LookBookSection = () => {
    const [lookBookItems] = useState([
        { id: 1, title: 'Urban Armor', tagline: 'Own the cold. Command the streets.', imageUrl: '/Urban_Armor.jpeg', btnText: 'Shop The Fit' },
        { id: 2, title: 'Midnight Code', tagline: 'Own the cold. Command the streets.', imageUrl: '/Midnight_Code.png', btnText: 'Own This Style' },
        { id: 3, title: 'Effortless Edge', tagline: 'Own the cold. Command the streets.', imageUrl: '/Effertless_Edge.jpeg', btnText: 'Deconstruct The Look' },
        { id: 4, title: 'Street VanGuard', tagline: 'Lead the charge. Set the new standard.', imageUrl: '/Street_Vanguard.png', btnText: 'Claim Your Style' },
    ]);

    return (
        <div className='md:px-8'>
            <div className=" w-full bg-black h-auto md:h-screen py-4 px-2">
                <h1 className="text-3xl text-white inter-base underline underline-offset-6 decoration-[#FF0000BA]">The LookBook</h1>
                <div className="w-full md:p-0 gap-2 md:gap-4 flex justify-center flex-wrap md:flex-nowrap h-auto md:h-full ">
                    {
                        lookBookItems.map((item, index) => (
                            <LBCardContainer key={item.id} index={index} details={{ ...item }} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LookBookSection;