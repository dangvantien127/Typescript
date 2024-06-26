import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Navbar className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'>Footer with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Signed in as: <a href='#login'>Đặng Văn Tiến</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Footer
