import styled from 'styled-components';

const res = {
    mobile : '@media(max-width: 768px)'
}

export const ContentWrap = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap : 20px;
    margin : 20px auto;

    ${res.mobile}{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }
`

export const MyPageWrapper = styled.div`
    width : 1000px;
    margin : 20px auto;

    ${res.mobile}{
        width : 100%;
        margin : 20px auto;
    }
`

export const TextBold = styled.strong`
  color: ${props => props.color};
`

export const Card = styled.div`
    padding: 2.5rem 2rem;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, .5);
    max-width: 500px;
    box-shadow: 0 0 30px rgba(0,0,0, .15);
    margin: 1rem;
    position: relative;
    transform-style: preserve-3d;
    overflow: hidden;
`;

export const Img = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    
    img {
        max-width: 50%;
        margin-left : 2rem;
        border-radius: 50%;
        width: 4rem;
        min-width: 1rem;
        max-height: 64px;
    }
    div {
        font-size : .8rem;
    }
`;

export const Logo = styled.div`
`

export const Infos = styled.div`
    margin-left: 1rem;
    h2 {
        font-size: 1.3rem;
    }
    h4 {
        font-size: .8rem;
        color: #333;
    }
`;

export const Text = styled.p`
    font-size: .9rem;
    margin: 1rem;
`;

export const Stats = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 1rem;
`;

export const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    button {
        border: none;
    }
`;