import React from 'react';
import { useNavigate } from 'react-router-dom';

// Logos for themes (replace with actual paths to your images)
import politiqueLogo from '../assets/politique.png';
import economieLogo from '../assets/economie.jpg';
import santeLogo from '../assets/sante.jpg';
import justiceLogo from '../assets/justice.png';
import travailLogo from '../assets/travail.png';
import habitatLogo from '../assets/Habitat.png';
import agricultureLogo from '../assets/Agriculture.png';
import environnementLogo from '../assets/Environment.png';

const themes = [
  // { id: 1, name: 'Politique', path: '/politique', logo: politiqueLogo },
  { id: 2, name: 'Économie et Finances', path: '/economie', logo: economieLogo },
  { id: 3, name: 'Santé', path: '/santé', logo: santeLogo },
  { id: 4, name: 'Justice et Droit', path: '/justice', logo: justiceLogo },
  { id: 5, name: 'Travail et Emploi', path: '/travail', logo: travailLogo },
  { id: 6, name: 'Habitat et Urbanisme', path: '/habitat', logo: habitatLogo },
  { id: 7, name: 'Agriculture et Peche', path: '/agriculture', logo: agricultureLogo },
  { id: 8, name: 'Environnement et Développement Durable', path: '/environnement', logo: environnementLogo },
];

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">Bienvenue au Royaume du Maroc</h1>
        <p className="mt-6 text-xl">Secrétariat Général du Gouvernement</p>
      </header>

      {/* Themes Section with clickable boxes */}
      <section className="container mx-auto mt-16 px-4 mb-16"> {/* Added mb-16 here */}
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Explorer les Thèmes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {themes.map((theme) => (
            <div
              key={theme.id}
              onClick={() => handleNavigate(theme.path)}
              className="cursor-pointer bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gradient-to-r from-gray-100 to-gray-50 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center">
                <img
                  src={theme.logo}
                  alt={`${theme.name} logo`}
                  className="h-20 w-20 mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-700">{theme.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
