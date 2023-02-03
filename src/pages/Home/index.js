import React from 'react'
import styled from 'styled-components'

const Navbar = styled.ul`
    margin: 10px;
`

const List = styled.li`
    color: #fff;    
`

const Item = styled.a`

`

const index = () => {
  return (
    <>
        <Navbar>
            <List>
                <Item>Home</Item>                
            </List>
            <List>
                <Item>About</Item>                
            </List>
            <List>
                <Item>Service</Item>                
            </List>
            <List>
                <Item>Works</Item>                
            </List>
            <List>
                <Item>Journey</Item>                
            </List>
            <List>
                <Item>Blog</Item>                
            </List>
            <List>
                <Item>Contact</Item>                
            </List>
        </Navbar>     
    </>
  )
}

export default index
