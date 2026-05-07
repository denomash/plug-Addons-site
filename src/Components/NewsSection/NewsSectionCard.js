import React from 'react'
import styled from 'styled-components'
import useReveal from '../../hooks/useReveal'

const Card = styled.div`
    position: relative;
    border-radius: 10px;
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 8px 22px rgba(45, 45, 45, 0.12);
    transition: transform 320ms cubic-bezier(0.22, 0.61, 0.36, 1),
        box-shadow 320ms cubic-bezier(0.22, 0.61, 0.36, 1);

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 18px 36px rgba(45, 45, 45, 0.18);
    }
`

const CardDate = styled.div`
    display: flex;
    color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    height: 65px;
    width: 65px;
    z-index: 2;
    background-color: ${(props) => (props.primary ? '#e92343' : 'rgba(253, 195, 50, 1)')};
`

const Day = styled.p`
    display: flex;
    margin: 4px 0 0 8px;
    width: 50%;
    font-size: 32px;
    font-weight: 100;
    font-family: 'Open Sans', sans-serif;
`

const Month = styled.p`
    font-family: 'Lato', sans-serif;
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-size: 14px;
    font-weight: 300;
`

const CardImg = styled.div`
    height: 200px;
    width: 100%;
    overflow: hidden;
`

const CardImage = styled.div`
    height: 100%;
    width: 100%;
    background: url(${(props) => props.image}) center/cover no-repeat;
    transition: transform 700ms ease;

    ${Card}:hover & {
        transform: scale(1.08);
    }
`

const CardContent = styled.div`
    background-color: ${(props) => (props.primary ? '#e92343' : 'rgba(253, 195, 50, 1)')};
    flex: 1;
`

const CardContentContainer = styled.div`
    padding: 18px 22px 22px;
`

const Category = styled.p`
    color: #ffffff;
    font-style: italic;
    font-size: 14px;
    margin-bottom: 8px;
    opacity: 0.9;
`

const Content = styled.h4`
    color: #ffffff;
    font-size: 18px;
    font-family: 'Rubik', 'Open Sans', sans-serif;
    line-height: 1.4;
    margin-bottom: 14px;
`

const ReadMore = styled.button`
    color: #ffffff;
    background: transparent;
    border: 0;
    padding: 0;
    font-weight: 400;
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: gap 220ms ease;

    &:hover {
        gap: 12px;
    }

    &:focus {
        outline: none;
        text-decoration: underline;
    }
`

const NewsSectionCard = (props) => {
    const ref = useReveal()

    return (
        <Card ref={ref} className='reveal' data-delay={props.delay || 0}>
            <CardDate primary={props.primary}>
                <Day>04</Day>
                <Month>Jun</Month>
            </CardDate>
            <CardImg>
                <CardImage image={props.image} />
            </CardImg>
            <CardContent primary={props.primary}>
                <CardContentContainer>
                    <Category>Category</Category>
                    <Content>Promote your Business worldwide and beyond.</Content>
                    <ReadMore>
                        Read More <span>&#8594;</span>
                    </ReadMore>
                </CardContentContainer>
            </CardContent>
        </Card>
    )
}

export default NewsSectionCard
