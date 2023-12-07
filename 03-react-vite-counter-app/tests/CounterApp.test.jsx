import { fireEvent, render, screen } from "@testing-library/react";
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

  test('Debe incrementar el valor con el boton +1', () => {
    render(<CounterApp value={initValue} />);
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText(11)).toBeTruthy();
  })

  test('Debe decrementar el valor con el boton -1', () => {
    render(<CounterApp value={initValue} />);
    fireEvent.click(screen.getByText('-1'))
    // screen.debug();
    expect(screen.getByText(9)).toBeTruthy();
  })

  test('Debe funcionar el botón reset', () => {
    render(<CounterApp value={initValue} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'))
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));

    expect(screen.getByText(10)).toBeTruthy();
  })

})