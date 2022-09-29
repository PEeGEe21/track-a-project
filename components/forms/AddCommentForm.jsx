import React, { useState } from 'react'

const AddCommentForm = ({handleSendComment, active_task}) => {
    const [comment, setComment] = useState("");
    // console.log(comment)

    const submitComment = (e) =>{
        e.preventDefault();

        if(comment.length > 0){
            handleSendComment({comment, active_task});
            console.log(active_task)

            setComment("")
        }
    }
  return (
    <>
        <input className='border border-gray-400 rounded h-12 focus:outline-none pl-1 grow' type="text" placeholder='Add a comment' onChange={(e)=>setComment(e.target.value)} value={comment}/> <button className='bg-blue-400 text-white p-3 rounded hover:bg-blue-600 transition duration-200 ease-in-out' onClick={(e)=>submitComment(e)}>Send</button>
    </>
  )
}

export default AddCommentForm