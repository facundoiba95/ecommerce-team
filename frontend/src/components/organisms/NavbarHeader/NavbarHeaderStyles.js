import styled from "styled-components";

export const NavbarContainerStyles = styled.header`
width:100%;
height:80px;
position:sticky;
top:0;
background-color:#f5f5f5;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;


.barsIcon, .closeIcon{
    display:none;
    width:25px;
    height:25px;
    cursor: pointer;
}

@media (max-width:850px) {
    .barsIcon{
        display:${props => props.isOpenMenu ? 'none' : 'block'};
    }

    .closeIcon{
        display:${props => props.isOpenMenu ? 'block' : 'none'};
    }
}
`

export const NavbarListStyles = styled.ul`
display:flex;
justify-content:center;
align-items:center;
gap:10px;

@media (max-width:850px) {
    position: absolute;
    flex-direction:column;
    width:100%;
    height:${props => props.isOpenMenu ? '200px' : '0'};
    opacity:${props => props.isOpenMenu ? '1' : '0'};
    visibility:${props => props.isOpenMenu ? 'visible' : 'hidden'};
    backdrop-filter: blur(10px);
    background-color:#f5f5f520;
    top:80px;
    left:0;
    transition:all 0.2s ease-in-out;
}
`

export const NavbarItemStyle = styled.li`
font-family:'Poppins';
font-weight:600;
cursor: pointer;
`

export const IconsHeaderContainerStyles = styled.span`
width:30%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
gap:10px;

.iconHeader{
    width:30px;
    height:30px;
    cursor:pointer;
}


`

export const LogoHeaderStyle = styled.img`
width:50px;
height:50px;
object-fit:cover;
cursor:pointer;
`

