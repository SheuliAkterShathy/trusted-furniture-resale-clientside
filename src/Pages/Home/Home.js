import React from 'react';

const Home = () => {
    return (
        <section className="dark:dark:dark:bg-gray-800 dark:dark:dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="font-semibold leading-none sm:text-5xl"><span>Welcome 
                    To</span><br/>
                    <strong className=''>Trusted Furniture</strong>
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                    <br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:dark:dark:bg-violet-400 dark:dark:dark:text-gray-900 border-2 border-amber-500">Bye Now</a>
                   
                </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src="https://img.freepik.com/free-psd/contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg?size=626&ext=jpg&ga=GA1.2.258402809.1666072521&semt=sph" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
    </section>
    );
};

export default Home;