import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'react-markdown';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
	return (
		<Layout>
			{data.graphCmsData.posts.map((blog, i) => (
				<article>
					<h2>{blog.title}</h2>
					<Markdown source={blog.description} escapeHtml={false} />
				</article>
			))}
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	{
		graphCmsData {
			posts(orderBy: createdAt_ASC) {
				id
				status
				title
				description
			}
		}
	}
`;
