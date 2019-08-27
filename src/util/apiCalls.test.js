import { fetchPeople } from './apiCalls';

describe('fetchPeople', () => {
  let mockPeople;

  beforeEach(() => {
    mockPeople = [
      { name: 'David', homeworld: 'Kamino', species: 'wookie', population: 20 },
      { name: 'Eric', homeworld: 'Tatooine', species: 'human', population: 42 }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPeople)
      });
    });

  });

  it('should call fetch with the correct URL', () => {
    fetchPeople();

    expect(fetch).toHaveBeenCalledWith('https://swapi.co/api/people/')
  });

  it('should return an array of people (HAPPY)', () => {
    fetchPeople().then(results => {
      expect(results).toEqual(mockPeople)
    })
  });

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(fetchPeople()).rejects.toEqual(Error('There was an error fetching the people.'))
  });

  it.only('should throw an error if the Promise rejects(SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'Whoops! Looks like there was an issue.'
      });
    });

    expect(fetchPeople()).rejects.toEqual(Error('Whoops! Looks like there was an issue.'))
  });
});