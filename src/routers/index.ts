import { Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi, { serveWithOptions } from 'swagger-ui-express';
import userRouter from './users.router';
import SwaggerOption from '~/lib/config/swagger';

const swaggerDocument = swaggerJsdoc(SwaggerOption);

const route = (app: Express) => {
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

	app.use('/api/user', userRouter);
};

export default route;
