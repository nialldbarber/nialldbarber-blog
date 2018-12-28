import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'react-markdown';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
	return (
		<Layout>
			{data.graphCmsData.posts.map((blog, i) => (
				<div>
					<h2>{blog.title}</h2>
					<Markdown source={blog.description} escapeHtml={false} />
				</div>
			))}
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	{
		graphCmsData {
			posts(orderBy: createdAt_DESC) {
				id
				status
				title
				description
			}
		}
	}
`;
