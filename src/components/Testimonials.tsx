import { ClientInfo } from "../utils/data";

const Testimonials = () => {
    return (
        <section className="bg-[#F2F2F2] w-full h-[28.1875rem]">
            <h1 className="font-semibold text-2xl text-[#1A1A1A] ml-[11.6875rem] pt-[3.75rem]">
                Client Testimonials
            </h1>
            <main className="flex justify-center w-[82.5rem] h-[15.875rem] mx-auto"> 
                {ClientInfo.map((Client, index) => ( 
                    <div
                        key={index}
                        className="w-full p-4"
                    >
                        <div className="bg-white rounded-lg shadow-md  w-[26.5rem] h-[15.875rem] mt-[4.125rem] mb-[3.75rem]">
                            <p className="text-[#4D4D4D] pt-[4.125rem] h-[5.25rem] w-[23.5rem] mx-[1.5rem]">{Client.title}</p>
                            <div className="flex items-center gap-[0.75rem] mt-24 mx-[1.5rem]">
                                <img
                                    src={Client.image}
                                    alt={Client.clientName}
                                    className=" h-[3.5rem] w-[3.5rem]"
                                />
                                <div>
                                    <p className="font-semibold">{Client.clientName}</p>
                                    <p className="text-[#999999] text-[0.875rem]">Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </section>
    );
};

export default Testimonials;