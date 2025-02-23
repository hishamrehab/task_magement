"use client";
import ButtonComponent from '@/components/ButtonComponent'
import { useRouter } from 'next/navigation';
const HpmePage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 gap-8">
      <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-100">Welcome to the To-Do App</h1>
      <p className='text-xl text-gray-300'>Manage You Task Checklist Easily</p>
      <ButtonComponent onClick={()=> router.push("/todo")} color="primary" size="lg"className="mt-6 text-bold text-xl">   Go to To-Do Page <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</ButtonComponent>
    </div>
  )
}

export default HpmePage
