import React, { useEffect, useState } from 'react'
import Navbar from '../Pages/Navbar'
import Customaxios from '../axios/Customaxios'

function Renault() {
    const [donne,setDonne]=useState([])
    const fetchdataWithaxios=async()=>{
        const data1=await Customaxios.get('voitures')
        const filterdata= data1.data.filter(item=>item.category=='Reneaut')
        setDonne(filterdata)
    }
    useEffect(()=>{
        fetchdataWithaxios();
    },[])
  return (
    <div>
      <div className="">
        <Navbar/>
        <div className="text-center text-3xl font-semibold font-serif"> Renault</div>
        <div className="flex justify-center">
                {donne.map(item=><>
              <div className="flex justify-between">
                <img src=  {item.ImageS2} alt="" className='flex h-[200px] w-[200px]'/>
              </div>
                </>)}
        </div>
      </div>
    </div>
  )
}

export default Renault
