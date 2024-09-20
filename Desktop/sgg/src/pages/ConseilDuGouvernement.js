import React, { useState } from 'react';

const ConseilDuGouvernement = () => {
  const data = [
    { date: '12/09/2024', downloadLink: '/link-to-download' },
    { date: '29/08/2024', downloadLink: '/link-to-download' },
    // more data
  ];
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un numéro ou une date de BO..."
        className="border border-gray-300 px-4 py-2 my-2"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left">تاريخ معين المؤتمر</th>
            <th className="py-3 px-4 text-left">تحميل</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(item => item.date.includes(searchTerm)).map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-4">{item.date}</td>
              <td className="py-3 px-4">
                <a href={item.downloadLink} className="text-blue-500 hover:text-blue-600">
                  Télécharger
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConseilDuGouvernement;
