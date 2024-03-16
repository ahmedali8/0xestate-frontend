import React from 'react';
import Image from 'next/image';
import Image1 from "../images/img1.png"
import Image2 from "../images/img2.png"
import Image3 from "../images/img3.png"
const cardsData = [
    {
        imageSrc: Image1,
        title: 'Card Title 1',
        description: 'This is the description for card 1.',
    },
    {
        imageSrc: Image2,
        title: 'Card Title 2',
        description: 'This is the description for card 2.',
    },
    {
        imageSrc: Image3,
        title: 'Card Title 3',
        description: 'This is the description for card 3.',
    },
];

const PropertyList = () => {
    return (

        <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href="#">
                            <Image alt="Placeholder" width={720}
                                height={320} className="block h-auto w-full" src={Image1} />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href="#">
                                    Article Title
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <Image alt="Placeholder" width={50}
                                    height={50} className="block rounded-full" src={Image1} />
                                <p className="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span className="hidden">Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>

                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">

                    <article className="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <Image alt="Placeholder" className="block h-auto w-full" src={Image1} />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href="#">
                                    Article Title
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <Image alt="Placeholder" width={50}
                                    height={50} className="block rounded-full" src={Image1} />
                                <p className="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span className="hidden">Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>
                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">

                    <article className="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <Image alt="Placeholder" width={720}
                                height={320} className="block h-auto w-full" src={Image1} />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href="#">
                                    Article Title
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <Image alt="Placeholder" width={50}
                                    height={50} className="block rounded-full" src={Image1} />
                                <p className="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span className="hidden">Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>

                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">

                    <article className="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <Image alt="Placeholder" width={720}
                                height={320} className="block h-auto w-full" src={Image1} />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href="#">
                                    Article Title
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <Image alt="Placeholder" width={50}
                                    height={50} className="block rounded-full" src={Image1} />
                                <p className="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span className="hidden">Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>


                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">


                    <article className="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <Image alt="Placeholder" width={720}
                                height={320} className="block h-auto w-full" src={Image1} />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href="#">
                                    Article Title
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <Image alt="Placeholder" width={50}
                                    height={50} className="block rounded-full" src={Image1} />
                                <p className="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span className="hidden">Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>

                </div>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                    <article className="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <Image alt="Placeholder" width={720}
                                height={320} className="block h-auto w-full" src={Image1} />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href="#">
                                    Article Title
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <Image alt="Placeholder" width={50}
                                    height={50} className="block rounded-full" src={Image1} />
                                <p className="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span className="hidden">Like</span>
                                <i className="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>

                </div>
            </div>
        </div>
    );
};

export default PropertyList;
