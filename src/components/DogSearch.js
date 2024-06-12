import React, { useState } from 'react';

const DogSearch = () => {
  const [query, setQuery] = useState('');
  const [dogImages, setDogImages] = useState([]);
  const [error, setError] = useState('');
  const [searchMessage, setSearchMessage] = useState('');

  const handleSearch = async () => {
    try {
      const encodedQuery = encodeURIComponent(query); // Encode query
      const response = await fetch(`https://dog.ceo/api/breed/${encodedQuery}/images/random/12`);
      const data = await response.json();
      if (data.status === 'success') {
        setDogImages(data.message);
        setError('');
        setSearchMessage(`Pencarian untuk ras ${query}`);
      } else {
        setError('Ras anjing tidak terdaftar atau tidak memiliki gambar.');
        setSearchMessage('');
      }
    } catch (error) {
      setError('Terjadi kesalahan saat mengambil gambar anjing.');
      setSearchMessage('');
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Cari ras anjing..."
          className="border border-gray-300 rounded-md px-4 py-2 mr-2"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Cari
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {searchMessage && <p className="text-gray-500 mt-4">{searchMessage}</p>}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dogImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Anjing ${query}`} className="w-full h-auto" />
        ))}
      </div>
    </div>
  );
};

export default DogSearch;
