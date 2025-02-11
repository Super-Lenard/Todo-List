import Instructions from "./Instructions";

function TodoList (props) {
    return (
        <div className="flex flex-col items-center min-h-screen justify-center bg-gray-100 p-4">
            <h1 className="text-2x1 font-bold mb-4">TODO LIST</h1>
            <ul className="w-full max-w-md"> 
                <div>
                    <li className="flex items-center justify-left p-2 border-b-1 mb-2">
                        <input type="checkbox" className="mr-2"/>
                        <span className="flex">{props.content1}</span>
                    </li>
                </div>
                <div>
                    <li className="flex items-center justify-left p-2 border-b-1 mb-2">
                        <input type="checkbox" className="mr-2"/>
                        <span className="flex">{props.content2}</span>
                    </li>
                </div>
                <div>
                    <li className="flex items-center justify-left p-2 border-b-1 mb-2">
                        <input type="checkbox" className="mr-2"/>
                        <span className="flex">{props.content3}</span>
                    </li>
                </div>
                <div>
                    <li className="flex items-center justify-left p-2 border-b-1 mb-2">
                        <input type="checkbox" className="mr-2"/>
                        <span className="flex">{props.content4}</span>
                    </li>
                </div>
            </ul>
                <div className="ml-74  flex gap-4">
                 <button className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600">Add</button>
                 <button className="bg-red-500 text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-600">Delete</button>  
                </div>

                   <Instructions/>
                
        </div>
    )
}

export default TodoList;