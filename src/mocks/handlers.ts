import { delay, http, HttpResponse } from 'msw';
import json from './jeux.json';

const _delay = 0;

const handlers = [
  http.get('http://fakeapi/jeux', async () => {
    await delay(_delay);
    return HttpResponse.json(json);
  }),
];

export default handlers;
