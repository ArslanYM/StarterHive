export default function SearchTerm({ setTerm }) {
  return (
    <div className="w-full mx-2">
      <div className="w-full lg:w-[60%] mx-auto">
        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
        <br />
      </div>
    </div>
  );
}
