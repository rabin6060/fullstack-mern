import React,{useState} from "react";


export default function Contact({closeForm}) {
  const [formData,setFormData] = useState({})
  

  const handleChange = (e) => {
    setFormData({
      ...formData,[e.target.id]:e.target.value
    })
  }
  const handleSubmit =async (e)=>{
    e.preventDefault()
    try {
      if(formData){
        const response =await fetch("/api/medic/newBooking",{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData)
        })
        const data = await response.json()
        if (data) {
          closeForm()
        }
      }
      
    } catch (error) {
      console.log(error);
    }
    
  }
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
      <div className="popup-form mt-12 absolute text-black ">
      <form className="w-80 lg:w-96 space-y-5 bg-white p-5 rounded-xl" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-semibold text-center">Book Now</h1>
          <div className="flex flex-col">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="first name."
              className="py-3 px-2 rounded-lg bg-[#d5f2ec]"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="last name."
              className="py-3 px-2 rounded-lg bg-[#d5f2ec]"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email."
              className="py-3 px-2 rounded-lg bg-[#d5f2ec]"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="phone."
              className="py-3 px-2 rounded-lg bg-[#d5f2ec]"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex space-x-5">
            <button className="px-5 py-3 bg-brightColor hover:bg-hoverColor transition duration-200 ease-in-out rounded-lg text-xl lg:text-lg text-white">Book Now</button>
            <button type="button" className="bg-backGroundColor text-white text-xl lg:text-lg px-5 py-3 rounded-lg active:bg-hoverColor" onClick={closeForm}>Close</button>
          </div>
      </form>
      </div>
    </div>
  );
}
