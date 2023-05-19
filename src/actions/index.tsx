import { fetchJobs } from '../redux/types/fetchJobs';
import {   IJob } from '../redux/types/index';
import PostCard from '../components/PostCard';
import { Container, Content, Header, media } from "../components/PostCard/style";
import React, { useEffect, useState } from 'react';

const PostCardContainer: React.FC   = () => {
    const [jobs, setJobs] = useState<IJob[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      setLoading(true);
      fetchJobs(10)
        .then((data) => {
          setJobs(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }


    const maxPostsToShow = media.small ? 2 : jobs.length;

    console.log(
      jobs.map((job) => {
        const formattedDatetime = job.created_datetime.replace(
          /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/,
          '$3/$2/$1 $4:$5'

        );
        return formattedDatetime
        
      })
    );
    
    
   
  
    return (
      <>
        {jobs.slice(0, maxPostsToShow).map((job) => (
          <PostCard  
            key={job.id}
            id={job.id}
            
            username={job.username}
            title={job.title}
            content={job.content}     
            created_datetime={job.created_datetime.replace(/T|:\d{2}(\.\d+)?Z/g, ' ').replace(/-/g, '/')}  
               />
            
        ))}
      </>
    );
  };
  
  export default PostCardContainer;
  