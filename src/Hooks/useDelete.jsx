
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const useDelete = () => {
    let [items,setItems]=useState([])
    let [item,setitem]=useState(items)
    let [toggle,setToggle]=useState(false)
        console.log(toggle);
        let i=1
      useEffect(()=>{
        fetch('http://localhost:4545/crafts')
        .then(res=> res.json())
        .then(data=>{
            setItems(data)
        })
    },[])

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
          .then(result=>{
            if ( result.isConfirmed) {
                fetch(`http://localhost:4545/crafts/${id}`,{
                    method:'DELETE'
                })
                .then(res=> res.json())
                .then(data=> {
                    if (data.deletedCount> 0) {
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                    }
                })
            }
          })
        //   setToggle(!toggle)
  
    }
    return { setToggle,setItems,item,items,toggle,handleDelete}
 
};

export default useDelete;