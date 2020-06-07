import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from 'styled-components';

const Container = styled.div`
color: #f1faee;
`






export default ({ data }) => {
const post = data.markdownRemark;
return (
    <Layout>
        <SEO title= {post.frontmatter.description} />
    <Container>
    
    <h1> {post.frontmatter.title}</h1>
    <h3> {post.frontmatter.author}  {post.timeToRead} min read</h3>
    <p> {post.frontmatter.description}</p>
    <div dangerouslySetInnerHTML ={{ __html: post.html }} />
    <p> {post.wordCount.words} words</p>
    </Container>
    </Layout>
)
}

export const query = graphql `
query($slug: String!){
    markdownRemark( fields: { slug: {eq: $slug }}) {
    html
    timeToRead
    frontmatter {
        title
        description
        author
    }
    wordCount {
        words
      }
    }
    }
`

