import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';

describe('Footer component', () => {
  test('renders footer component correctly', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    // Check for the presence of the company name in the title
    const titleElement = screen.getByText((content, element) => 
      element.tagName.toLowerCase() === 'span' && /Rent a Car/i.test(content)
    );
    expect(titleElement).toBeInTheDocument();

    // Check for the presence of the company name in the paragraph
    const paragraphElement = screen.getByText((content, element) => 
      element.tagName.toLowerCase() === 'p' && /Rent a Car/i.test(content)
    );
    expect(paragraphElement).toBeInTheDocument();

    // Check for the presence of the "O nama" link
    expect(screen.getByText('O nama')).toBeInTheDocument();

    // Check for the presence of the "Automobili" link
    expect(screen.getByText('Automobili')).toBeInTheDocument();

    // Check for the presence of the "Blogovi" link
    expect(screen.getByText('Blogovi')).toBeInTheDocument();

    // Check for the presence of the "Kontakt" link
    expect(screen.getByText('Kontakt')).toBeInTheDocument();

    // Check for the presence of the address
    expect(screen.getByText(/Maksima Gorkog 7, Beograd, Srbija/i)).toBeInTheDocument();

    // Check for the presence of the phone number
    expect(screen.getByText(/Telefon: \+381 65 555 666/i)).toBeInTheDocument();

    // Check for the presence of the email
    expect(screen.getByText(/Email: rentacarservisbg@gmail.com/i)).toBeInTheDocument();

    // Check for the presence of the working hours
    expect(screen.getByText(/Radno vreme: 9:00 - 17:00/i)).toBeInTheDocument();
  });
});
