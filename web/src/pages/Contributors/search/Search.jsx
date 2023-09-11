import search from '../../../assets/search.png';
export default function SearchTerm({ setTerm }) {
  return (
    <div className="w-[100%] flex justify-center mb-[12%] lg:mb-[5%]">
      <div className="border-yellow-400 border-2 w-fit h-10 rounded-3xl flex">
        <img src={search} alt="search" className="w-12 h-10 p-2 pl-4" />
        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          className="search block w-1/3 rounded-3xl outline-none bg-transparent border-none py-1.5 pl-1 pr-20 text-yellow-500 font-medium  placeholder:text-yellow-500 sm:text-sm sm:leading-6"
          placeholder="Search"
          style={{ width: '380px', maxWidth: '100%' }}
        />
      </div>
      <br />
    </div>
  );
}
