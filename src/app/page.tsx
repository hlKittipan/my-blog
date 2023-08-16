import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=" ">
      <div className="container h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">
            Welcome to NextJS Collapsible Sidebar Tutorial
          </h1>
        </div>
      </div>
    </div>
  )
}
