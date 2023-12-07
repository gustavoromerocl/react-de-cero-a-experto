import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en el Counter <CounterApp />', () => {
  const initValue = 10;
  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={initValue} />);
    expect(container).toMatchSnapshot();
  })

  test('Debe mostrar el valor inicial de 100 <CounterApp value={100}/>', () => {
    const { container } = render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  })
})