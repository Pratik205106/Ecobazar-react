import { HiOutlineMapPin } from "react-icons/hi2"
import { LiaPhoneVolumeSolid } from "react-icons/lia"
import { TfiEmail } from "react-icons/tfi"


const ContactInfoBox = () => {
  return (
    <div>
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
    </div>
  )
}

export default ContactInfoBox;