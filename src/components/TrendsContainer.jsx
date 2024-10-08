import React from 'react'

const TrendsContainer = () => {
    const boxInfo = [
        {
            id: 1, 
            title: "Resolved",
            amount: "449" 
        },
        {
            id: 2, 
            title: "Received",
            amount: "426" 
        },
        {
            id: 3, 
            title: "Average first response time",
            amount: "33m" 
        },
        {
            id: 4, 
            title: "Average response time",
            amount: "3h 8m" 
        },
        {
            id:5, 
            title: "Resolution within SLA",
            amount: "94%" 
        }
    ]

  return (
    <div className='bg-white border-[2px] border-[#DFE0EB] rounded-[8px] flex mb-[30px]'>
        <div className='p-[32px] flex justify-between w-[70%] border-r-[2px] border-r-[#DFE0EB]'>
            <div>
                <h2 className='text-[#252733] text-[19px] leading-[23px font-bold mb-[8px]'>Today’s trends</h2>
                <p className='text-[#9FA2B4] text-[12px] leading-[16px]'>as of 25 May 2019, 09:41 PM</p>
            </div>
            <div className='flex gap-[32px]'>
                <div className='flex text-center gap-2 items-center h-[70px]'>
                    <hr className='border-t-[2px] border-[#3751FF] w-[16px]'/>
                    <p className='text-[#9FA2B4] text-[12px] leading-[15px]'>Today</p>    
                </div>
                <div className='flex text-center gap-2 items-center h-[70px]'>
                    <hr className='border-t-[2px] border-[#DFE0EB] w-[16px] ' />
                    <p className='text-[#9FA2B4] text-[12px] leading-[15px]'>Today</p>    
                </div>
            </div>
        </div>
        <div className='w-[30%]'>
            {boxInfo.map(item => (
            <div key={item.id} className='text-center items-center p-8 border-b-[#DFE0EB] border-b-[2px]'>
                <h2 className='text-[16px] leading-[22px] text-[#9FA2B4] mb-[6px] font-bold'>{item.title}</h2>
                <h2 className='text-[24px] leading-[30px] text-[#252733] font-bold'>{item.amount}</h2>
            </div>))}
        </div>
      </div>
  )
}

export default TrendsContainer
