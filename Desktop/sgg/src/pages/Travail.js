import axios from 'axios';
import React, { useState, useEffect } from 'react';

const itemsPerPage = 5;

const Travail = () => {
  const [bulletins, setBulletins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Base URL for file access
  const fileBaseUrl = 'http://localhost:8081/';

  useEffect(() => {
    const themeName = encodeURIComponent('Travail et Emploi');

    axios.get(`http://localhost:8081/api/doc/theme/${themeName}`)
      .then(response => {
        setBulletins(response.data);  // Set the bulletins received from the backend
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching bulletins: ", err);
        setError('An error occurred while fetching the data.');
        setLoading(false);
      });
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bulletins.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(bulletins.length / itemsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Bulletins de Travail et Emploi</h2>

      {/* Centering the timeline */}
      <div className="relative border-l-2 border-gray-300 pl-8 mx-auto" style={{ maxWidth: '600px' }}>
        {currentItems.map((bulletin) => (
          <div key={bulletin.id} className="mb-12 flex items-center justify-between">
            {/* Date Section */}
            <div className="bg-white shadow-lg rounded-full w-24 h-24 flex flex-col items-center justify-center text-blue-500 border border-gray-300 text-center font-semibold">
              <p className="text-2xl">{new Date(bulletin.dateDepot).getDate()}</p> {/* Extracting day */}
              <p className="text-sm">{new Date(bulletin.dateDepot).toLocaleString('fr-FR', { month: 'long' })}</p> {/* Extracting month */}
              <p className="text-sm">{new Date(bulletin.dateDepot).getFullYear()}</p> {/* Extracting year */}
            </div>

            {/* Description and Link */}
            <div className="ml-8 flex-1 text-right">
              <p className="text-xl font-medium text-gray-700 mb-2">{bulletin.titre}</p>
              <div className="flex space-x-4 justify-end">
                <a href={fileBaseUrl + bulletin.file} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800 font-medium transition-colors">
                  Télécharger
                </a>
                <a href={fileBaseUrl + bulletin.file} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800 font-medium transition-colors">
                  Voir
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8">
        <p className="text-sm text-gray-600 mr-4">
          Affichage de {indexOfFirstItem + 1} à {indexOfLastItem > bulletins.length ? bulletins.length : indexOfLastItem} sur {bulletins.length} éléments
        </p>
        <ul className="flex space-x-2">
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              className={`py-1 px-3 border rounded-md ${
                currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'bg-white text-blue-600 hover:bg-blue-500 hover:text-white transition-all'
              }`}
              disabled={currentPage === 1}
            >
              Précédent
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i}>
              <button
                onClick={() => paginate(i + 1)}
                className={`py-1 px-3 border rounded-md ${
                  currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-500 hover:text-white transition-all'
                }`}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              className={`py-1 px-3 border rounded-md ${
                currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : 'bg-white text-blue-600 hover:bg-blue-500 hover:text-white transition-all'
              }`}
              disabled={currentPage === totalPages}
            >
              Suivant
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Travail;
