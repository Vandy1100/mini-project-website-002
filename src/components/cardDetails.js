import React from 'react'

export default function CardDetails({image,description,title}) {
  return (
    <>  
<a href="#" class="flex flex-col lg:h-72 lg:w-4/6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full lg:h-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </div>
</a>

    </>
  )
}
