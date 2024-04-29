import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";


const ViewSubcategory = () => {
    let { subname } = useParams()
    console.log(subname);
    let [subdata, setSubData] = useState([])
    useEffect(() => {
        fetch(`https://assignment-ten-server-orpin.vercel.app/viewsub/${subname}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSubData(data)
            })
    }, [subname])


    function getRating(num) {
       let n= parseInt(num)
        console.log(n);
        let t=n>5 ? n=5 :n
        let ratingArray = []
        for (let i = 0; i < t; i++) {
            ratingArray.push(i)
        }
        console.log(t);
        return ratingArray
        //   ratingArray =[]
    }
    return (
        <div>

            <section>

                {
                    subdata.map((value=>{
                        return <>
                        <div className="grid lg:grid-cols-3 gap-2 justify-items-start items-center border-[1px]">
                   <div className="border-b lg:border-r  col-span-1">
                    <img className="px-2 w-full"  src={value.image} alt="" />
                    <div>
                    <p className="p-2 font-semibold">{value.subcategory_Name}</p>
                    <p className="p-2"> <span className='font-semibold'>Price: $</span>{value.price} </p>
                    <p className='px-2 pb-2 flex items-center gap-1 font-semibold'>Rating:{getRating(value.rating).map(rat => <span key={77 + rat} className='text-yellow-400'> <FaStar></FaStar> </span>)} </p>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <p>{value.short_description} </p>
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