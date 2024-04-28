import React, { useEffect, useState } from 'react';
import useDelete from '../../Hooks/useDelete';
import { Link, useLoaderData } from 'react-router-dom';
import { data } from 'autoprefixer';

const AllArtAndCraft = () => {
    let loadedData = useLoaderData()

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
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