import React, { useState, useEffect } from "react";
import Item from './Item'
import axios  from "axios";


const Frreebook = () => {
  // const filterData = list.filter((data)=> data.category ==="free")
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data)=> data.category ==="free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mb-10 mt-10'>
        <h2 className='font-bold text-2xl'>Free Offered Courses</h2>
        <p className='font-semibold text-sm mt-5 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis illum velit quis in, a corporis sit harum veniam repellendus rem aliquam eaque quidem, dicta quasi.</p>
      </div>
      <div className='flex gap-10 flex-wrap md:flex-nowrap ml-12 md:ml-0' >
{book.map((item,i)=>{
  return <Item key={i} id={item.id} name={item.name} img={item.img} desc={item.desc} category={item.category} price={item.price}   />
})}
      </div>

    </div>
  )
}

export default Frreebook
