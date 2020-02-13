import styled from 'styled-components';


    const PokeStyle = styled.div`
          width: 100%;
          margin: 0 auto;  
          display: flex;
          .text__style{
             flex: 10 5 400px;
             text-align: center;
             flex-wrap: wrap;    
             font-size: 18px;
              background: rgba(255, 255, 255, 0);
              color: #000;
              outline: none;
              padding: 1rem;
              border: none;
              border-bottom: 1px solid #000000;
              width: 100%;
              justify-content: center;
              align-items: center;
              max-width: 80%;
                &:active, &:focus, &:focus-within{
                  background: rgba(255, 255, 255, 0);
                  outline: none;
                  border-bottom: 1px solid #000000;
                }       
            }
            .button__style{
                    flex: 1 1 200px;
                    text-align: center;
                    flex-wrap: wrap; 
                    color: #FFF;
                    background: linear-gradient(-150deg, #00b89e9c 0%, #0152b5 97%), url(../static/assets/banner.png) repeat center;
                    border-radius: 50%;
                    background-size: cover;
                    display: block;
                    width: 55px;
                    height: 55px;
                    line-height: 52px;
                    font-size: 1.6rem;
                    text-decoration: none;
                    text-align: center;
                    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
                    &:hover, &:active, &:focus,  &:focus-within, &:visited{
                    background: linear-gradient(-150deg,#71e2d29c 0%,#0466de 97%);
                    } 
            }



    `;

export default PokeStyle;