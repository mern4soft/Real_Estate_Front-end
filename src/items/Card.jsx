import React from 'react';

function Card(props) {
  const { data } = props;

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item) => (
        <div key={item._id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="w-full h-48 bg-blue-gray-200/25 flex items-center justify-center">
            <img src={item.propertyImage} alt={item.propertyName} className="object-cover h-full w-full" />
          </div>
          <div className="border-t border-gray-200 bg-blue-gray-400 text-center p-4">
            <h1 className="text-xl font-semibold mb-2">{item.propertyName}</h1>
            <h2 className="text-lg font-medium mb-4">${item.propertyPrice}</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
