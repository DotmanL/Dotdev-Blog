import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';


import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"


const BlogLink =styled(Link)`
text-decoration: none;
`

const BlogTitle = styled.h2 `
margin-bottom: 20px;
color: black;
`
export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
       <h4> {data.allMarkdownRemark.totalCount} Posts</h4>
      {
        data.allMarkdownRemark.edges.map (({node}) => (
          <div key ={node.id} >
            <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p> {node.excerpt}</p>
            <span><h4>{node.frontmatter.author} {node.timeToRead} min read </h4> </span>
            <p> {node.wordCount.words} words</p>
          </div>
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