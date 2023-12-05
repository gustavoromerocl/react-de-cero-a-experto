describe('Pruebas en 11-async-await', () => {
  test('GetImagen debe retornar una imagen', async () => {
    const url = await getImagen();
    console.log(url);
    
    expect(typeof url).toBe('string');
  })
})