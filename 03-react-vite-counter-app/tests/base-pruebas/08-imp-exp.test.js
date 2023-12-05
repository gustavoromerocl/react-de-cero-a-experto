import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroByID debe retornar un héroe por id', () => {
    const id = 1;
    const hero = getHeroeById(id)
  })

  expect(hero).toEqual({
    id: 1,
    name: 'Batman',
    owner: 'DC'
  })

  describe('getHeroByID debe retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroById(id);

    expect(hero).toBeFalsy();
  })

  test('GetHeroesByOwner debe retornar heroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC'
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC'
      },
    ]);

    expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner))
  });

  test('GetHeroesByOwner debe retornar heroes de Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
})

