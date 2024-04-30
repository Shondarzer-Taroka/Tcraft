import { useContext, useEffect, useState } from "react";
import img1 from '../../assets/banner1.png'
import '../../Components/Style/effect/effect.css'
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import Lottie from "lottie-react";
import hn from '../../../public/lottieData.json'
import { Fade } from "react-awesome-reveal";
const CraftItems = () => {

    let [userAddeddata, setUserAddedData] = useState([])
    let [craftDataLoading, setcraftDataLoading] = useState([true])
    useEffect(() => {
        setcraftDataLoading(true)
        fetch('https://assignment-ten-server-orpin.vercel.app/allcraft')
            .then(res => res.json())
            .then(data => {
                setUserAddedData(data)
                setcraftDataLoading(false)
                // console.log(userAddeddata);

            })
    }, [])
    return (
        <div>

            <Fade direction="down">
               <h1 className="font-poppins font-bold text-3xl text-center my-10">  Craft Items  </h1> 
            </Fade>
            

            <div className="flex justify-center items-center">
                {craftDataLoading && <h1 className="w-[70px] ">
                    <Lottie animationData={hn}>
                    </Lottie>
                </h1>}
            </div>



            <section className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {
                    userAddeddata.map((value) => {
                        return (
                            <>
                                <aside className="border-[1px]  rounded-lg" id="shadowing">

                                    <div id="doet" className="p-3 ">
                                        <div className="w-full h-[300px] overflow-hidden rounded-lg">
                                            <img className="w-full h-full object-cover rounded-lg" id="imgeffect" src={value.image} alt="" />
                                        </div>

                                    </div>

                                    <div id="content" className="px-3 pt-1">
                                        <h1 className="font-bold text-3xl">{value?.item_name} </h1>
                                        <h3 className="font-semibold my-2"> {value?.subcategory_Name}</h3>
                                        <p> <span className="font-semibold">price:</span>  ${value?.price}</p>
                                        <p> <span className="font-semibold">Stock status:</span> {value?.stockStatus}</p>
                                        <p> <span className="font-semibold">Processing time:</span>  {value?.processing_time} </p>
                                    </div>

                                    <div className="p-3">
                                        <Link to={`/viewdetails/${value._id}`}>  <button className="btn btn-info text-white">View details</button></Link>

                                    </div>

                                </aside>
                            </>

                        )
                    })
                }




            </section>
        </div>);
};

export default CraftItems;