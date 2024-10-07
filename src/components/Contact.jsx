import Swal from 'sweetalert2'
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "../constants/neon.css"
function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9e62e656-a74c-47a2-8253-f169ff0f355a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

const alert = () => {
  Swal.fire({
    html: `
    
  `, 
    background: "#212529",
    customClass: {
    title: 'custom-title',
    }
  });
  
  // Tambahkan CSS kustom
  const customStyle = document.createElement('style');
  customStyle.innerHTML = `
    .custom-title {
      color: #00FFFF;
    }
    .custom-icon {
      color: #00FFFF;
    }
  `;
  document.head.appendChild(customStyle);
}

  return (
    <div className="  pb-6 w-full lg:mg-35 bg-neutral-900 ">
      <div className=" text-center text-4xl pt-5 ml-16 pr-14">
        Contact me
        <div className="flex flex-wrap justify-center mt-8 sm:w-full">
          <div className=" py-14 pr-8 w-557px">
           
              <div className="flex">
                <div className="p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 relative">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-700 to-cyan-400 opacity-75 blur-xl animate-pulse"></div>
                  <div className="relative items-center ">
                    <FaLocationDot className="text-yellow-500 text-6xl" />
                  </div>
                </div>
                <div className="ml-5">
                  <h6 className=" max-w-xl font-extrabold text-left text-4xl">Address</h6>
                  <p className="max-w-xl text-left text-sm">Ujung Bandar,Kec. Rantau Selatan, Kabupaten Labuhanbatu, Provinsi
                    Sumatera Utara</p>
                </div>
              </div>
              <div className="flex my-16">
                <div className="p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 relative">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-700 to-cyan-400 opacity-75 blur-xl animate-pulse"></div>
                  <div className="relative items-center ">
                    <FaPhone className="text-yellow-500 text-6xl" />
                  </div>
                </div>
                <div className="ml-5">
                  <h6 className=" max-w-xl font-extrabold text-left text-4xl">Phone</h6>
                  <p className="max-w-xl text-left text-sm">0888-0710-4961</p>
                </div>
              </div>
              <div className="flex">
                <div className=" ">
                  <div className="p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 relative">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-700 to-cyan-400 opacity-75 blur-xl animate-pulse"></div>
                    <div className="relative items-center ">
                      <MdOutlineMail className="text-yellow-500 text-6xl" />
                    </div>
                  </div>
                </div>
                <div className="ml-5">
                  <h6 className=" max-w-xl font-extrabold text-left text-4xl">Email</h6>
                  <p className="max-w-xl text-left text-sm">Iqbalzitus99@gmail.com</p>
                </div>
              </div>
           
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-700 to-cyan-400 opacity-75 blur-xl animate-pulse"></div>
            <div className="relative items-center ">
              <form onSubmit={onSubmit} action="" className="flex flex-col space-y-4">
                <div>
                  <input type="text" name="name" placeholder="Your name" className="ring-1 bg-neutral-900 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                </div>
                <div>
                  <input type="text" name="phone" placeholder="Phone Number" className="ring-1 bg-neutral-900 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                </div>
                <div>
                  <input type="text" name="subject" placeholder="Subject" className="ring-1 bg-neutral-900 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                </div>
                <div>
                  <input type="text" name="email" placeholder="Your Email" className="ring-1 bg-neutral-900 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                </div>
                <div>
                  <textarea  placeholder="Your Message" name="message" className="ring-1 bg-neutral-900 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                </div>
              
              <button onClick={alert} onSubmit={onSubmit} className="neon mt-5">send</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact


