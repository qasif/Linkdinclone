import React, { useState,useEffect } from 'react'
import { Avatar } from '@mui/material'
import './css/main.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Post from './Post';
import firebase from "firebase"
import { db } from './Firebase';

 const Feeds = () => {
    const [posts,setposts] =useState([])

    const  [input,setInput]=useState()


    const submitposthandler =(e)=>{
        e.preventDefault()
        db.collection('posts').add({
            name:'Qureshi Asif',
            description: 'this is test',
            message:input,
            photo:'https://im.rediff.com/cricket/2023/jan/17kohli1.jpg',
            timestamp:firebase.firestore.FieldValue.serverTimestamp()

        })
        setInput('')
    }
    useEffect(()=>{
        db.collection('posts').orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setposts(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])   

    console.log('asifheehhehheehhehee',posts)
    return (
        <div className='feedsmain'>
            <div className='feeds__input'>
                <div className='feeds__form'>
                    <Avatar src='https://t4.ftcdn.net/jpg/01/15/85/23/360_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg' />
                    <form onSubmit={submitposthandler}>
                        <input className='inp111' type='text' placeholder='start here' value={input} onChange={e=>setInput(e.target.value)} />
                        <input type='submit' />
                    </form>
                </div>
                <div className='feed__option'>
                    <div className='option1'>
                        <AddPhotoAlternateIcon style={{ color: '#70b5f9' }} />
                        <span>Photo</span>
                    </div>
                    <div className='option1'>
                        <YouTubeIcon style={{ color: '#e7fc15e' }} />
                        <span>video</span>
                    </div>
                    <div className='option1'>
                        < TodayIcon style={{ color: '#e7a33e' }} />
                        <span>Event</span>
                    </div>
                    <div className='option1'>
                        <AssignmentIcon style={{ color: '#fc9295' }} />
                        <span>Write articel</span>
                    </div>
                </div>
            </div>

     <Post name="Qureshi Asif" description="This is my linkdin Account" message="This is my first clone in React js"photo="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png"/> 
     <Post name="Rohit sharma" description="I am national cricket player" message="I am a Captian if Indain team"photo="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/rohitsharmaap-one_one.jpg?VersionId=uueL2tyfn.L2rFzgx0B7IC8qK7d5gfBh"/> 
     <Post name="Jordan Walke" description="React was created by Jordan Walke" message="This is my application"photo="https://legacy.reactjs.org/static/96565d895aa8cc115f0b86dfc7a1305b/4b190/gaearon.jpg"/> 
     <Post name="Narendra Mod" description="Prime Minister of India" message="Narendra Damodardas Modi is an Indian politician serving as the 14th and current prime minister of India since May 2014."photo="https://upload.wikimedia.org/wikipedia/commons/c/c0/Official_Photograph_of_Prime_Minister_Narendra_Modi_Potrait.png"/> 
     <Post name="Will Cathcart" description="CEO watsap" message="Live today – tomorrow is not guaranteed."photo="https://pbs.twimg.com/profile_images/1321949464228061184/40nR4mo-_400x400.jpg"/> 
        </div>
    )
}
export default Feeds
   