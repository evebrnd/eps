import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Page() {
  return (
    <div>
      <div className="flex max-h-screen min-h-screen flex-col items-center justify-center text-white py-2 bg-[url('../../public/aiMobile.jpg')] md:bg-[url('../../public/aiComputer.jpg')] bg-cover bg-center">
        <p className="text-center text-6xl font-bold bg-clip-text">Smart home device</p>
        <p className="m-2 text-center text-xl font-bold bg-clip-text">
          Lorem ipsum dolor
        </p>
        <p className="m-10 text-center text-lg">
          EPS Spring 2024
        </p>
        <button className="m-2 rounded-lg bg-blue-500 hover:bg-blue-700 p-2 px-5 text-white text-lg text-bold shadow">
          <a href={`/`} target="_blank">
            Follow the course
          </a>
        </button>

        <a
          href="#infos"
          className="absolute inset-x-0 bottom-10 flex animate-bounce flex-col flex-wrap items-center"
        >
          More informations
          <br />
          <ChevronDownIcon className="-m-2 inline-block h-10 w-10" aria-hidden="true" />
        </a>
      </div>

      <div
        id="infos"
        className="flex flex-col items-center justify-center py-2 mx-2"
      >
        <p className="text-center text-4xl font-bold pt-8">Who are we ?</p>
        <p className="text-pretty w-5/6 py-6">
          Loremp ipsum dolor sit amet, consectetur adipiscing elit. Donec
          convallis, mi et ultrices tristique, nunc metus ultricies nunc, et
          tincidunt libero libero vitae nunc. Nullam auctor, eros sit amet
          ultrices convallis, est nunc ultricies felis, in ultricies magna
          libero nec risus. Nullam auctor, eros sit amet ultrices convallis, est
          nunc ultricies felis, in ultricies magna libero nec risus. Nullam
        </p>
      </div>
    </div>
  );
}
