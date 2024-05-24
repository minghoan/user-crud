import swaggerJSDoc from 'swagger-jsdoc';

const SwaggerOption: swaggerJSDoc.Options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Swagger API - OpenAPI 3.0',
			version: '1.0.0',
			description: 'A simple Express Library API',
			contact: {
				name: 'Minh Hoàng',
				email: 'hoangnguye.19904@gmail.com'
			},
			license: {
				name: 'MIT',
				url: 'https://spdx.org/licenses/MIT.html'
			}
		},
		servers: [
			{
				url: 'http://localhost:3000'
			}
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					name: 'Authorization',
					type: 'http',
					scheme: 'bearer',
					in: 'header',
					bearerFormat: 'JWT'
				}
			}
		},
		security: [
			{
				bearerAuth: ['admin', 'user']
			}
		]
	},
	apis: ['./openapi/*.yaml']
};

export default SwaggerOption;
