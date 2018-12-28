module.exports = {
	siteMetadata: {
		title: `Umm One More Time Please`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-graphql`,
			options: {
				typeName: 'GPRAPHCMS',
				fieldName: 'graphCmsData',
				url: 'https://api-euwest.graphcms.com/v1/cjq75dyq8co7c01bn8u1w7wwa/master'
			}
		},
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Source GraphCMS Example`,
				short_name: `Gatsby + GraphCMS`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#61045f`,
				display: `minimal-ui`,
				icons: [
					{
						src: `/favicon.png`,
						sizes: `192x192`,
						type: `image/png`
					}
				]
			}
		},
		`gatsby-plugin-offline`
	]
};
