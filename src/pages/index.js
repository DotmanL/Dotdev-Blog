import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';


import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"


const BlogLink =styled(Link)`
text-decoration: none;
`

const BlogTitle = styled.h3 `
margin-bottom: 20px;
color: black;
`
const Card = styled.div`
background: #f1faee;
color: white;
width: 40vw;
height: auto;
border-radius: 10px;
display: flex;
padding: 10px 15px;
flex-direction: column;
justify-content: space-evenly;
margin-right: auto;
margin-left: auto;
margin-top: 30px;
`

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div >
       <h4 style={{ 'marginLeft': '40vw',}}> {data.allMarkdownRemark.totalCount} Posts</h4>
      
         {
        data.allMarkdownRemark.edges.map (({node}) => (
          <Card key ={node.id} >
            <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p style={{ 'color': 'black',}}> {node.excerpt}</p>
            <span><h4 style={{ 'color': 'black',}}>{node.frontmatter.author} {node.timeToRead} min read </h4> </span>
            <p style={{ 'color': 'black',}}> {node.wordCount.words} words</p>
          </Card>
        
        ))}
 
    </div>
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