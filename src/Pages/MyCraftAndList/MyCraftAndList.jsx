import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { TiTick } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import useDelete from "../../Hooks/useDelete";
import Swal from "sweetalert2";
import { data } from "autoprefixer";
const MyCraftAndList = () => {
    let result=useRef()
   let { user, } = useContext(AuthContext)
   let { handleDelete,} = useDelete()
   let loadedData= useLoaderData()
   let [cloneLoadedData,setCloneLoadedData]=useState(loadedData)
   // console.log(15);
   // console.log(loadedData);
   // let [getUser, setgetUser] = useState()
   // console.log(getUser);
   // let [modifiedItem,setModifiedItem]=useState()
   // let [loading, setLoading] = useState(true)
   // let [toggle,setToggle]=useState(false)
   let [c,d]=useState()
   
   // useEffect(() => {
   //    setLoading(true)
   //    fetch('http://localhost:4545/crafts')
   //       .then(res => res.json())
   //       .then(data => {
   //          setgetUser(data)
   //          setLoading(false)
   //          //    setSpinner(false)
   //       })
   // }, [getUser])

   // console.log('k');

   // function deleteDataFromDatabase(id) {
   //    fetch(`http://localhost:4545/crafts/${id}`,{
   //       method:'DELETE'
   //    })
   //    .then(res=> res.json())
   //    .then(data=>{
   //       let remainingData= getUser.filter(value=> value._id !== id)
   //       console.log(data);
   //       console.log(data);
   //       // setToggle(!toggle)
   //    })
   // }

   // function deleteDataFromDatabase(id) {
   //  console.log(id);
   //      Swal.fire({
   //          title: "Are you sure?",
   //          text: "You won't be able to revert this!",
   //          icon: "warning",
   //          showCancelButton: true,
   //          confirmButtonColor: "#3085d6",
   //          cancelButtonColor: "#d33",
   //          confirmButtonText: "Yes, delete it!"
   //        })
   //        .then(result=>{
   //          if ( result.isConfirmed) {
   //              fetch(`http://localhost:4545/crafts/${id}`,{
   //                  method:'DELETE'
   //              })
   //              .then(res=> {

   //               res.json() 
   //               console.log('kk');
   //              } )
   //              .then(data=> {
   //                  let remaining=getUser.filter(value=> value._id!==id)
   //                  console.log(data);
   //                  console.log(remaining);
   //                  if (data.deletedCount > 0) {

   //                      Swal.fire({
   //                        title: "Deleted!",
   //                        text: "Your file has been deleted.",
   //                        icon: "success"
   //                      });
   //                  }
   //              })
   //          }
   //        })

   // }
   // console.log(modifiedItem);

   // useEffect(()=>{
   //    fetch(`http://localhost:4545/crafts`)
   //    .then(res=> res.json())
   //    .then(data=> {
   //       console.log(data);
   //    })

   // },[])


   let myUser = loadedData?.filter(value => value.email == user.email)
   function handleSort() {
       let sorted=myUser.sort((a,b)=> {
         return a.customization.length-b.customization.length
      })
      d(sorted)
   }

   function handleSort2() {
       let sorted=myUser.sort((a,b)=> {
         return b.customization.length-a.customization.length
      })

      d(sorted)
      console.log(sorted);

   }



 

   return (
      // loading ? <div className="flex justify-center">  <div className="">
      //    <ColorRing
      //       visible={true}
      //       height="80"
      //       width="80"
      //       ariaLabel="color-ring-loading"
      //       wrapperStyle={{}}
      //       wrapperClass="color-ring-wrapper"
      //       colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      //    /></div></div> :
         
         <div className="space-y-32">

         <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">Click</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
               <li onClick={handleSort} ref={result}><a>sort bt No</a></li>
               <li onClick={handleSort2}><a>sort by yes</a></li>
            </ul>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

            {
               loadedData.map((value) => {
                  return <aside key={value._id} className="border-[1px] border-black">

                     <div id="img" className="p-4">
                        <img className="w-full" src={value?.image} alt="" />
                     </div>

                     <div id="content" className="p-4">
                        <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> Item Name: {value?.item_name} </p>
                        <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" />price: {value?.price} </p>
                        <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> customization: {value?.customization} </p>
                        <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> stock status: {value?.stockStatus} </p>

                        <div id="btn-cont" className="flex gap-1">
                           <Link to={`/update/${value._id}`}><button className="btn btn-accent">Update</button> </Link>
                           <button onClick={() => handleDelete(value._id)} className="btn btn-secondary">Delete</button>
                        </div>
                     </div>

                  </aside>
               })
            }

            {/* {
                c==undefined ?

                 myUser.map((value) => {
                  return <aside key={value._id} className="border-[1px] border-black">

                     <div id="img" className="p-4">
                        <img className="w-full" src={value?.image} alt="" />
                     </div>

                     <div id="content" className="p-4">
                        <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> Item Name: {value?.item_name} </p>
                        <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" />price: {value?.price} </p>
                        <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> customization: {value?.customization} </p>
                        <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> stock status: {value?.stockStatus} </p>

                        <div id="btn-cont" className="flex gap-1">
                           <Link to={`/update/${value._id}`}><button className="btn btn-accent">Update</button> </Link>
                           <button onClick={() => handleDelete(value._id)} className="btn btn-secondary">Delete</button>
                        </div>
                     </div>

                  </aside>
               })


               : c.map(value=>{
                  return <aside key={value._id} className="border-[1px] border-black">

                  <div id="img" className="p-4">
                     <img className="w-full" src={value?.image} alt="" />
                  </div>

                  <div id="content" className="p-4">
                     <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> Item Name: {value?.item_name} </p>
                     <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" />price: {value?.price} </p>
                     <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> customization: {value?.customization} </p>
                     <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> stock status: {value?.stockStatus} </p>

                     <div id="btn-cont" className="flex gap-1">
                        <Link to={`/update/${value._id}`}><button className="btn btn-accent">Update</button> </Link>
                        <button onClick={() => handleDelete(value._id)} className="btn btn-secondary">Delete</button>
                     </div>
                  </div>

               </aside>
               })
            } */}
         </div>
      </div>
   );
};

export default MyCraftAndList;