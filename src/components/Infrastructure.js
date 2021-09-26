import React from "react";

import phones from '../img/illustration-phones.svg'
// import phonesBg from '../img/bg-pattern-circles.svg'

const Infrastructure = () => {
    return ( 
        <div  id='infrastructure' className='max-w-screen-xl mx-auto mt-60'>
            <div className='flex flex-col sm:flex-row items-center justify-center rounded-tr-blogrRad rounded-bl-blogrRad py-16 sm:max-h-80 bg-gradient-to-r from-portGore via-portGore to-valhalla'>
                <div className='sm:w-5/12'>
                    <img src={phones} className='-mt-52 sm:mt-0' alt="Mobiles with logo and content mockup"  />
                </div>
                <div className='flex flex-col px-6 sm:w-5/12'>
                    <div className='text-center sm:text-left'>
                        <h2 className='text-white text-subHeaderMobile sm:subHeaderDesktop font-normal mx-auto mb-4 text-center'>State of the Art Infrastructure</h2>
                        <p className='text-white leading-7'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Infrastructure;