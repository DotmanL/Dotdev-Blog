import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';
import blogH from '../images/blogHeader.jpg'

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const SubContainer =styled.div`
width: 100%;
font-family: 'Niconne', cursive;
display: flex;
border-bottom: 2px solid orange;
flex-direction: column;
align-items:center;
padding: 10px 20px;
@media screen and (max-width: 800px) {
    display: flex;  
    width: 100%;   
    background: none; 
  }
`
const ContainImg =styled.div`
background-image: url(${blogH});
background-size: cover;
  background-repeat: no-repeat;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  border-radius: 5px;
  height: 70vh;
  margin-bottom: 20px;
  margin-top: 3vh;
  
@media screen and (max-width: 800px) {
  background-size: cover;
    background-position: center;
    width: 95vw;
    height: 60vw;
 }
`

const Header= styled.div`
display: flex;
flex-direction: column;
margin-top:-10px;
@media screen and (max-width: 800px) {
 align-items: center;
 margin-left: 0px;
  }
`

const Posts = styled.h4`
font-size: 25px;
color: white;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`


const CardContent =styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
flex-flow: row wrap;
width: 85vw;
@media screen and (max-width: 800px) {
  display: flex;
flex-direction: column;
margin-left: 6vw;
width: 85vw;
  }
`


const Card = styled.div`
background: #f1faee;
width: 35vw;
height: auto;
border-radius: 10px;
margin-top: 15px;
display: flex;
padding: 10px 15px;
flex-direction: column;
  @media screen and (max-width: 800px) {
  display: flex;
width: 80vw;
height: auto;
margin-top: 15px;
  }
`



const BlogLink =styled(Link)`
text-decoration: none;
`

const BlogTitle = styled.h4 `
margin-bottom: 10px;
align-items: center;
display: flex;
height: 45px;
flex-direction: column;
color: #17141d;
font-family: Arial, Helvetica, sans-serif;
font-weight: bolder;
:hover{
  border-bottom: 2px solid orange;
border-radius: 9px;
}
`
const ImgText = styled.h2`
color: #17141d;
font-size: 40px;
font-family: 'Lobster', cursive;

@media screen and (max-width: 800px) {
font-size: 25px;
  }

`
const ImgP =styled.p`
font-size: 20px;
text-align: center;
background: wheat;
margin-top: -20px;
color: #17141d;
font-family: 'Lobster', cursive;
@media screen and (max-width: 800px) {
font-size: 15px;
width: 75vw;
  }
`

const Ot = styled.div`
font-family: 'Niconne', cursive;
margin-bottom: -30px;
color: black;
`

const Ex = styled.p`
width: 95%;
margin: 10px auto;
`

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <SubContainer >
     
      <ContainImg>
      <ImgText> Welcome to Dot Dev Blog </ImgText>
      <ImgP>Get to Read Blog Posts about technological trends and tutorials on Web Development</ImgP>
      </ContainImg>
      <Header>
      <Posts> {data.allMarkdownRemark.totalCount} Posts</Posts>
       </Header>
     
       <CardContent>
         {
        data.allMarkdownRemark.edges.map (({node}) => (
         
          <Card key ={node.id} >
            <BlogLink to={node.fields.slug}>
            <BlogTitle>
             <p style={{'color': 'blue'}}> {node.frontmatter.title}</p> 
             <p style={{'color': 'blue', 'marginTop': '-18px'}}> {node.frontmatter.date} </p>
              </BlogTitle>
            </BlogLink>
            <Ot>
            <Ex> {node.excerpt}</Ex>
            <span><h4>{node.frontmatter.author} {node.timeToRead} min read </h4> </span>
            <p > {node.wordCount.words} words</p>
            </Ot>
          </Card>
         
        ))}
  </CardContent>
    </SubContainer>
  </Layout>
)

export const query = graphql`
query {
  allMarkdownRemark(sort : {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        timeToRead
        frontmatter {
         date (formatString: "dddd, MMMM Do YYYY")
          description
          title
          author
        }
        fields{
          slug
        }
        wordCount {
          words
        }
        html
        excerpt
    
      }
      
    }
  }
}


`