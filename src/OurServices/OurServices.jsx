import img1 from '../../src/assets/eth.png'
import img2 from '../../src/assets/5yh.png'
import img3 from '../../src/assets/geometric.png'
import img4 from '../../src/assets/rntrbr.png'
const OurServices = () => {
    return (
        <div>
            
            <h1 className="text-center font-poppins font-semibold text-3xl my-2"> OUR SERVICES</h1>
            <p className="mb-2"> Whether you’re a designer looking for a trusted partner or a fashion enthusiast seeking the latest trends, we’ve got you covered.</p>
             
             <div id="container" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                    
                    <div id="card" className='flex gap-4 flex-col items-start border-[1px] border-black p-4'>
                     <div>
                         <img className='w-[40%]' src={img3} alt="" />
                     </div>
                     <div>
                       <h3 className='text-lg text-start font-poppins font-semibold'>Custom Clothing Manufacturing</h3>
                       <p className='text-start mt-4'>From custom orders to large-scale production, we have the experience and expertise to meet your unique fashion manufacturing needs.</p>
                     </div>
                    </div>
                    <div id="card" className='flex gap-4 flex-col items-start border-[1px] border-black p-4'>
                     <div>
                         <img className='w-[40%]' src={img2} alt="" />
                     </div>
                     <div>
                       <h3 className='text-lg text-start font-poppins font-semibold'>Custom Clothing Manufacturing</h3>
                       <p className='text-start mt-4'>From custom orders to large-scale production, we have the experience and expertise to meet your unique fashion manufacturing needs.</p>
                     </div>
                    </div>
                    <div id="card" className='flex gap-4 flex-col items-start border-[1px] border-black p-4'>
                     <div>
                         <img className='w-[40%]' src={img1} alt="" />
                     </div>
                     <div>
                       <h3 className='text-lg text-start font-poppins font-semibold'>Custom Clothing Manufacturing</h3>
                       <p className='text-start mt-4'>From custom orders to large-scale production, we have the experience and expertise to meet your unique fashion manufacturing needs.</p>
                     </div>
                    </div>
                    <div id="card" className='flex gap-4 flex-col items-start border-[1px] border-black p-4'>
                     <div>
                         <img className='w-[40%]' src={img4} alt="" />
                     </div>
                     <div>
                       <h3 className='text-lg text-start font-poppins font-semibold'>Custom Clothing Manufacturing</h3>
                       <p className='text-start mt-4'>From custom orders to large-scale production, we have the experience and expertise to meet your unique fashion manufacturing needs.</p>
                     </div>
                    </div>

             </div>
        </div>
    );
};

export default OurServices;