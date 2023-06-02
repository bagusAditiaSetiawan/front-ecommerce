import React from "react"


const HeaderSection = (): React.JSX.Element => {
    return (
      <section id="header" className="relative bg-slate-900">
        <div className="absolute inset-0">
            <img src="https://demo.cartify.dev/storage/hero-background-C0pJ92eRIa.jpg"  alt="summer"
            className="w-full h-full object-cover object-center"
            />
        </div>
        <div className='relative px-6 py-36 bg-slate-900 bg-opacity-50 sm:px-12 sm:py-48 lg:px-16'>
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="font-bold text-4xl text-white md:text-5xl">Mid-Season Sales</h2>
            <button className="w-full text-gray-900 bg-white mt-10 font-medium py-2 rounded-md
            lg:w-auto lg:px-8 lg:py-4
            ">Shop Collection</button>
            </div>
        </div>
    </section>
    )
}

export default HeaderSection