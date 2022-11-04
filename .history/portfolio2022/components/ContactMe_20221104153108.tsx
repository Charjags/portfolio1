import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;


  };

type Props = {}

function ContactMe({}: Props) {
    const {
         register,
         handleSubmit,
         } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:charanjagwani@live.com?subject=${formData.subject} &body=Hi, my name is ${formData.name}. ${formData.message}. Email:${formData.email}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-e-7xl px-10 justify-evenly mx-auto items-center ">
        <h3 className="pl-5 absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
        </h3>

        <div className="flex flex-col md:space-y-10 space-y-8">
            <h4 className="md:text-4xl text-2xl font-semibold text-center pt-[8rem]">
                I have got just what you need. {" "} <br />
                <span className="decoration-[#64ffda]/50 underline">Lets Talk.</span>
            </h4>
        

            <div className="space-y-10">
                <div className="flex items-center space-x-2 md:space-x-5 justify-center ">
                    <PhoneIcon className="text-[#64ffda] md:h-7 md:w-7 h-6 w-6 animate-pulse" />
                    <p className="text-xl md:text-2xl ">+19726791407</p>
                </div>
                <div className="flex items-center space-x-2 md:space-x-5 justify-center">
                    <   EnvelopeIcon className="text-[#64ffda] md:h-7 md:w-7 h-6 w-6 animate-pulse" />
                    <p className="text-xl md:text-2xl ">charanjagwani@live.com</p>
                </div>
                <div className="flex items-center space-x-2 md:space-x-5 justify-center">
                    <MapPinIcon className="text-[#64ffda] md:h-7 md:w-7 h-6 w-6 animate-pulse" />
                    <p className="text-xl md:text-2xl ">Houston, Texas</p>
                </div>
            </div>
            <form
             onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 md:w-fit mx-auto w-[20rem]"
            >
                <div className="sm:flex space-y-2 md:space-x-2 md:space-y-0" >
                    <input
                    {...register('name')}
                    placeholder="Name"
                    className="contactInput flex flex-col w-[20rem]" type="text" />
                    <input
                    {...register('email')}
                    placeholder="Email"
                    className="contactInput flex flex-col w-[20rem]" type="text" />
                </div>

                <input
                {...register('subject')}
                 placeholder="Subject"
                 className="contactInput" type="" />

                <textarea
                {...register('message')}
                placeholder="Message"
                className="contactInput" />
                <button type="submit"
                className="bg-[#64ffda] py-5 px-10 rounded-md text-black font-bold">Submit</button>
            </form>
        </div>
    </div>
  );
}

export default ContactMe