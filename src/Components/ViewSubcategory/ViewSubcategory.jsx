import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";


const ViewSubcategory = () => {
    let { subname } = useParams()
    console.log(subname);
    let [subdata, setSubData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4545/viewsub/${subname}`)
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
                        <div className="flex gap-2 items-center border-[1px]">
                <div className="border-r">
                    <img className="p-2" src="https://i.ibb.co/brBsfj2/utensile4.jpg" alt="" />
                    <div>
                    <p className="p-2"> <span className='font-semibold'>Price: $</span>99 </p>
                    <p className='px-2 pb-2 flex items-center gap-1 font-semibold'>Rating:{getRating(value.rating).map(rat => <span key={77 + rat} className='text-yellow-400'> <FaStar></FaStar> </span>)} </p>
                    </div>
                </div>
                <div className="">
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi recusandae ratione, sequi quam eaque saepe, et neque totam adipisci ab? Ut fugiat sed quaerat, eius rem fugit perspiciatis minima. </p>
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