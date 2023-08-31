const Subscribe = () => {
    return (
        <section className="flex justify-center">
            <div className="shadow my-5 w-full md:w-3/4 lg:w-3/4">
                <div className="p-4">
                    <form>
                        <div className='text-center mb-5'>
                            <h3 className='text-primary text-2xl font-bold uppercase'>Subscribe Now</h3>
                            <div className='mt-5'>
                                <input
                                    type="email"
                                    className="w-full px-3 py-3 border rounded placeholder-gray-400"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Your Email"
                                />
                            </div>
                        </div>
                        <div className="grid">
                            <button className='w-full p-3 text-uppercase font-bold bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
