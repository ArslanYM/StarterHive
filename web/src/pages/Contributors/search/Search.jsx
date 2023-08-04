export default function SearchTerm({setTerm}){
    return (
        <div style={{width: "100%"}} >
            <input
                type="text"
                    onChange={(e)=>setTerm(e.target.value)}
                    className="block w-1/3 mx-auto rounded-xl border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search"
                    style={{width: "380px", maxWidth: "100%"}}
                />
            <br/>
        </div>
    )
}
