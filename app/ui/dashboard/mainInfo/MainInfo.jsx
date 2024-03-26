import Image from "next/image";
import styles from "./transactions.module.css";

const MainInfo = () => {
    return (
        <section className="bg-white pb-6">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto px-6 p-6 bg-white">
   
                <div className="mb-16 text-center">
                    <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Inicio</h4>
                    <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">Bienvenido a inco academy
    
                    </p>
                </div>
    
    
                <div className="flex flex-wrap my-12">
      
                    <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">Increase sales</div>
                        </div>
                        <p className="leading-loose text-gray-500">Consectetur pariatur irure exercitation sit amet id
                            consectetur consecteturmagna et Lorem labore qui velit.
                        </p>
                    </div>
    
    
    
                    <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">Enterprise-ready</div>
                        </div>
                        <p className="leading-loose text-gray-500">Labore duis pariatur est exercitation laboris cupidatat amet
                            cillum. Amet nisi ullamco.
                        </p>
                    </div>
    
    
    
                    <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">Unlimited growth</div>
                        </div>
                        <p className="leading-loose text-gray-500">Elit deserunt nisi esse duis cupidatat proident sit minim
                            mollit officia pariatur incididunt in tempor.
                        </p>
                    </div>
    
    
    
                    <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">Recommended by experts</div>
                        </div>
                        <p className="leading-loose text-gray-500">Velit sit tempor pariatur quis pariatur incididunt culpa
                            dolor voluptate officia incididunt velit dolore.
                        </p>
                    </div>
    
    
    
                    <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">Modern platform</div>
                        </div>
                        <p className="leading-loose text-gray-500">Laboris elit consectetur sint nisi eu mollit proident sit
                            magna velit adipisicing consequat amet reprehenderit.
                        </p>
                    </div>
    
    
    
                    <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">Integrations</div>
                        </div>
                        <p className="leading-loose text-gray-500">Nostrud excepteur incididunt proident sit nulla ipsum sunt
                            nostrud est esse adipisicing irure officia consectetur.
                        </p>
                    </div>
    
    
                
                </div>
            </div>
        </div>
    </section>
    );
};

export default MainInfo;