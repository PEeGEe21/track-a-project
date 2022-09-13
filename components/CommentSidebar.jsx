import React from 'react'

const CommentSidebar = () => {
  return (
    <>
        <div className='overflow-y-auto h-full no-scrollbar pb-20 px-3'>

            <div className="text-right mt-2  flex items-center justify-end">
                <button className="bg-blue-600 text-white h-8 w-8 flex items-center justify-center rounded-full p-2" onClick={()=>{setCommentSideBar(false)}} ><CloseIcon/></button>
            </div>
            <div className="py-4">
                <div>
                    <div className='flex flex-col gap-1 mb-4 relative'>
                        <h1 className='  text-xl font-bold'>Edit HomePage</h1>
                        <span className='text-[#6c7293] text-sm'>Peegee, 3 days ago</span>
                    </div>

                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab dolorem harum expedita excepturi Officiis ....</p>
                </div>

                <div className='mt-9'>
                    <h3 className='font-normal text-base underline mb-3'>Comments</h3>

                    <div className=' relative'>
                        
                        <div className='mb-4'>
                            <div className='flex items-start justify-start gap-2'>
                                <img src="/images/avatar-1.png" alt="" className='w-12 h-12'/>
                                <div className=' flex flex-col'>
                                    <div className='flex items-center justify-start flex-row grow gap-2'>
                                        <h4 className='my-0'>Peegee</h4>
                                        <span className='text-[#6c7293] text-xs'>3 days ago</span>
                                    </div>
                                    

                                    <p className='mb-2 text-justify text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam modi soluta blanditiis hic quos ullam, fugiat voluptates, repellat non debitis aut perspiciatis numquam </p>

                                    <div>
                                    {/* <li className="bullet" ></li> */}
                                        <span className='flex items-center gap-2' aria-hidden="true">• <span className='text-xs'>Reply</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <div className='flex items-start justify-start gap-2'>
                                <img src="/images/avatar-1.png" alt="" className='w-12 h-12'/>
                                <div className=' flex flex-col'>
                                    <div className='flex items-center justify-start flex-row grow gap-2'>
                                        <h4 className='my-0'>Peegee</h4>
                                        <span className='text-[#6c7293] text-xs'>3 days ago</span>
                                    </div>
                                    

                                    <p className='mb-2 text-justify text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam modi soluta blanditiis hic quos ullam, fugiat voluptates, repellat non debitis aut perspiciatis numquam </p>

                                    <div>
                                    {/* <li className="bullet" ></li> */}
                                        <span className='flex items-center gap-2' aria-hidden="true">• <span className='text-xs'>Reply</span></span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
        <div className='fixed w-full bottom-0 right-0 bg-gray-100 py-3 px-2 flex justify-between gap-2 z-[1001] h-auto'>     
            <input className='border border-gray-400 rounded h-12 focus:outline-none pl-1 grow' type="text" placeholder='Add a comment'/> <button className='bg-blue-400 text-white p-3 rounded hover:bg-blue-600 '>Send</button>
        </div>
    </>
    
  )
}

export default CommentSidebar