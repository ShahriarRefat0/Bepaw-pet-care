import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { GrMapLocation } from "react-icons/gr";
import toast from "react-hot-toast";

const ContactUs = () => {
  const handleContactUs = (e) => {
    e.preventDefault()

      const name = e.target.name.value
      const email = e.target.email.value
      const number = e.target.number.value
      const message = e.target.message.value

    // console.log("message", submitMessage)
    if (!email || !name || !number || !message ){
      return toast.error('Please give your info.')
    } 
    toast.success("Message submitted successfully.")
    e.target.reset();
  }
  return (
    <div className="bg-base-300 min-h-screen my-auto py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="bg-white dark:bg-[#35322f64] rounded-3xl p-10 shadow-sm">
          <h2 className="text-3xl font-bold">Let’s working together</h2>
          <p className="text-gray-600 mt-2">
            Thank you for your interest in Bepaw Pet World. We're
            excited to hear from you and discuss…
          </p>

         
          <div className="mt-10 flex items-start gap-5 pb-6 border-b">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <i className="text-orange-500 text-3xl"><IoCall /></i>
            </div>

            <div>
              <p className="text-gray-600">Call Us For Query</p>
              <p className="text-xl font-mono">(+88) 0123-456-789</p>
            </div>
          </div>

         
          <div className="mt-6 flex items-start gap-5 pb-6 border-b">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <i className="text-orange-500 text-3xl"><TfiEmail /></i>
            </div>

            <div>
              <p className="text-gray-600">Email Anytime</p>
              <p className="text-xl font-mono">contact@bepaw.com</p>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-5">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <i className="text-orange-500 text-3xl"><GrMapLocation /></i>
            </div>

            <div>
              <p className="text-gray-600">Visit Our Office</p>
              <p className="text-xl font-mono">69/A, Baridhara, Dhaka</p>
            </div>
          </div>
        </div>

      
        <div className="bg-white dark:bg-[#35322f64]  rounded-3xl p-10 shadow-sm">
          <form onSubmit={handleContactUs} className="grid grid-cols-1 md:grid-cols-2 gap-6">

           
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              className="bg-gray-100 dark:bg-[#35322f64]  rounded-full px-6 py-4 outline-none"
            />

          
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              className="bg-gray-100 dark:bg-[#35322f64]  rounded-full px-6 py-4 outline-none"
            />

           
            <input
              type="text"
              name="number"
              placeholder="Phone Number*"
              className="bg-gray-100 dark:bg-[#35322f64]  rounded-full px-6 py-4 outline-none"
            />

            
            <select className="bg-gray-100 dark:bg-[#35322f64]  rounded-full px-6 py-4 outline-none cursor-pointer">
              <option>Pet Grooming</option>
              <option>Pet Health Care</option>
              <option>Pet Products</option>
              <option>General Inquiry</option>
            </select>

          
            <textarea
              name="message"
              placeholder="Write a message*"
              className="bg-gray-100 dark:bg-[#35322f64]  rounded-3xl px-6 py-4 outline-none md:col-span-2 h-40 resize-none"
            ></textarea>

           
            <div className="md:col-span-2">
              <button className="bg-[#F8721F] text-white font-semibold px-6 py-4 rounded-3xl hover:bg-white hover:text-[#F8721F] border border-[#F8721F] transition-all duration-300">
                Submit Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
