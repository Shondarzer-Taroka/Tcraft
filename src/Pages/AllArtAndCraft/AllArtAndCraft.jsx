import React, { useEffect, useState } from 'react';
import useDelete from '../../Hooks/useDelete';
import { Link, useLoaderData } from 'react-router-dom';
import { data } from 'autoprefixer';

const AllArtAndCraft = () => {
    let loadedData=useLoaderData()
    // console.log(loadedData);
    // console.log(lod);
    // console.log();
//   let [loadedData,setLoadedData]=useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5173/allcraft')
    //     .then(res=> res.json())
    //     .then(data=> {
    //         console.log(data);
    //     })
    // },[])

    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme','light')
       
     },[])

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs sm:table-sm md:table-md lg:table-lg table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>stockStatus</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {loadedData.map((value, index) => {
                        return <>
                            <tr>
                                <td>{index+1}</td>
                                <td>{value.item_name}</td>
                                <td>{value.price}</td>
                                <td>{value.stockStatus}</td>
                                <Link to={`/viewdetails/${value._id}`}> <td className='btn btn-ghost' > View Details</td></Link>
                                
                            </tr>
                        </>
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default AllArtAndCraft;