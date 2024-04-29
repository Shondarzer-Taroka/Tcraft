
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link, ScrollRestoration } from 'react-router-dom';
import loader from '../../../public/lottieData.json'
import Lottie from 'lottie-react';
const ChallengeArt = () => {

    let [cateData, setCateData] = useState([])
    let [craftDataLoading, setcraftDataLoading] = useState([true])

    useEffect(() => {
        setcraftDataLoading(true)
        fetch('https://assignment-ten-server-orpin.vercel.app/subcategorydata')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCateData(data)
                setcraftDataLoading(false)
            })
    }, [])


    function getRating(num) {
        let ratingArray = []
        for (let i = 0; i < num; i++) {
            ratingArray.push(i)
        }
        // console.log(num);
        return ratingArray
        //   ratingArray =[]
    }



    //  console.log(ratingArray);


    // console.log(ratingArray);
    return (
        <div>

            <ScrollRestoration></ScrollRestoration>

            <h1 className='text-center font-bold text-3xl my-7'> Art And Craft Category Section </h1>

            <div className="flex justify-center items-center">
                {craftDataLoading && <h1 className="w-[70px] ">
                    <Lottie animationData={loader}>
                    </Lottie>
                </h1>}
            </div>

            <section className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {
                    cateData.map((value, index) => {
                        return <div key={index}>
                            <Link to={`/viewsub/${value.subcategory_Name}`}>

                                <aside className="border-[1px]  rounded-lg" id="prominent">

                                    <div id="" className="p-3 ">
                                        <div className="w-full overflow-hidden rounded-lg">
                                            <img className="w-full rounded-lg" id="imgeffect" src={value.image} alt="" />
                                        </div>

                                    </div>

                                    <div id="content" className="px-3 pt-1 my-1">

                                        <h3 className="font-semibold text-3xl font-poppins h-[80px]">{value.subcategory_Name}</h3>
                                        <p className='font-poppins '>{value.short_description.length > 200 ? value.short_description.slice(0, 200) + '...' : value.short_description}</p>

                                        <div className='mt-2 flex justify-between py-3'>
                                            <p className='flex items-center gap-1 font-semibold'>Rating:{getRating(value.rating).map(rat => <span key={77 + rat} className='text-yellow-400'> <FaStar></FaStar> </span>)} </p>
                                            <p> <span className='font-semibold'>Price: $</span>{value.price} </p>
                                        </div>

                                    </div>
                                </aside>

                            </Link>
                        </div>
                    })
                }



            </section>

        </div>
    );
};

export default ChallengeArt;