import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect(testUser).toEqual(user);
  })

  describe('GetUsuarioActivo debe retornar un objeto', () => {
    const name = 'Gustavo'

    const user = getUsuarioActivo(name)
    expect(user.name).toStrictEqual(name);
  })
})