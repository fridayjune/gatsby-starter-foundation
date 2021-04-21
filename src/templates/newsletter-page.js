import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '../components/CustomButtons/Button.js';

export const pageQuery = graphql`
  query NewsletterQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`

function shoot() {
  window.open("https://93d908ed-trial.flowpaper.com/CopyofNewsletter21/#page=1");
}

const NewsletterPage = ({ data }) => {
	const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

	return (
		<Layout className="page">
			<SEO
				title={frontmatter.title}
				description={excerpt}
			/>
			<div className="wrapper">
				<h1>{frontmatter.title}</h1>
				<article dangerouslySetInnerHTML={{ __html: html }} />
				<Button type="button" color="primary" onClick={shoot}>Primary</Button>
			</div>
		</Layout>
	)
}

export default NewsletterPage