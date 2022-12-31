import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

export default function BlogPageContent({ blog }:any) {

  

  
  return (
    <div>
      
      <div className='pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto'>
        <div className="text-black">{blog.title}</div>
       <div className="" dangerouslySetInnerHTML={{__html:blog.contentHtml }}/>
      </div>

    </div>
  );
}