import { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import MyTHeme from "../../Components/MyTHeme/MyTHeme";
import OurProduct from "../../Components/OurProduct/OurProduct";
import OurServices from "../../OurServices/OurServices";
import ChallengeArt from "../ChallengeArt/ChallengeArt";
import CraftItems from "../CraftItems/CraftItems";


const Home = () => {

    // useEffect(()=>{
    //   let i=  document.getElementById('navbar')
    //     console.log(i);
    //     i.classList.remove('bg-base-100')
    //     i.classList.add('bg-red-100')
    // },[])

    return (
        <div className="">



            <Banner></Banner>

            <CraftItems></CraftItems>

            <ChallengeArt></ChallengeArt>
            
            <OurProduct></OurProduct>

            <OurServices></OurServices>
            <div className="  h-full absolute z-50">
                <MyTHeme></MyTHeme>
            </div>


        </div>
    );
};

export default Home;