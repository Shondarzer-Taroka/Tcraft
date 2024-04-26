import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div>

            <Swiper autoplay={{ delay: 2000, disableOnInteraction: false }}
                speed={1500}
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}

                navigation={true}
                modules={[Keyboard, Autoplay, Navigation]}>
                <SwiperSlide>
                    <section className="px-5 lg:h-[550px]  rounded flex-col-reverse items-center flex lg:flex-row gap-2" style={{ background: ' radial-gradient( circle 321px at 8.3% 75.7%,  rgba(209,247,241,1) 0%, rgba(249,213,213,1) 81% )' }}>
                        <div id="content" className="flex flex-col items-center justify-center md:py-3">
                            <h1 className="font-bold text-3xl md:text-4xl font-poppins"> Lorem ipsum dolor sit amet consectetu </h1>
                            <p className="font-poppins"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium?</p>
                            <div className="flex-col md:flex-row flex gap-0">
                                <div className="form-control outline-none">
                                    <input type="email" placeholder="email" className="input outline-none input-bordered" />
                                </div>
                                <input className="btn btn-outline" type="button" value={'subscribe'} id="" />
                            </div>
                        </div>
                        {/* background-image: radial-gradient( circle 321px at 8.3% 75.7%,  rgba(209,247,241,1) 0%, rgba(249,213,213,1) 81% ); */}
                        <div id="img" className="md:py-3">

                            <div className='lg:w-[90%] mx-auto'>
                                <img className='rounded-md' src={'https://i.ibb.co/sjwVcst/bl14.jpg'} alt="" />
                            </div>


                        </div>
                    </section>

                </SwiperSlide>

                <SwiperSlide>
                    <section className="px-5 lg:h-[550px]  rounded flex-col-reverse items-center flex lg:flex-row gap-2" style={{ background: ' radial-gradient( circle 321px at 8.3% 75.7%,  rgba(209,247,241,1) 0%, rgba(249,213,213,1) 81% )' }}>
                        <div id="content" className="flex flex-col items-center justify-center md:py-3">
                            <h1 className="font-bold text-3xl md:text-4xl font-poppins"> Lorem ipsum dolor sit amet consectetu </h1>
                            <p className="font-poppins"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium?</p>
                            <div className="flex-col md:flex-row flex gap-0">
                                <div className="form-control outline-none">
                                    <input type="email" placeholder="email" className="input outline-none input-bordered" />
                                </div>
                                <input className="btn btn-outline" type="button" value={'subscribe'} id="" />
                            </div>
                        </div>
                        {/* background-image: radial-gradient( circle 321px at 8.3% 75.7%,  rgba(209,247,241,1) 0%, rgba(249,213,213,1) 81% ); */}
                        <div id="img" className="md:py-3">

                            <div className='lg:w-[90%] mx-auto'>
                                <img className='rounded-md' src={'https://i.ibb.co/sjwVcst/bl14.jpg'} alt="" />
                            </div>


                        </div>
                    </section>

                </SwiperSlide>
            </Swiper>

            {/* <section className="p-3  rounded flex-col-reverse items-center flex lg:flex-row gap-2" style={{ background: 'linear-gradient(191deg, rgba(24,52,108,1) 19%, rgba(21,46,76,1) 30%, rgba(121,87,180,1) 97%)' }}>
                <div id="content" className="flex flex-col items-center justify-center md:py-3">
                    <h1 className="font-bold text-3xl md:text-4xl font-poppins"> Lorem ipsum dolor sit amet consectetu </h1>
                    <p className="font-poppins"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium?</p>
                    <div className="flex-col md:flex-row flex gap-0">
                        <div className="form-control outline-none">
                            <input type="email" placeholder="email" className="input outline-none input-bordered" />
                        </div>
                        <input className="btn btn-outline" type="button" value={'subscribe'} id="" />
                    </div>
                </div>

                <div id="img" className="md:py-3">

                    <img src={'https://i.ibb.co/sjwVcst/bl14.jpg'} alt="" />

                </div>
            </section> */}

        </div>
    );
};

export default Banner;