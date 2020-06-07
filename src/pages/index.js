import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';
import blogH from '../images/blogHeader.jpg'

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const SubContainer =styled.div`
width: 100%;

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
  width: 90vw;
  border-radius: 5px;
  height: 70vh;
  margin-bottom: 20px;
  margin-top: 5vh;
  
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

@media screen and (max-width: 800px) {
 align-items: center;
 margin-left: 0px;
  }
`

const Posts = styled.h4`
font-size: 25px;
color: white;

background: green;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`


const CardContent =styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-left: -22vw;
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
width: 30vw;
height: auto;
border-radius: 10px;
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
margin-bottom: 20px;
color: black;
`
const ImgText = styled.h2`
color: black;
margin-left: 35%;
font-size: 40px;
@media screen and (max-width: 800px) {
font-size: 25px;
margin-left: 16%;
  }

`

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <SubContainer >
      {/* <Header>
      <Posts> {data.allMarkdownRemark.totalCount} Posts</Posts>
       </Header> */}
      <ContainImg>
      <ImgText> Welcome to Dot Blog </ImgText>
      </ContainImg>
        
     
       <CardContent>
         {
        data.allMarkdownRemark.edges.map (({node}) => (
         
          <Card key ={node.id} >
            <BlogLink to={node.fields.slug}>
            <BlogTitle>
             <p style={{'color': 'blue'}}> {node.frontmatter.title} - {node.frontmatter.date} </p>
              </BlogTitle>
            </BlogLink>
            <p style={{ 'color': 'black',}}> {node.excerpt}</p>
            <span><h4 style={{ 'color': 'black',}}>{node.frontmatter.author} {node.timeToRead} min read </h4> </span>
            <p style={{ 'color': 'black',}}> {node.wordCount.words} words</p>
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
          date
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