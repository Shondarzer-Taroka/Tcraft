import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";


const ViewSubcategory = () => {
    let { subname } = useParams()
    let [subLoading, setSubLoading] = useState(true)
    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", 'light');
    }, []);
    // console.log(subname);
    let [subdata, setSubData] = useState([])
    useEffect(() => {
     setSubLoading(true)
        fetch(`https://assignment-ten-server-orpin.vercel.app/viewsub/${subname}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSubData(data)
                setSubLoading(false)
            })
    }, [subname])


    function getRating(num) {
        let n = parseInt(num)
        console.log(n);
        let t = n > 5 ? n = 5 : n
        let ratingArray = []
        for (let i = 0; i < t; i++) {
            ratingArray.push(i)
        }
        console.log(t);
        return ratingArray
        //   ratingArray =[]
    }
    return (
        subLoading ? <div className="flex items-center justify-center"><span className="loading loading-dots loading-lg"></span> </div> : <div>

            <section>

                <h1 className="text-center font-bold text-lg my-6">View subcategory details</h1>

                {
                    subdata.map((value => {
                        return <>
                            <div className="grid lg:grid-cols-3 gap-2 justify-items-start items-center border-[1px]">
                                <div className="border-b w-full lg:border-r  col-span-1">
                                    <img className="p-2 w-full" src={value.image} alt="" />
                                    <div>
                                        <p className="p-2"> <span className='font-semibold'>Price: $</span>{value.price} </p>
                                        <p className="p-2 font-medium">Processing Time: {value.processing_time}</p>
                                        <p className='px-2 pb-2 flex items-center gap-1 font-semibold'>Rating:{getRating(value.rating).map(rat => <span key={77 + rat} className='text-yellow-400'> <FaStar></FaStar> </span>)} </p>

                                    </div>
                                </div>
                                <div className="lg:col-span-2">
                                    <div className="my-3 md:my-0">
                                        <p className="px-2 font-semibold"> Subcategory Name: {value.subcategory_Name}</p>
                                        <p className="px-2 font-poppins font-medium">Item Name: {value.item_name} </p>
                                    </div>

                                    <p className="pl-2 md:p-2 lg:p-2">{value.short_description} </p>
                                    <Link className="p-2" to={`/viewdetails/${value._id}`}> <button className=" mb-2 btn btn-info">View Details</button> </Link>

                                </div>
                            </div>
                        </>
                    }))
                }


            </section>

        </div>
    );
};

export default ViewSubcategory;