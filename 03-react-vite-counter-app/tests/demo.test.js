describe('Pruebas en <DemoComponent />', () => {
  test('Esta prueba no debe de fallar', () => {
    // 1. Inicialización
    const message1 = 'Hola mundo';
  
    // 2. Estimulo
    const message2 = message1.trim();
  
    // 3. Observar el comportamiento
    expect(message1).toBe(message2);
  })
})

