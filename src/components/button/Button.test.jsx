import {render, screen} from '@testing-library/react'
import Button from './Button'
import userEvent from "@testing-library/user-event";

describe('<Button /> component', () => {
  it('it should render', () => {
    render(<Button />)
    screen.getByRole('button')
  })

  it('it should render with text', () => {
    render(<Button text="Login"/>)
    screen.getByText(/login/i)
  })

  it('it should pass onClick if button is clicked', () => {
    const handlerClick = jest.fn()
    render(<Button handlerClick={handlerClick} text="Login"/>)
    userEvent.pointer([{keys: '[MouseLeft]', target: screen.getByRole('button')}])
    expect(handlerClick).toHaveBeenCalled()
  })

  it('snapshot button', () => {
    const handlerClick = jest.fn()
    const btn = render(<Button handlerClick={handlerClick} text="Log out" styles="btn-custom"/>)
    expect(btn).toMatchSnapshot()
  })

  it('snapshot button empty', () => {
    const btn = render(<Button />)
    expect(btn).toMatchSnapshot()
  })
})