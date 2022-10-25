import { getTitle, add, sortByAge, findByName } from "@/components/myMethods";

const people = [
  { name: 'Kasia', age: 25 },
  { name: 'Maria', age: 2 },
  { name: 'Robert', age: 65 },
  { name: 'Rafal', age: 11 }
]

/**
 * Zaimplementuj metody.
 * 
 * 
 * - Obsluz scenariusze gdzies ktos przekaze undefined, stringa to zwroc pusta tablice i dodaj testy dla takich wypadkow
 */

describe("myMethods", () => {

  //ex3 test when get people arr
  describe('sortByAge', () => {

    it('should return sorted people', () => {
      expect(sortByAge(people)).toStrictEqual([
        { name: 'Maria', age: 2 },
        { name: 'Rafal', age: 11 },
        { name: 'Kasia', age: 25 },
        { name: 'Robert', age: 65 },
      ])
    })
  });

  // test when get empty string
  describe('sortByAge', () => {
    it('should return empty array', () => {
      const undefinedValue= sortByAge()
      expect(sortByAge(undefinedValue)).toStrictEqual([])
    })
  })


  describe('sortByAge', () => {
    it('it should return empty array', () => {
      const notArrValue= sortByAge({})
      expect(sortByAge(notArrValue)).toStrictEqual([])
    })
  })


//ex4
  describe('findByName', () => {
    it('should only return names starting by R', () => {
      expect(findByName(people, 'R')).toStrictEqual([
        { name: 'Robert', age: 65 },
        { name: 'Rafal', age: 11 }
      ])
    })
  });



  describe('getTitle', () => {
    it("should return title for main page", () => {
      const title = getTitle(true);
      expect(title).toBe('Welcome on the main page');
    });

    it("should return title for sub page", () => {
      const title = getTitle(false);
      expect(title).toBe('Welcome on the sub page');
    });
  })

  describe('add', () => {
    it('should return 4 for 2 +2', () => {
      expect(add(2, 2)).toBe(4);
    })

    it('should return 4 for "2" + "2"', () => {
      expect(add('2', '2')).toBe(4);
    })

    it('should return 0 for undefined + undefined', () => {
      const result = add(undefined, undefined);
      expect(result).toBe(0);
    })

    it('should return 0 for 2 + undefined', () => {
      const result = add(2, undefined);
      expect(result).toBe(0);
    })

    it('should return 0 for undefined + 2', () => {
      const result = add(undefined, 2);
      expect(result).toBe(0);
    })

    it('should return 0 for "dupa" + 2', () => {
      expect(add('dupa', 2)).toBe(0);
    })

    it('should return 0 for 2 +"dupa"', () => {
      expect(add(2, 'dupa')).toBe(0);
    })

    it('should return 0 for "dupa" +"dupa"', () => {
      expect(add('dupa', 'dupa')).toBe(0);
    })
  })
});

export { }