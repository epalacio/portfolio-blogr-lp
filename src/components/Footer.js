import logo from '../img/logo.svg'

const Footer = () => {
    return ( 
        <section className='bg-blackRussian mt-60 text-white rounded-tr-blogrRad mx-auto flex flex-col sm:flex-row justify-around iterms-center py-10'>
            <img src={logo} className='w-logo h-full mt-10 mx-auto sm:mx-0 mb-20 sm:mb-0' alt="Blogr main logo"  />
            <div className='flex flex-col mt-10 text-center sm:text-left'>
                <a href='/' className='font-bold mb-6'>Product</a>
                <a href='/' className='text-footerLinks my-2'>Overview</a>
                <a href='/' className='text-footerLinks my-2'>Pricing</a>
                <a href='/' className='text-footerLinks my-2'>Marketplace</a>
                <a href='/' className='text-footerLinks my-2'>Features</a>
                <a href='/' className='text-footerLinks my-2'>Integration</a>
            </div>
            <div className='flex flex-col mt-10 text-center sm:text-left'>
                <a href='/' className='font-bold mb-6'>Company</a>
                <a href='/' className='text-footerLinks my-2'>About</a>
                <a href='/' className='text-footerLinks my-2'>Team</a>
                <a href='/' className='text-footerLinks my-2'>Blog</a>
                <a href='/' className='text-footerLinks my-2'>Careers</a>
            </div>
            <div className='flex flex-col mt-10 text-center sm:text-left'>
                <a href='/' className='font-bold mb-6'>Connect</a>
                <a href='/' className='text-footerLinks my-2'>Contact</a>
                <a href='/' className='text-footerLinks my-2'>Newsletter</a>
                <a href='/' className='text-footerLinks my-2'>LinkedIn</a>
            </div>
        </section>
     );
}
 
export default Footer;