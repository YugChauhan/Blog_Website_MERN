import { React, useState } from "react";
import { ImCross } from "react-icons/im";

function CreatePost() {
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  const deleteCategory = (i) => {
  let updatedcats = [...cats];
  updatedcats.splice(i, 1); // Add '1' as the second parameter to specify the number of elements to remove
  setCats(updatedcats);
};
  const addCategory = () => {
    let updatedcats = [...cats];
    updatedcats.push(cat);
    setCat("");
    setCats(updatedcats);
  };

  return (
    <div className="px-6 md:px-[50px] mt-8">
      <h1 className="font- bold md: text-2xl text-x1 px-3 md:px-[10px]">
        Create a post
      </h1>
      <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
        <input
          type="text"
          placeholder="Enter post title"
          className="px-4 py-2 outline-none"
        />
        <input type="file" className="px-4" />
        <div className="flex flex-col">
          <div className="flex items-center space-x-4 md:space-x-8">
            <input
              onChange={(e) => setCat(e.target.value)}
              className="px-4 py-2 outline-none"
              placeholder="Enter post category"
              type="text"
            />
            <div
              onClick={addCategory}
              className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
            >
              Add
            </div>
          </div>
          <div className="flex px-4 mt-4 mb-6">
            {cats?.map((c,i) => (
              <div
                key={i}
                className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
              >
                <p>{c}</p>
                <p
                   onClick={() => deleteCategory(i)}
                  className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                >
                  <ImCross />
                </p>
              </div>
            ))}
          </div>
        </div>

        <textarea
          rows={5}
          cols={30}
          className="px-4 py-2 outline-none"
          placeholder="Enter Post Description"
        />
        <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg mt-2">
          Create
        </button>       
      </form>
    </div>
  );
}

export default CreatePost;
