import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('debe validar el titulo', () => {
  const title = 'Hola soy gustavo';
  test('debe hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  })

  test('debe hacer match con el snapshot', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title).toBeTruthy());
  })

  test('Debe validar el título en un h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHtml).toContain(title);
  })

  test('Debe de mostrar el subtitulo enviado por props', () => {
    const subTitle = 'hello world';
    render(<FirstApp
      title={title}
      subTitle={subTitle}
    />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  })
})