import profile from "../src/assets/images/avatar-jessica.jpeg";

export default function App() {
  return (
    <div className="font-inter bg-stone-950 h-screen w-screen absolute px-6 text-gray-200">
      <div className="bg-stone-800 rounded-xl p-4 mt-28 mx-auto max-w-md ">
        <div className="flex flex-col mx-auto my-4">
          <img src={profile} alt="avatar" className="w-24 h-24 mx-auto rounded-full mb-6" />
          <div className="mx-auto">
            <h1 className=" text-2xl font-semibold">Jessica Randall</h1>
            <h2 className="text-lime-300 font-semibold mt-2">London, United Kingdom</h2>
          </div>
          <p className="mx-auto my-8 font-thin">"Front-end developer and avid reader"</p>
          <div className="mx-auto flex flex-col">
            <button className="bg-stone-700 hover:bg-lime-300 hover:text-stone-800 duration-300 rounded-lg py-2 font-semibold mb-3 px-20">GibHub</button>
            <button className="bg-stone-700 hover:bg-lime-300 hover:text-stone-800 duration-300 rounded-lg py-2 font-semibold mb-3 px-20">Frontend Mentor</button>
            <button className="bg-stone-700 hover:bg-lime-300 hover:text-stone-800 duration-300 rounded-lg py-2 font-semibold mb-3 px-20">Linkedin</button>
            <button className="bg-stone-700 hover:bg-lime-300 hover:text-stone-800 duration-300 rounded-lg py-2 font-semibold mb-3 px-20">Twitter</button>
            <button className="bg-stone-700 hover:bg-lime-300 hover:text-stone-800 duration-300 rounded-lg py-2 font-semibold mb-3 px-20">Instagram</button>
          </div>
        </div>
      </div>
    </div>
  );
}
