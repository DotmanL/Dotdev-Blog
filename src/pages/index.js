import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import blogH from "../images/blogHeader.jpg"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const SubContainer = styled.div`
  width: 100%;
  font-family: "Niconne", cursive;
  display: flex;
  border-bottom: 2px solid orange;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    background: none;
  }
`
const ContainImg = styled.div`
  background-image: url(${blogH});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  height: 100vh;

  @media screen and (max-width: 800px) {
    background-size: cover;
    width: 100vw;
    height: 70vh;
  }
`

const Header = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  margin-top: 10px;
  @media screen and (max-width: 800px) {
    align-items: center;
    margin-left: 0px;
  }
`

const Posts = styled.h4`
  font-size: 25px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-flow: row wrap;
  width: 85vw;
  margin-top: -25px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-left: 6vw;
    width: 85vw;
    margin-top: -35px;
  }
`

const Card = styled.div`
  background: #f1faee;
  width: 35vw;
  height: 300px;
  border-radius: 10px;
  margin-top: 15px;
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
  :hover {
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 800px) {
    display: flex;
    width: 80vw;
    height: auto;
    margin-top: 15px;
  }
`

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 5px;
  height: auto;
  color: black;
  /* :hover {
    border-bottom: 2px solid orange;
    border-radius: 9px;
  } */
`

const Title = styled.h3`
  font-size: 32px;
  font-weight: 620;
`

const PostDate = styled.h4`
  font-size: 20px;
  font-weight: 620;
  padding: 0px 5px;
  margin-top: -12px;
  color: black;
`
const ImgText = styled.h2`
  color: #17141d;
  display: flex;
  font-size: 60px;
  font-family: "Lobster", cursive;

  @media screen and (max-width: 800px) {
    font-size: 25px;
  }
`
const ImgP = styled.p`
  font-size: 20px;
  text-align: center;
  background: wheat;
  color: #17141d;
  font-family: "Lobster", cursive;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    width: 75vw;
  }
`

const Ot = styled.div`
  font-family: "Niconne", cursive;
  margin-bottom: -30px;
  color: black;
`

const Ex = styled.p`
  width: 95%;
  margin: 10px auto;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <SubContainer>
      <ContainImg>
        <ImgText> Welcome to Dot Dev Blog </ImgText>
        <ImgP>
          Get to Read Blog Posts about technological trends and tutorials on Web
          Development
        </ImgP>
      </ContainImg>
      <Header>
        <Posts> {data.allMarkdownRemark.totalCount} Posts</Posts>
      </Header>

      <CardContent>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogLink to={node.fields.slug}>
            <Card key={node.id}>
              <BlogTitle>
                <Title>{node.frontmatter.title}</Title>
              </BlogTitle>
              <PostDate>{node.frontmatter.date}</PostDate>
              <Ot>
                <Ex> {node.excerpt}</Ex>
                <span>
                  {node.frontmatter.author} {node.timeToRead} min read{" "}
                </span>
                <p> {node.wordCount.words} words</p>
              </Ot>
            </Card>
          </BlogLink>
        ))}
      </CardContent>
    </SubContainer>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            date(formatString: "dddd, MMMM Do YYYY")
            description
            title
            author
          }
          fields {
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
