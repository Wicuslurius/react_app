jest.mock('./fetchData', () => ({
  fetchData: () => ({
    read: () => [
      { id: 1, name: "Miguel Aranguren", email: "miguelo@correo.com", phone: "3188293175", website: "www.miguel_site.com" },
      { id: 2, name: "Ana Gómez" , email: "ana@correo.com", phone: "3017000808", website: "www.ana_site.com"}
    ]
  })
}));


import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  test("renders user information", () => {
    render(<App />);
    expect(screen.getByText(/Miguel Aranguren/i)).toBeInTheDocument();
    expect(screen.getByText(/miguelo@correo.com/i)).toBeInTheDocument();
    expect(screen.getByText(/3188293175/i)).toBeInTheDocument();
    expect(screen.getByText(/www.miguel_site.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Ana Gómez/i)).toBeInTheDocument();
    expect(screen.getByText(/ana@correo.com/i)).toBeInTheDocument();
    expect(screen.getByText(/3017000808/i)).toBeInTheDocument();
    expect(screen.getByText(/www.ana_site.com/i)).toBeInTheDocument();
  });
});