import img1 from '../../src/assets/eth.png'
import img2 from '../../src/assets/5yh.png'
import img3 from '../../src/assets/geometric.png'
import img4 from '../../src/assets/rntrbr.png'
const OurServices = () => {
    return (
        <div className='bg'>
            
            <h1 className="text-center font-poppins font-semibold text-3xl mt-8"> OUR SERVICES</h1>
            <p className="mb-3 text-center"> Whether you’re a designer looking for a trusted partner or a fashion enthusiast seeking the latest trends, we’ve got you covered.</p>
             
             <div id="container" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                    
                    <div id="card" className='flex gap-4 flex-col items-start border-[1px] border-black p-4'>
                     <div>
                         <img className='w-[40%]' src={img3} alt="" />
                     </div>
                     <div>
                       <h3 className='text-lg text-start font-poppins font-semibold'>Jute and Wooden Artisan Crafts</h3>
                       <p className='text-start mt-4'>
                       Embrace eco-conscious living with our sustainable home styling services. We curate collections of ethically sourced jute and wooden furnishings and accessories that not only enhance your space aesthetically but also minimize environmental impact.
                       </p>
                     </div>
                    </div>
                    <div id="card" className='flex gap-4 flex-col items-start border-[1px] border-black p-4'>
                     <div>
                         <img className='w-[40%]' src={img2} alt="" />
                     </div>
                     <div>
                       <h3 className='text-lg text-start font-poppins font-semibold'>Jute and Wood Handmade Treasures</h3>
                       <p className='text-start mt-4'>Collaborate with our experienced designers to integrate jute and wooden elements seamlessly into your interior design scheme. From selecting the perfect accent pieces to optimizing layout and functionality.</p>
                     </div>
                    </div>
                    <div id="card" className='flex gap-4 flex-col items-start border-[1px] border-black p-4'>
                     <div>
                         <img className='w-[40%]' src={img1} alt="" />
                     </div>
                     <div>
                       <h3 className='text-lg text-start font-poppins font-semibold'>Handwoven Jute and Wooden Décor Delights</h3>
                       <p className='text-start mt-4'> Our team of skilled artisans works closely with you to create bespoke jute and wooden décor pieces tailored to your unique style and preferences. Whether it's a custom wall art installation or personalized furniture, we bring your vision to life with impeccable craftsmanship.</p>
                     </div>
                    </div>
                    <div id="card" className='flex gap-4 flex-col items-start border-[1px] border-black p-4'>
                     <div>
                         <img className='w-[40%]' src={img4} alt="" />
                     </div>
                     <div>
                       <h3 className='text-lg text-start font-poppins font-semibold'>Artistry for Modern Living</h3>
                       <p className='text-start mt-4'>At Natural Harmony, we specialize in providing exceptional services that elevate your spaces with the rustic charm of jute and wooden accents. Our range of services encompasses everything you need to infuse your home or business with the timeless beauty of natural materials.</p>
                     </div>
                    </div>

             </div>
        </div>
    );
};

export default OurServices;