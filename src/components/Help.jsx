import circle from '../assets/img/circle.png'
import we_help from '../assets/img/we_help.png'
const Help = () => {
    return (
        <section className="mt-20">
            <div className="container grid lg:grid-cols-12 gap-12 max-w-[1280px]">
                <div className="md:col-span-6">
                    <img src={we_help} alt="image" />
                </div>
                <div className="md:col-span-6">
                    <div className="flex flex-col">

                        <h1 className="text-[34px] font-semibold text-title">
                            We help  you make <br />
                            Modern Interior Design   
                        </h1>

                        <p className="text-desc text-base mt-4">
                            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long  post for the text.`This small text has to be place here, since this is a place holder. You can also chane it.
                        </p>
                        <div className="flex flex-col gap-4 mt-4">                        
                            <div className="flex flex-row items-center justify-center gap-[1.25rem] md:gap-8 md:justify-start">
                                <div className="flex flex-row items-start justify-center gap-2">
                                    <img src={circle} alt="image" className="mt-[8px]" />
                                    <p>Donec mattis porta eros,let aliquet finibus ri</p>
                                </div>
                                <div className="flex flex-row items-start justify-center gap-2">
                                    <img src={circle} alt="image" className="mt-[8px]" />
                                    <p>Donec mattis porta eros,let aliquet finibus ri</p>
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-center  gap-[1.25rem] md:gap-8 md:justify-start">
                                <div className="flex flex-row items-start justify-center gap-2">
                                    <img src={circle} alt="image" className="mt-[8px]" />
                                    <p>Donec mattis porta eros,let aliquet finibus ri</p>
                                </div>
                                <div className="flex flex-row items-start justify-center gap-2">
                                    <img src={circle} alt="image" className="mt-[8px]" />
                                    <p>Donec mattis porta eros,let aliquet finibus ri</p>
                                </div>
                            </div>                     
                        </div>
                        <button className="rounded-full bg-mau_nen_primary text-mau_trang text-base px-10 py-3 mt-12 w-fit">Explore</button>
                    </div>                    
                </div>
            </div>
        </section> 
    )
}

export default Help
