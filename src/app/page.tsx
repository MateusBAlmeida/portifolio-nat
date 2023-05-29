import Image from 'next/image'
import nat from '../assets/nat.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <div>
        <nav className="flex flex-row p-6 px-10 gap-24 items-center justify-center bg-blue-300/30 min-h-full relative">
          <h2>Início</h2>
          <h2>Portifólio</h2>
          <h2>Contato</h2>
        </nav>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <h1>Conteúdo</h1>
      </div>

      <div className="bg-gray-300 flex flex-1 items-center justify-center">
        <div className="grid grid-cols-2 max-w-[920px] space-x-2">
          <div className="relative flex-col p-6 space-y-2">
            <h1 className="text-center text-4xl">Lorem Ipsum</h1>
            <p className="leading-relaxed text-justify">
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
            className="flex justify-center p-6 items-center rounded-full"
            src={nat}
            width={550}
            height={550}
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 flex bg-green-600 items-center justify-center">
        <h1>Contato</h1>
        <p>teste</p>
      </div>
      <div className="flex-1 flex bg-yellow-600 items-center justify-center">
        <p>
          2023 - Feito por <span>Mateus Almeida</span>
        </p>
      </div>
    </main>
  )
}
