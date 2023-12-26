import { render, screen } from '@testing-library/react';
import Jeux from '.';
import { HttpResponse, http } from 'msw';
import { server } from '../../../tests/mocks/server';
import { JeuType } from '../../models/jeuType';

test('Afficher les jeux', async () => {
  const liste: JeuType[] = [
    {
      nom: 'Jeu 1',
      type: 'Aventure',
      date_de_sortie: '01-01-2023',
    },
    {
      nom: 'Jeu 2',
      type: 'Action',
      date_de_sortie: '02-01-2023',
    },
  ];

  server.use(http.get('http://fakeapi/jeux', () => HttpResponse.json(liste)));

  render(<Jeux />);

  expect(await screen.findByText('Jeu 1')).toBeInTheDocument();
  expect(await screen.findByText('Jeu 2')).toBeInTheDocument();
});
