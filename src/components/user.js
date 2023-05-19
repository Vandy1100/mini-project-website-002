import React from 'react'

export default function User({image,email,name}) {
  return (
    <>
        <figure class="md:flex   bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-32 md:h-auto lg:rounded-2xl md:rounded-none rounded-full mx-auto" src={image} alt={name} width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-md font-medium">
        Tailwind CSS is the only framework that I have seen scale
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {name}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        {email}
      </div>
    </figcaption>
  </div>
</figure>
    </>
  )
}
