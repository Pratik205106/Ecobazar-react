import { HiOutlineMapPin } from "react-icons/hi2";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";

const ContactInput = () => {
  return (
    <section className="w-full bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Contact Info Box */}
        <div className="w-full lg:w-[320px] bg-white shadow-md rounded-xl p-6 space-y-6 border border-gray-100">
          <div className="text-center space-y-2">
            <HiOutlineMapPin className="mx-auto text-[#2C742F] text-2xl" />
            <p className="text-sm text-[#1A1A1A]">
              2715 Ash Dr. San Jose, South  <br /> Dakota 83475
            </p>
          </div>
          <hr />
          <div className="text-center space-y-1">
            <TfiEmail className="mx-auto text-[#2C742F] text-2xl" />
            <p className="text-sm text-[#1A1A1A]">Proxy@gmail.com</p>
            <p className="text-sm text-[#1A1A1A]">Help.proxy@gmail.com</p>
          </div>
          <hr />
          <div className="text-center space-y-1">
            <LiaPhoneVolumeSolid className="mx-auto text-[#2C742F] text-2xl" />
            <p className="text-sm text-[#1A1A1A]">(219) 555–0114</p>
            <p className="text-sm text-[#1A1A1A]">(164) 333–0487</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full flex-1 bg-white shadow-md rounded-xl p-6">
          <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
            Just Say Hello!
          </h1>
          <p className="text-sm text-[#808080] mb-6 max-w-xl">
            Do you fancy saying hi to me or want to get started with your
            project and you need my help? Feel free to contact me.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Template Cookie"
                className="h-12 w-full px-4 border border-[#E5E5E5] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="zakirsoft@gmail.com"
                className="h-12 w-full px-4 border border-[#E5E5E5] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <input
              type="text"
              placeholder="Hello"
              className="h-12 w-full px-4 border border-[#E5E5E5] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              placeholder="Subjects"
              className="w-full h-28 px-4 py-2 border border-[#E5E5E5] rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-green-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-10 w-full h-[400px]">
        <iframe
          title="map"
          className="w-full h-full rounded-xl border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4016856786564!2d83.46014487522883!3d27.70541592428113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685dca41e0d31%3A0xa7a7ebf770fcd5b!2sBhairahawa!5e0!3m2!1sen!2snp!4v1684131846825!5m2!1sen!2snp"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactInput;
