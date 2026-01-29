import React, { useState } from "react";
import { X } from 'lucide-react';
const App = () => {
  const [title, setTitle] = useState("");

  const [details, setDetails] = useState("");
const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)

    setTitle("");
    setDetails("");
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  p-10 lg:w-1/2 gap-5 items-start  flex-col "
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="p-5 py-2 w-full font-medium  border-2 outline-none rounded"
          value={title}
          onChange={(e) => 
            setTitle(e.target.value)
          }
        />
        <textarea
          type="text"
          className="p-5 py-2 h-32 w-full font-medium border-2 outline-none rounded"
          placeholder="Write Details"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }
          }
        />
        
        <button
         className="bg-white active:scale-95 active:bg-gray-300 font-medium w-full outline-none text-black px-5 py-2 rounded">

          Add Notes
        </button>
      </form>

      <div className="  lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap justify-start items-start mt-5 gap-3 h-full overflow-auto">
         
      {task.map(function(elem,idx){

        return <div key={idx} className="relative h-75 w-52 bg-cover rounded-2xl py-8 px-4 bg-[url('https://i.pinimg.com/736x/81/ae/49/81ae49f28c812a79dd8bcd847419300c.jpg')] text-black">
          <h2 className="absolute top-5 right-5 bg-red-500 p-1 text-xs rounded-full"><X /></h2>
          <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
          <p className="text-sm mt-2 leading-tight font-medium text-gray-500">
            {elem.details}</p>
        </div>
      })}

          <img
            className="h-75  rounded-2xl overflow-auto flex"
            src="https://i.pinimg.com/736x/24/90/2c/24902c56c166329f01fbf421c6f2197f.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default App;
