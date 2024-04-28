import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Header/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        // <div>
        //     <div className="max-w-6xl mx-auto">
        //         <NavBar></NavBar>
        //         <Outlet></Outlet>
        //     </div>
        //     <div className="h-[50px]"></div>
        //     <div className="w-full">
        //                  <Footer></Footer>
        //     </div>
   
        // </div>

                <section>
               <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
             <Outlet></Outlet>
             
        </div>
        <div className="h-[50px]"></div>
        <div>
            <Footer></Footer>
        </div>
       
        </section>

    );
};

export default Root;