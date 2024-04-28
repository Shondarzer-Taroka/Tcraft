import { Typewriter } from 'react-simple-typewriter'
import wood1 from '../../assets/wood1.jpg'
import wood2 from '../../assets/wood2.jpg'
import wood3 from '../../assets/wood3.jpg'
import wood4 from '../../assets/wood4.jpg'
import '../Style/effect/effect.css'
const OurProduct = () => {
    return (
        <>
        {/* <h3>
  <Typewriter
    cursor
    cursorBlinking
    delaySpeed={1000}
    deleteSpeed={25}
    loop={0}
    typeSpeed={75}
    words={[
      'Hello World',
      'Welcome to',
      'React Simple Typewriter',
      'A Simple React Component/Hook for adding a nice Typewriter effect to your project.'
    ]}
  />
</h3> */}
        <h1 className='text-center text-4xl font-bold my-7'>Our Wooden Furniture </h1>
        <section className='grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-5 text-white'>

            {/* <div id='bf'>
                <div id='cf' className='w-full md:w-[570px] h-[350px]  flex flex-col items-center justify-center' style={{ backgroundImage: `url(${img1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right' }}>
                    <div id='bgeffect' className='p-7 space-y-4 h-full absolute' >
                        <h1 className="font-poppins font-bold text-3xl"> Fashion Month
                            Ready in Capital
                            Shop </h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>

                        <button className='px-4 py-2 text-white rounded-md outline-none bg-blue-500'>view all</button>
                    </div>
                </div>
            </div> */}

            <div id='bf' className='relative md:col-span-1 '>
                <div id='cf' className='h-[350px]  flex flex-col items-center justify-center' style={{ backgroundImage: `url(${wood1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right' }}>
                </div>
                <div id='bgeffect' className='p-7 h-full absolute top-0 z-50 flex items-center' >
                    <div className='space-y-4 '>
                        <h1 className="font-poppins font-bold text-3xl mt">Rustic Charm Wooden Dining Table Set</h1>
                        <p> Embrace the warmth of natural wood with our Rustic Charm Dining Table Set</p>
                        <button className='px-4 py-2 text-white rounded-md outline-none bg-blue-500'>view all</button>
                    </div>

                </div>
            </div>
            <div id='bf' className='relative md:col-span-2 '>
                <div id='cf' className='  h-[350px]  flex flex-col items-center justify-center' style={{ backgroundImage: `url(${wood2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right' }}>
                </div>
                <div id='bgeffect' className='p-7  h-full absolute top-0 z-50 flex items-center' >
                    <div className='space-y-4'>
                        <h1 className="font-poppins font-bold text-3xl mt"> Handcrafted Maple Dining Chair</h1>
                        <p>  The natural beauty of the maple wood shines through, enhanced by a satin finish that adds a subtle sheen to its surface</p>
                        <button className='px-4 py-2 text-white rounded-md outline-none bg-blue-500'>view all</button>
                    </div>

                </div>
            </div>
            <div id='bf' className='relative col-span-2'>
                <div id='cf' className='  h-[350px]  flex flex-col items-center justify-center' style={{ backgroundImage: `url(${wood3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right' }}>
                </div>
                <div id='bgeffect' className='p-7  h-full absolute top-0 z-50 flex items-center' >
                    <div className='space-y-4'>
                        <h1 className="font-poppins font-bold text-3xl mt"> Classic Oak Wardrobe with Timeless Elegance.</h1>
                        <p> Introducing our Classic Oak Wardrobe, a timeless addition to any bedroom or dressing area</p>
                        <button className='px-4 py-2 text-white rounded-md outline-none bg-blue-500'>view all</button>
                    </div>

                </div>
            </div>
            <div id='bf' className='relative col-span-1'>
                <div id='cf' className='  h-[350px]  flex flex-col items-center justify-center' style={{ backgroundImage: `url(${wood4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right' }}>
                </div>
                <div id='bgeffect' className='p-7  h-full absolute top-0 z-50 flex items-center' >
                    <div className='space-y-4'>
                        <h1 className="font-poppins font-bold text-3xl mt">  Solid Wood Accent Wall Paneling</h1>
                        <p> Installa.tion is effortless, allowing you to effortlessly bring the beauty of nature indoors</p>
                        <button className='px-4 py-2 text-white rounded-md outline-none bg-blue-500'>view all</button>
                    </div>

                </div>
            </div>


        </section>
        </>);
};

export default OurProduct;