import Banner from "../../Components/Banner/Banner";
import MyTHeme from "../../Components/MyTHeme/MyTHeme";
import OurProduct from "../../Components/OurProduct/OurProduct";
import OurServices from "../../OurServices/OurServices";
import CraftItems from "../CraftItems/CraftItems";


const Home = () => {
    return (
        <div className="">


            <Banner></Banner>

            {/* <CraftItems></CraftItems> */}
            
            {/* <OurProduct></OurProduct> */}

            <OurServices></OurServices>
            <div className="  h-full absolute z-50">
                <MyTHeme></MyTHeme>
            </div>


        </div>
    );
};

export default Home;