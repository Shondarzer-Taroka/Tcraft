import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    let navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }
    function goHome() {
        navigate('/')
    }
    return (
        <div>
            <div className='flex justify-center items-center flex-col h-[400px]'>
                <div className=''>
                    <h1 className='text-[80px] font-bold font-poppins text-center'>404</h1>
                    <button className='btn btn-info mr-2' onClick={goBack}>Go Back</button>
                    <button className='btn btn-info' onClick={goHome}>Home</button>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;