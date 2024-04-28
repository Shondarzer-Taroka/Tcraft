// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { TiTick } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import Swal from "sweetalert2";



// const MyList = () => {
   
//     let { user } = useContext(AuthContext)
//     let [getItem, setGetItem] = useState([])
//     // let [tree,setTree]=useState(getItem)
//      let [c,d]=useState()
//     //  console.log(tree);
//     useEffect(() => {
//         fetch('http://localhost:4545/crafts')
//             .then(res => res.json())
//             .then(data => {
//                 let adjustUser = data.filter(value => value.email == user.email)
//                 setGetItem(adjustUser)
//                 // console.log(tree);
//             })
//     }, [user, getItem])

    // function handleDelete(id) {
    //     console.log(id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     })
    //         .then(result => {
    //             if (result.isConfirmed) {
    //                 fetch(`http://localhost:4545/crafts/${id}`, {
    //                     method: 'DELETE'
    //                 })
    //                     .then(res => {

    //                         res.json()
    //                         console.log('kk');
    //                     })
    //                     .then(data => {

    //                         console.log(data);
    //                         if (data.deletedCount > 0) {

    //                             Swal.fire({
    //                                 title: "Deleted!",
    //                                 text: "Your file has been deleted.",
    //                                 icon: "success"
    //                             });
    //                         }
    //                     })
    //             }
    //         })


    // }
//     // console.log(getItem);


//     // let myUser = getItem?.filter(value => value.email == user.email)
//     function handleSort() {
//         let sorted=getItem.sort((a,b)=> {
//           return a.customization.length-b.customization.length
//        })
//        d(sorted)
//     //    console.log(sorted);
//     }
 
//     function handleSort2() {
//         let sorted=getItem.sort((a,b)=> {
//           return b.customization.length-a.customization.length
//        })

//        d(sorted)
//        console.log(sorted);
//     }
//     return (
//         <div>

//             <div className="dropdown">
//                 <div tabIndex={0} role="button" className="btn m-1">Click</div>
//                 <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
//                     <li onClick={ handleSort}><a>sort bt No</a></li>
//                     <li onClick={ handleSort2}><a>sort by yes</a></li>
//                 </ul>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

//                 {
               
//              c==undefined ? getItem.map((value) => {
//                         return <aside key={value._id} className="border-[1px] border-black">

//                             <div id="img" className="p-4">
//                                 <img className="w-full" src={value?.image} alt="" />
//                             </div>

//                             <div id="content" className="p-4">
//                                 <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> Item Name: {value?.item_name} </p>
//                                 <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" />price: {value?.price} </p>
//                                 <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> customization: {value?.customization} </p>
//                                 <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> stock status: {value?.stockStatus} </p>

//                                 <div id="btn-cont" className="flex gap-1">
//                                     <Link to={`/update/${value._id}`}><button className="btn btn-accent">Update</button> </Link>
//                                     <button onClick={() => handleDelete(value._id)} className="btn btn-secondary">Delete</button>
//                                 </div>
//                             </div>

//                         </aside>
//                     })

                    
//                     :<> { 
//                     c.map((value) => {
//                         return <aside key={value._id} className="border-[1px] border-black">

//                             <div id="img" className="p-4">
//                                 <img className="w-full" src={value?.image} alt="" />
//                             </div>

//                             <div id="content" className="p-4">
//                                 <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> Item Name: {value?.item_name} </p>
//                                 <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" />price: {value?.price} </p>
//                                 <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> customization: {value?.customization} </p>
//                                 <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> stock status: {value?.stockStatus} </p>

//                                 <div id="btn-cont" className="flex gap-1">
//                                     <Link to={`/update/${value._id}`}><button className="btn btn-accent">Update</button> </Link>
//                                     <button onClick={() => handleDelete(value._id)} className="btn btn-secondary">Delete</button>
//                                 </div>
//                             </div>

//                         </aside>
//                     })}
//                     </>
//                 }

//             </div>
//         </div>
//     );
// };

// export default MyList;



const MyList = () => {
    let {user}=useContext(AuthContext) || {}
    let [item,setItem]=useState([])
    let [toggle,setToggle]=useState(false)
    useEffect(()=>{
        fetch(`http://localhost:4545/crafts/${user?.email}`)
        .then(res=> res.json())
        .then(data=> {
            setItem(data)
            // console.log(data);
        })
    },[user,toggle])

    
    function handleDelete(id) {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:4545/crafts/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {

                            console.log(data);
                            if (data.deletedCount > 0) {
                                setToggle(!toggle)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            })


    }


   


    // function handleDelete(id) {
    //     fetch(`http://localhost:4545/crafts/${id}`,{
    //         method:'delete'
    //     })
    //     .then(res=> res.json())
    //     .then(data=> console.log(data) , setToggle(!toggle))
    // }

    return (
        <div>


             <button onClick={'fil'} className="btn btn-ghost">Click</button>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"> 

       {
        item.map((value,index)=>{

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
                                               <button onClick={()=>handleDelete(value._id)} className="btn btn-secondary">Delete</button>
                                           </div>
                                       </div>
            
                                    </aside>



        })
       }
 </div>

        </div>       
    );
};

export default MyList;