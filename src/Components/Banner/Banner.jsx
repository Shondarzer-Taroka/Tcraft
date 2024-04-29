import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Navigation, } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import explo from '../../../public/explore.json'
import Lottie from 'lottie-react';

const Banner = () => {
    return (
        <div className='font-poppins'>

            <Swiper autoplay={{ delay: 2000, disableOnInteraction: false }}
                speed={1500}
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}

                navigation={true}
                modules={[Keyboard, Navigation]}>
                <SwiperSlide>
                    <section className="p-16 lg:h-[550px]  rounded flex-col-reverse justify-between items-center flex lg:flex-row gap-2" style={{ background: 'linear-gradient(336deg, rgba(8,82,196,1) 0%, rgba(116,23,5,0.9726015406162465) 41%, rgba(0,0,0,1) 100%)'}}>
                        <div id="content" className=" text-white md:h-[160px] lg:w-[400px] flex flex-col items-center justify-between md:py-3">
                            <h3 className='font-bold text-3xl md:text-4xl font-poppins text-center'>
                                <Typewriter
                                    cursor
                                    cursorBlinking
                                    delaySpeed={1000}
                                    deleteSpeed={50}
                                     loop={1}
                                    typeSpeed={75}
                                    
                                    words={[
                                       
                                        'Welcome to The Tcraft',
                                        // 'The Tcraft',
                                    ]}
                                />
                            </h3>
                            {/* <h1 className="font-bold text-3xl md:text-4xl font-poppins text-center"> Lorem ipsum dolor sit amet consectetu </h1> */}
                            

                            
                            <p className="font-poppins text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium?</p>
                            <div className="mt-9">
                               <button className='flex items-center justify-center px-4 btn btn-info font-bold  py-2 rounded-lg gap-1'> <span> Explore</span> 
                               <span className='w-[20px] h-[24px]'> 
                                  <Lottie  className='w-full h-full pt-[5px] font-bold text-white' animationData={explo}>
                              </Lottie>
                               </span>

                                </button>
                            </div>
                        </div>
                        {/* background-image: radial-gradient( circle 321px at 8.3% 75.7%,  rgba(209,247,241,1) 0%, rgba(249,213,213,1) 81% ); */}
                        <div id="img" className="md:py-3">

                            <div className='lg:w-[300px]'>
                                <img className='rounded-md w-full' src={'https://i.ibb.co/sjwVcst/bl14.jpg'} alt="" />
                            </div>


                        </div>
                    </section>

                </SwiperSlide>

                <SwiperSlide>
                    <section className="p-16 lg:h-[550px]  rounded flex-col-reverse justify-between items-center flex lg:flex-row gap-2" style={{ background: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)' }}>
                        <div id="content" className=" text-white lg:h-[200px]  flex flex-col items-center justify-center md:py-3">
                            <h3 className='font-bold text-3xl md:text-4xl font-poppins text-center'>
                                <Typewriter
                                  cursor
                                  cursorBlinking
                                  delaySpeed={5000}
                                  deleteSpeed={50}
                                  loop={1}
                                  typeSpeed={75}
                                    
                                    words={[
                                       
                                        'Welcome to The Tcraft',
                                        // 'The Tcraft',

                                    ]}
                                />
                            </h3>
                           
                            <p className="font-poppins text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium?</p>
                            <div className="mt-9">
                               <button className='flex items-center justify-center px-4 btn btn-outline font-bold  py-2 rounded-lg gap-1'> <span> Explore</span> 
                               <span className='w-[20px] h-[24px]'> 
                                  <Lottie  className='w-full h-full pt-[5px] font-bold text-white' animationData={explo}>
                              </Lottie>
                               </span>

                                </button>
                            </div>
                        </div>
                        {/* background-image: radial-gradient( circle 321px at 8.3% 75.7%,  rgba(209,247,241,1) 0%, rgba(249,213,213,1) 81% ); */}
                        <div id="img" className="md:py-3">

                            <div className='lg:w-[300px]'>
                                <img className='rounded-md w-full' src={'https://i.ibb.co/sjwVcst/bl14.jpg'} alt="" />
                            </div>


                        </div>
                    </section>

                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-16 lg:h-[550px]  rounded flex-col-reverse justify-between items-center flex lg:flex-row gap-2" style={{ background: 'linear-gradient(124deg, rgba(18,21,24,0.9277836134453782) 0%, rgba(196,74,8,1) 55%, rgba(66,67,63,1) 95%)' }}>
                        <div id="content" className=" text-white lg:h-[200px]  flex flex-col items-center justify-center md:py-3">
                            <h3 className='font-bold text-3xl md:text-4xl font-poppins text-center'>
                                <Typewriter
                                  cursor
                                  cursorBlinking
                                  delaySpeed={5000}
                                  deleteSpeed={50}
                                  loop={1}
                                  typeSpeed={75}
                                    
                                    words={[
                                       
                                        'Welcome to The Tcraft',
                                        // 'The Tcraft',

                                    ]}
                                />
                            </h3>
                           
                            <p className="font-poppins text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium?</p>
                            <div className="mt-9">
                               <button className='flex items-center btn btn-secondary justify-center px-4 font-bold text-2xl py-2 rounded-lg gap-1'> <span> Explore</span> 
                               <span className='w-[20px] h-[24px]'> 
                                  <Lottie  className='w-full h-full pt-[5px] font-bold text-white' animationData={explo}>
                              </Lottie>
                               </span>

                                </button>
                            </div>
                        </div>
                        {/* background-image: radial-gradient( circle 321px at 8.3% 75.7%,  rgba(209,247,241,1) 0%, rgba(249,213,213,1) 81% ); */}
                        <div id="img" className="md:py-3">

                            <div className='lg:w-[300px]'>
                                <img className='rounded-md w-full' src={'https://i.ibb.co/sjwVcst/bl14.jpg'} alt="" />
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