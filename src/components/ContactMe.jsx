import React from 'react'

const ContactMe = () => {
  return (

    <>
    <div className="mx-auto p-96 mx-w-lg bg-blue-400">
<h3 className="bg-blue-400 font-extrabold text-4xl text-white text-center mt-4"> Contact Me</h3>
        <form className="space-y-8">
        <div className="flex flex-col mt-8">
            <label> Name </label>
            <input type="text" name="text" className="py-1 rounded-lg outline-none focus:ring ring-gray-200"/>
        </div>
        <div className="flex flex-col">
            <label> Email </label>
            <input type="email" name="text" className="py-1 rounded-lg outline-none focus:ring ring-gray-200 "/>
        </div>
        <div className="flex flex-col">
            <label> Message </label>
            <textarea type="text" name="text"  className="py-1 rounded-lg outline-none focus:ring ring-gray-200 "> </textarea>
        </div>

        <div className="flex justify-end">
            <input type="submit" value="Submit" className="rounded-lg bg-white p-2 font-semibold text-black"/>
        </div>
    </form>
    </div>
    </>
  )
}

export default ContactMe