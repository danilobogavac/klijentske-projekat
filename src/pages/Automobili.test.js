import React from 'react';
import { render } from '@testing-library/react';
import CarListing from './CarListing';

// Mockujemo useState funkciju.
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useEffect: jest.fn()
}));

// Mockujemo carData.
jest.mock('../assets/data/carData', () => [
  { id: 1, name: 'Car 1', price: 10000 },
  { id: 2, name: 'Car 2', price: 20000 },
  // Dodajte više automobila prema potrebi.
]);

describe('CarListing component', () => {
  beforeEach(() => {
    // Resetujemo mockove pre svakog testa.
    jest.clearAllMocks();
  });

  test('sorts cars by price in ascending order', () => {
    // Mockujemo useState kako bismo imali kontrolu nad sortiranim automobilima.
    const setState = jest.fn();
    const useStateMock = (initState) => [initState, setState];
    React.useState = jest.fn(useStateMock);

    // Rendujemo komponentu.
    const { getByText, getAllByTestId } = render(<CarListing />);

    // Simuliramo odabir opcije "Cena rastuće" iz dropdown-a.
    getByText('Cena rastuće').click();

    // Proveravamo da li je setState pozvan sa pravilnim sortiranim automobilima.
    expect(setState).toHaveBeenCalledWith([
      { id: 1, name: 'Car 1', price: 10000 },
      { id: 2, name: 'Car 2', price: 20000 }
    ]);
  });

  // Dodajte još testova prema potrebi za ostale scenarije.
});
