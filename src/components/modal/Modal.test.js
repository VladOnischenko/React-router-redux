import {render, screen} from '@testing-library/react'
import Modal from './Modal'
import Button from '../button/Button'

describe('<Modal /> component', () => {
  it('it should render without props', () => {
    render(
      <Modal >
          <Button />
          <Button />
      </Modal>)
    expect(screen.queryByRole('active')).toBeNull()
  })

  it('it should render with props', () => {
    const handlerModal = () => 'modal active'
    const onClick = jest.fn()
    render(
      <Modal  description="descr1" header="header1" price="13.55" active={handlerModal} action={onClick}>
        <Button styles="custom-btn green" text="OK" handlerClick={onClick}/>
        <Button styles="custom-btn red" text="CANCEL" handlerClick={handlerModal}/>
      </Modal>
    )
    expect(screen.getByText(/cancel/i))
    expect(screen.getByText(/ok/i))
  })
})