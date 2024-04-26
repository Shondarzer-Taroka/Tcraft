

const Update = () => {
    return (
        <div>
            <form className="">
                <article className="grid lg:grid-cols-3 gap-4">
                    <div className="flex items-center border-[1px] border-black rounded-sm w-full" >
                        <span>Image:</span>
                        <input className=" p-2 w-[90%] outline-none " type="text" name="image" placeholder="Type your photo URL" id="" />
                    </div>
                    <div className="flex items-center border-[1px] border-black rounded-lg" >
                        <span>Image:</span>
                        <input className=" p-2 w-[100%] outline-none " type="text" name="image" placeholder="Type your photo URL" id="" />
                    </div>
                    <div className="flex items-center border-[1px] border-black rounded-lg" >
                        <span>Image:</span>
                        <input className=" p-2 w-[100%] outline-none " type="text" name="image" placeholder="Type your photo URL" id="" />
                    </div>


                </article>

            </form>
        </div>
    );
};

export default Update;