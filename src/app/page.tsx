import Image from 'next/image'
import nat from '../assets/nat.jpg'
import iphone from '../assets/iPhone-XR.png'
import { InstagramIcon, PhoneCallIcon, MailIcon } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <div>
        <nav className="relative flex min-h-full flex-row items-center justify-center gap-24 bg-blue-300/30 p-6 px-10">
          <h2>Início</h2>
          <h2>Portifólio</h2>
          <h2>Contato</h2>
        </nav>
      </div>
      <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-blue-300/30 via-gray-300 to-gray-100">
        <div className="grid max-w-[920px] grid-cols-2 items-center space-x-2 p-6">
          <div className="relative flex-col space-y-2 p-6">
            <h1 className="text-center text-4xl">Lorem Ipsum</h1>
            <p className="text-justify leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse pellentesque maximus justo vel volutpat. Sed quis
              turpis scelerisque libero faucibus eleifend sed id urna. Aliquam
              tincidunt eros vel justo convallis eleifend. Aenean semper nisi
              purus, sit amet pretium tortor facilisis non. Pellentesque non
              fermentum velit, ac commodo purus. Vestibulum sed aliquam enim.
              Proin a tincidunt arcu. Quisque mattis est varius erat vehicula
              facilisis. Cras erat lorem, sagittis in tempor eget, blandit sed
              turpis. Fusce tincidunt non ligula at dictum. Cras commodo mauris
              eget finibus vulputate. Aenean ante lectus, vehicula in suscipit
              quis, sollicitudin vel erat. Aenean pretium condimentum massa,
              vitae hendrerit enim ornare eget. Nunc tincidunt et lacus congue
              euismod.
            </p>
          </div>
          <Image
            className="flex items-center justify-center rounded-full p-6"
            src={nat}
            width={550}
            height={550}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center p-6">
        <h1 className="text-center text-4xl">Portifólio</h1>
        <div className="grid max-w-[920px] grid-cols-2 items-center space-x-2">
          <Image src={iphone} width={350} height={350} alt="" />
          <p className="text-justify leading-relaxed">
            Aenean pulvinar est in dolor semper, non dictum massa faucibus. Nunc
            et justo non est hendrerit viverra. Donec id dapibus ligula, vitae
            dictum lectus. Quisque in quam id mi semper malesuada luctus sed
            ante. Duis rutrum rhoncus diam. Morbi bibendum dui egestas mi semper
            venenatis. Sed iaculis odio quam. Etiam congue nulla ac tellus
            lacinia volutpat. Ut quis accumsan leo. Ut id nisl ut dolor
            convallis finibus. Integer sit amet dui maximus, convallis arcu vel,
            laoreet elit. Mauris commodo sem leo. Nullam in diam id urna
            ultrices egestas. Ut sollicitudin non mauris quis feugiat.
            Pellentesque vulputate volutpat velit non porta. Suspendisse
            potenti.
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center space-y-6 bg-green-600 p-6">
        <h1 className="flex text-3xl">Contato</h1>

        <div className="flex flex-row justify-between gap-10">
          <a href="mailto://" className="flex gap-2">
            <MailIcon />
            E-mail
          </a>
          <a
            href="https://www.instagram.com/nataliasdesigner/"
            target="_blank"
            className="flex gap-2"
            rel="noreferrer"
          >
            <InstagramIcon />
            Instagram
          </a>

          <p className="flex gap-2">
            <PhoneCallIcon />
            Whatsapp
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-yellow-600">
        <p className="text-sm">
          2023 - Feito por{' '}
          <a href="" className="underline">
            Mateus Almeida
          </a>
        </p>
      </div>
    </main>
  )
}
