import React from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './css/post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';


export const Post = ({name,description,message,photo}) => {
  return (
    <div className='potsmain'>
        <div className='post__header'>
            <div className='post__headerleft'>
        <Avatar src={photo}/>
        <div className='post_profile_detail'>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
            </div>
           <MoreHorizIcon/>
        </div>
        <div className='post_body'>
            <p>{message}</p>
        </div>
        <div className='post__footer'>
            <div className='post__option'>
                    <ThumbUpIcon/>
                    <span>like</span>   
            </div>
                <div className='post__option'>
                    <CommentIcon/>
                    <span>Comment</span>   
                </div>
                <div className='post__option'>
                    <ShareIcon/>
                    <span>Share</span>   
                </div>
                <div className='post__option'>
                    <SendIcon/>
                    <span>Share</span>   
                </div>
        </div>
    </div>
  )
}

export default Post
