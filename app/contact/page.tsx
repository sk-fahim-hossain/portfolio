import Footer from '@/components/ui/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




export default function Contact() {

    return (
        <div>
            <section className='py-[100px]'>
                <div className='max-w-7xl w-full mx-auto md:px-[20px] container mt-[100px]'>
                    <div className='form-main-wrapper grid grid-cols-6 gap-[40px] '>
                        <div className=' col-span-4 form p-5 border border-blue-500/50 rounded-lg shadow-blue-500/50 shadow-md'>
                            <form action="">
                                <div className='space-y-5'>
                                    <div className='flex flex-row gap-4'>
                                        <div className='w-full'>
                                            <label>Name</label>
                                            <input type="text" placeholder='Your name..' className='px-[20px] mt-[5px]  py-[15px] w-full rounded-xl outline-1 outline-blue-500/50 border border-blue-500/50 backdrop-blur-[2px]' />
                                        </div>
                                        <div className='w-full'>
                                            <label>Email</label>
                                            <input type="text" placeholder='Your name..' className='px-[20px] mt-[5px]  py-[15px] w-full rounded-xl outline-1 outline-blue-500/50 border border-blue-500/50 backdrop-blur-[2px]' />
                                        </div>

                                    </div>
                                    <div className='w-full'>
                                        <label>Subject</label>
                                        <input type="text" placeholder='Your name..' className='px-[20px] mt-[5px]  py-[15px] w-full rounded-xl outline-1 outline-blue-500/50  border border-blue-500/50 backdrop-blur-[2px]' />
                                    </div>
                                    <div>
                                        <label>Message</label>
                                        <textarea className='min-h-[200px] w-full mt-[10px] rounded-md p-[20px] border border-blue-500/50 outline-blue-500/50' placeholder='Enter your message' name="description" id=""></textarea>
                                    </div>
                                </div>
                                <button type="submit" className='px-5 py-2 bg-blue-800/50 rounded-md mt-[10px]'>Submit</button>
                            </form>
                        </div>

                        <div className='col-span-2 form-right-part '>
                            <div>
                                <Image className='rounded-md' src={'/contact-cover.jpg'} alt='bg-img' width={500} height={300} />
                            </div>
                            <Link href="mailto:fahimhossainjob1@gmail.com">
                                <div className="email-content w-full p-[20px] bg-slate-50 text-black mt-[30px] rounded-lg cursor-pointer hover:bg-slate-100 transition">
                                    <h3 className="mb-[10px] font-semibold">Email</h3>
                                    <p>fahimhossainjob1@gmail.com</p>
                                </div>
                            </Link>

                            <Link href="tel:+8801760032662">
                                <div className="email-content w-full p-[20px] bg-slate-50 text-black mt-[30px] rounded-lg cursor-pointer hover:bg-slate-100 transition">
                                    <h3 className="mb-[10px] font-semibold">Phone</h3>
                                    <p>+88 0176-0032-662</p>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}
