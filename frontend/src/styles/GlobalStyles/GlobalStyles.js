import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,::before,::after{
    padding:0;
    margin:0;
    box-sizing:border-box;
    list-style:none;
}
:root{
    --max-w: 1300px;
    --icon-size: 25px;
    --h-header: 80px;
    --color-ui: #BAF000;
    --color-light: #efefef;
    --color-dark: #191919
    --regular: 300;
    --semibold: 600;
    --bold: 800;
    --radius: 8px;
}

//colores por ahora
body{
    font-family: 'Poppins', sans-serif;
    color: var(--color-dark);
    background-color: var(--color-light);

}

a{
    text-decoration: none;
    color: inherit;
}

img{
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    height: 100%;
}
`

export default GlobalStyles
