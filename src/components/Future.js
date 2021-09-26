import React from "react";

import futureImgMobile from '../img/illustration-editor-mobile.svg'
import futureImgDesktop from '../img/illustration-editor-desktop.svg'

const Future = () => {
    return ( 
        <div className='max-w-screen-xl mx-auto mt-20'>
            <h2 className='text-regalBlue text-subHeaderMobile sm:subHeaderDesktop font-normal mx-auto text-center'>Designed for the future</h2>
            <div className='future-content flex flex-col-reverse sm:flex-row items-center justify-center'>
                <div className='future-text flex flex-col px-6 sm:w-5/12'>
                    <div className='future-text-block text-center sm:text-left mt-6'>
                        <h3 className='text-regalBlue text-h3Header mb-4'>Introducing an extensible editor</h3>
                        <p className='text-fiord leading-7'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                    </div>
                    <div className='future-text-block text-center sm:text-left mt-6'>
                        <h3 className='text-regalBlue text-h3Header mb-4'>Robust content management</h3>
                        <p className='text-fiord leading-7'>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                    </div>
                </div>
                <div className='future-img sm:w-5/12'>
                <img src={futureImgMobile} className='block sm:hidden mt-6' alt="Desktop with elements inside"  />
                <img src={futureImgDesktop} className='hidden sm:block mt-6' alt="Desktop with elements inside"  /> 
                </div>
            </div>
        </div>
    );
}
 
export default Future;