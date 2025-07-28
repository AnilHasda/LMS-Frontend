"use client"
import { AddCourseForm } from '@/app/admincomponents/shared/AddCourseForm';
import React, { useEffect } from 'react'
import useFetchData from '@/app/hooks/FetchData'
import { ClipLoader } from 'react-spinners'
import CourseCard from '@/app/components/course/CourseCard';
const Courses = () => {
  let {getData,result,loading,responseError}=useFetchData();
  useEffect(() => {
      (async () => {
        await getData("/course/");
      })();
    }, []);
    useEffect(()=>{

      console.log({courseDetail:result?.data?.courses});
    },[result])
  if (loading)
    return (
      <div className="h-full w-full grid place-content-center">
        <ClipLoader />
      </div>
    );
  if (responseError)
    return (
      <div className="grid place-content-center text-red-500 mt-10 font-bold">
       {responseError?.data?.message ? responseError.data.message : "something went wrong, please try again later"}
      </div>
    );
  return (
    <div>
      <AddCourseForm />
      <div className='w-full flex flex-wrap gap-10 justify-center'>
       {result.data ? result?.data?.courses?.map((ele:any)=>{
        return <CourseCard key={ele.id} courseData={ele} />
        })
        :
        <div>data is not available</div>
      }
      </div>
    </div>
  )
}

export default Courses
