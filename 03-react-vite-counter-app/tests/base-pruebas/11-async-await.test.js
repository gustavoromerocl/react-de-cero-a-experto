import { getImagen } from "../../../02-javascript-moderno/src/bases/11-async-await";

describe('Pruebas en 11-async-await', () => {
  test('GetImagen debe retornar una imagen', async () => {
    const url = await getImagen();
    
    expect(typeof url).toBe('string');
  })
})