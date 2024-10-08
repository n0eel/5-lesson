import React from 'react'

const Containers = () => {
    // function handleActiveFunc(id, item) {
    //     const container = document.querySelector("container")
    //     container.classList.add("border-[#3751FF]")
    // }

    const containers = [
        {
            id: 1,
            title: "Unresolved",
            amount: "60",
            isActive: false
        },
        {
            id: 2,
            title: "Overdue",
            amount: "16",
            isActive: false
        },
        {
            id: 3,
            title: "Open",
            amount: "43",
            isActive: false
        },
        {
            id: 4,
            title: "On hold",
            amount: "64",
            isActive: false
        }
    ]

  return (
    <div className='container flex items-center justify-between mb-[30px]'>   
        {containers.map(item => (
        <div key={item.id} className='w-[300px] h-[150px] px-[32px] py-[24px] bg-white border-[2px] rounded-[8px] border-[#DFE0EB] cursor-pointer hover:text-[#3751FF] hover:border-[#3751FF] text-center'>
            <h2 className='text-[19px] leading-[23px] mb-[12px] font-bold text-[#9FA2B4]'>{item.title}</h2>
            <h1 className='text-[40px] leading-[50px] font-bold text-[#252733]'>{item.amount}</h1>
        </div>        
        ))}

    </div>
  )
}

export default Containers
