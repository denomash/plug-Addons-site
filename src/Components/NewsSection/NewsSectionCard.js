import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    border-radius: 8px;
    display: flex;
    width: 285px;
    flex-direction: column;
    overflow: hidden;
`

const CardDate = styled.div`
    display: flex;
    color: #ffffff;
    position: absolute;
    top: 0;
    left:0;
    height: 65px;
    width: 65px;
    background-color: ${props => props.primary ? '#e92343': 'rgba(253, 195, 50, 1)'};
`

const Day = styled.p`
    display: flex;
    margin: 4px 0 0 2px;
    width: 50%;
    font-size: 35px;
    font-weight: 100;
    font-family: 'Open Sans',sans-serif;
`

const Month = styled.p`
    font-family: 'Lato',sans-serif;
    position: absolute;
    bottom: 2px;
    right: 3px;
    font-size: 15px;
    font-weight: 100;


`

const CardImg = styled.div`
    height: 200px;
    width: 100%;
`

const CardImage = styled.div`
    height: 100%;
    width: 100%;
    background: url(${props=> props.image}) 0px no-repeat;
    background-size: cover;

`

const CardContent = styled.div`
    background-color: ${props => props.primary ? '#e92343': 'rgba(253, 195, 50, 1)'};
`

const CardContentContainer = styled.div`
    margin: 10px 20px;
`

const Category = styled.p`
    color: #ffffff;
    font-style: italic;
    font-size: 16px;
    margin-top: 22px;
`

const Content = styled.h4`
    color: #ffffff
    font-size: 20px;
    font-family: 'Rubik', sans-serif;
`

const ReadMore = styled.p`
    color: #ffffff
    font-weight: 100;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    margin-bottom: 20px;
`

const NewsSectionCard = (props) => {
    
    
    return (
        

        <Card>
            <CardDate {...props}>
                <Day>04</Day>
                <Month>Jun</Month>
            </CardDate>
            <CardImg >
                <CardImage image={props.image} />
            </CardImg>
            <CardContent {...props}>
                <CardContentContainer>
                    <Category className='u-margin-bottom-small'>Category</Category>
                    <Content className='u-margin-bottom-small'>
                        
                        Promotion your Business worldwide and Extram
                    
                    </Content>
                    <ReadMore>Read More <span>&#8594;</span></ReadMore>
                </CardContentContainer>
                
            </CardContent>
            
        </Card>
    )
}

export default NewsSectionCard
