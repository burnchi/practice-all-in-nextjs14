import Image from 'next/image'
import img1 from '@/public/1.png'
import Link from 'next/link'

export default function Home() {
  const postItems = [
    {
      title: "post1",
      desc: "this is post1",
      url: "/1.png"
    },
    {
      title: "post2",
      desc: "this is post2",
      url: "/2.png"
    },
    {
      title: "post3",
      desc: "this is post3",
      url: "/3.png"
    },
  ]
  return (
    <div className=' flex flex-col gap-5'>
      <div className='w-1/2 h-[300px] relative'>

        <Image src={img1} fill alt='pic' priority
          className=' object-cover object-top animate-picmove'
        />
      </div>
      <h1>表单</h1>
      <div className=''>
        <h1 className='text-[60px] text-[#484848] font-semibold'>Let's Keep in Touch</h1>
        <form className=' w-full flex flex-col gap-5'>
          <input type="text" placeholder="name" className=' p-5 bg-transparent  outline-none text-[#bbb] border-[3px] border-solid border-[#bbb] text-[20px] font-bold' />
          <input type="text" placeholder="email" className=' p-5 bg-transparent  outline-none text-[#bbb] border-[3px] border-solid border-[#bbb] text-[20px] font-bold' />
          <textarea
            className=' p-5 bg-transparent  outline-none text-[#bbb] border-[3px] border-solid border-[#bbb] text-[20px] font-bold resize-none h-[200px] '
            placeholder="message"
          ></textarea>
          <button className='p-5 bg-[#53c28b] border-none rounded-[5px] w-max text-white'>Send</button>
        </form>
      </div>

      <h1>背景图像</h1>
      <div className='flex gap-12'>
        <Link href="/portfolio/illustrations" className="border-[5px]
         border-solid border-[#bbb] rounded-[5px] w-[300px] h-[400px]
          relative bg-cover bg-center bg-[url('/4.png')] hover:text-[#53c28b]  
        ">
          <span className=' absolute right-1 bottom-2 text-[30px] font-semibold'>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className="border-[5px]
         border-solid border-[#bbb] rounded-[5px] w-[300px] h-[400px]
          relative bg-cover bg-center bg-[url('/2.png')] hover:text-[#53c28b]  
        ">
          <span className=' absolute right-1 bottom-2 text-[30px] font-semibold'>Websites</span>
        </Link>
        <Link href="/portfolio/application" className="border-[5px]
         border-solid border-[#bbb] rounded-[5px] w-[300px] h-[400px]
          relative bg-cover bg-center bg-[url('/3.png')] hover:text-[#53c28b]  
        ">
          <span className=' absolute right-1 bottom-2 text-[30px] font-semibold'>Application</span>
        </Link>
      </div>

      <h1>左右图片布局</h1>
      <div className='w-3/4'>
        <h1 className="text-[#53c28b]">category</h1>
        {
          postItems.map((item, inx) => 
          <div className=" flex  
          odd:flex-row-reverse space-y-5
          " key={inx}>
            <div className="w-1/2 flex flex-col gap-5 
             justify-center px-5  ">
              <h1 className="text-[50px]">{item.title}</h1>
              <p className="text-[20px]">{item.desc}</p>
              <button className='p-5 bg-[#53c28b] border-none rounded-[5px] w-max text-white '>see more</button>
            </div>
            <div className="w-1/2 h-[300px] relative">
              <Image
                className=" object-cover"
                fill={true}
                src={item.url}
                alt="pic"
              />
            </div>
          </div>
          )
        }
      </div>
      <div className='h-[50vh]'>

      </div>
    </div>
  )
}
