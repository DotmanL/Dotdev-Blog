import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Navbar from "../components/Navbar/Navbar"

const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: 20px auto;
  @media screen and (max-width: 800px) {
    width: 85vw;
  }
`
const Title = styled.h1`
  color: black;
  font-size: 35px;
  margin-top: 90px;
  border-bottom: 2px solid #dcdcdd;
  border-radius: 8px;
  @media screen and (max-width: 800px) {
    font-size: 25px;
    margin-top: 60px;
  }
`
const Post = styled.h3`
  color: black;
  font-size: 24px;
  text-align: justify;
  font-weight: 400;
`
const Tr = styled.p`
  margin-top: -20px;
`
const Au = styled.h3`
  margin-top: -10px;
`
const Dr = styled.p`
  border-radius: 8px;
  border-bottom: 2px solid #dcdcdd;
  border-top: 2px solid #dcdcdd;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Navbar homepage={false} />
      <SEO title={post.frontmatter.description} />
      <Container>
        <Title> {post.frontmatter.title}</Title>
        <Au> Written by {post.frontmatter.author} </Au>
        <p>{post.frontmatter.date}</p>
        <Tr>{post.timeToRead} min read</Tr>
        <Dr> • {post.frontmatter.description} •</Dr>
        <Post dangerouslySetInnerHTML={{ __html: post.html }} />
        <p> {post.wordCount.words} words</p>
      </Container>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        description
        author
        date(formatString: "dddd, MMMM Do YYYY")
      }
      wordCount {
        words
      }
    }
  }
`
