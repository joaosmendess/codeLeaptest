import { fetchJobs } from '../redux/types/fetchJobs';
import {   IJob } from '../redux/types/index';
import PostCard from '../components/PostCard';
import { Container, Content, Header } from "../components/PostCard/style";
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

    console.log( jobs.map((job) => {job.created_datetime}));
    
   
  
    return (
      <>
        {jobs.map((job) => (
          <PostCard  
            key={job.id}
            id={job.id}
            
            username={job.username}
            title={job.title}
            content={job.content}     
            created_datetime={job.created_datetime}  
               />
            
        ))}
      </>
    );
  };
  
  export default PostCardContainer;
  