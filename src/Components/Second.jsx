import React from 'react'
import { Divider } from 'antd';

const Second = () => {
  return (
    <div className='w-screen  flex justify-center items-center py-10 overflow-x-hidden'>
        <div className='sm:flex  sm:flex-row items-center justify-center gap-12 flex-col  '>
            <div className='w-[300px] flex flex-col justify-center items-center gap-9  text-wrap mb-8'>
                <div className='centerCol'>
                    <p className="text-2xl text-blue-400 font-semibold ">Create</p>
                    <p className='text-sm'>Powerful Industry Benchmarking</p>
                </div>
                <div>
                    <img className='tulip' src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
                <div>
                <p className='truncate text-sm text-wrap'>We use your organization’s own data to provide risk intelligence<br/> on how you compare to others across your industry,<br/> helping you to stay ahead of the game.</p>
                </div>
                    
                
            </div>
            <div className='sm:block hidden'>
            <Divider type="vertical" style={{height:"500px" , color:"black",backgroundColor:"black"}}/>
            </div>
        
             <div className='w-[300px]  flex flex-col justify-center items-center gap-9'>
             <div className='centerCol'>
                    <p className="text-2xl text-blue-400  font-semibold">Achieve </p>
                    <p className='text-sm'>Achieve Business Goals</p>
                </div>
                <div>
                    <img className='tulip' src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
                <div>
                <p className='truncate text-sm text-wrap'>We use your organization’s own data to provide risk intelligence<br/> on how you compare to others across your industry,<br/> helping you to stay ahead of the game.</p>
                </div>
             </div>
  
        </div>
        

    </div>
  )
}

export default Second