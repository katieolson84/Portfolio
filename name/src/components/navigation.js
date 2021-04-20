import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`

  nav{
    background-color: black;
    position: fixed;
    width: 100%;
  }
  .nav-tags{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  a{
    color: white;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    display: flex;
    margin: 1%;
    font-size: 1.8rem;
  }
`
const navigation = () => {
    return (
        <Navigation>
            <nav clasName="nav">
                <div className="nav-tags">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="https://github.com/katieolson84">Code</a>
                </div>
        </nav>
        </Navigation>
    )
}
export default navigation;