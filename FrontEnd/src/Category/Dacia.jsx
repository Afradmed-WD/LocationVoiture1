import React, { useEffect, useState } from 'react'
import Navbar from '../Pages/Navbar'
import Customaxios from '../axios/Customaxios'

function Dacia() {
    const [donne,setDonne]=useState([])
    const fetchdataWithaxios=async()=>{
        const data1=await Customaxios.get('voitures')
        const filterdata= data1.data.filter(item=>item.category=='Dacia')
        setDonne(filterdata)
    }
    useEffect(()=>{
        fetchdataWithaxios();
    },[])
  return (
    <div>
      <div className="">
        <Navbar/>
        <div className="text-center text-3xl font-semibold font-serif"> Dacia</div>
        <div className="grid grid-cols-3 gap-8 mt-5">
                {donne.map(item=><>
              <div className=" bg-gray-50 gap-10 border border-gray-200 rounded-xl shadow-xl p-2">
                <img src=  {item.ImageS2} alt="" className='flex  justify-center items-center h-[200px] w-[200px]'/>
                <h1 className='text-center font-semibold'>{item.title}</h1>
              </div>
                </>)}
        </div>
      </div>
    </div>
  )
}

export default Dacia
