import React from 'react'

const Boxes = () => {
    const tickets = [
        {
            id: 1, 
            title: "Waiting on Feature Request",
            amount: "4238"
        },
        {
            id: 2, 
            title: "Awaiting Customer Response",
            amount: "1005"
        },
        {
            id: 3, 
            title: "Awaiting Developer Fix",
            amount: "914"
        },
        {
            id: 4, 
            title: "Pending",
            amount: "281"
        },
    ]

  return (
    <div className='flex justify-between items-centerw'>
    <div className='w-[45%] bg-white border-[#DFE0EB] border-[2px] rounded-[8px] items-center'>
        <div className='flex justify-between p-8'>
            <div>
                <h2 className='text-[19px] leading-[23px] text-[#252733] mb-[8px]'>Unresolved tickets</h2>
                <p className='text-[#9FA2B4] text-[12px] leading-[15px]'>Group: <span className='text-[#252733] text-[12px] leading-[15px]'>Support</span></p>
            </div>
            <p className='text-[#3751FF] text-[14px] leading-[20px] cursor-pointer'>View details</p>
        </div>
        {tickets.map(item => (
        <div key={item.id} className='justify-between flex border-b-[2px] border-[#DFE0EB] px-[32px] py-[18px]'>
            <p className='text-[#252733] text-[14px] leading-[20px]'>{item.title}</p>
            <p className='text-[#9FA2B4] text-[14px] leading-[20px]'>{item.amount}</p>
        </div>))}
    </div>

    <div className='w-[45%] bg-white border-[#DFE0EB] border-[2px] rounded-[8px] items-center'>
        <div className='flex justify-between p-8'>
            <div>
                <h2 className='text-[19px] leading-[23px] text-[#252733] mb-[8px]'>Unresolved tickets</h2>
                <p className='text-[#9FA2B4] text-[12px] leading-[15px]'>Today</p>
            </div>
            <p className='text-[#3751FF] text-[14px] leading-[20px] cursor-pointer'>View all</p>
        </div>
        <div className='justify-between flex border-b-[2px] border-[#DFE0EB] px-[32px] py-[16px]'>
            <input className='text-[14px] leading-[20px] text-black placeholder:text-[#C5C7CD] outline-none' type="text" placeholder='Create new task' name='taskinput' />
            <button className='text-[#9FA2B4] text-[18px] bg-[#F0F1F7] rounded-[8px] px-[10px] cursor-pointer'>+</button>
        </div>
        <div className='justify-between flex border-b-[2px] border-[#DFE0EB] px-[32px] py-[16px]'>
            <div className='flex gap-[16px]'>
                <div className='w-[20px] h-[20px] rounded-[50%] border-[#C5C7CD] border-[2px] cursor-pointer'></div>
                <p className='text-[#252733] text-[14px] leading-[20px]'>Finish ticket update</p>
            </div>
            <div className='text-[11px] text-white leading-[13px] px-[12px] py-[5px] bg-[#FEC400] rounded-[8px] cursor-pointer'>
                <p>Urgent</p>
            </div>
        </div>
        <div className='justify-between flex border-b-[2px] border-[#DFE0EB] px-[32px] py-[16px]'>
            <div className='flex gap-[16px]'>
                <div className='w-[20px] h-[20px] rounded-[50%] border-[#C5C7CD] border-[2px] cursor-pointer'></div>
                <p className='text-[#252733] text-[14px] leading-[20px]'>Create new ticket example</p>
            </div>
            <div className='text-[11px] text-white leading-[13px] px-[12px] py-[5px] bg-[#29CC97] rounded-[8px] cursor-pointer'>
                <p>New</p>
            </div>
        </div>
        <div className='justify-between flex border-b-[2px] px-[32px] py-[16px]'>
            <div className='flex gap-[16px]'>
                <div className='w-[20px] h-[20px] rounded-[50%] bg-[#3751FF] border-[#3751FF] flex border-[2px] items-center justify-center text-white cursor-pointer'>✓</div>
                <p className='text-[#252733] text-[14px] leading-[20px]'>Update ticket report</p>
            </div>
            <div className='text-[11px] text-[#9FA2B4] leading-[13px] px-[12px] py-[5px] bg-[#F0F1F7] rounded-[8px] cursor-pointer'>
                <p>Default</p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Boxes
