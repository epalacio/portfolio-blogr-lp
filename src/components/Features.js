import React from "react";

import featuresImgMobile from '../img/illustration-laptop-mobile.svg'
import featuresImgDesktop from '../img/illustration-laptop-desktop.svg'

const Features = () => {
    return ( 
        <section className='max-w-screen-xl mx-auto mt-60'>
            <div className='future-content flex flex-col sm:flex-row items-center justify-center'>
                <div className='future-img sm:w-5/12'>
                    <img src={featuresImgMobile} className='block sm:hidden mt-6' alt="Desktop with elements inside"  />
                    <img src={featuresImgDesktop} className='hidden sm:block mt-6' alt="Desktop with elements inside"  /> 
                </div>
                <div className='future-text flex flex-col px-6 sm:w-5/12'>
                    <div className='future-text-block text-center sm:text-left mt-6'>
                        <h3 className='text-regalBlue text-h3Header mb-4'>Free, open, simple</h3>
                        <p className='text-fiord leading-7'>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                    </div>
                    <div className='future-text-block text-center sm:text-left mt-6'>
                        <h3 className='text-regalBlue text-h3Header mb-4'>Powerful tooling</h3>
                        <p className='text-fiord leading-7'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Features;