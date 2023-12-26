import { useEffect, useState } from 'react';
import { JeuType } from '../../models/jeuType';
import './Jeux.scss';

function App() {
  const [jeux, setJeux] = useState<JeuType[]>();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://fakeapi/jeux');
      setJeux(await response.json());
    })();
  }, []);

  if (!jeux) {
    return null;
  }

  return (
    <table className="jeux">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Genre</th>
          <th>Date de sortie</th>
        </tr>
      </thead>
      <tbody>
        {jeux.map((jeu) => (
          <tr key={jeu.nom}>
            <td>{jeu.nom}</td>
            <td>{jeu.type}</td>
            <td>{jeu.date_de_sortie}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
