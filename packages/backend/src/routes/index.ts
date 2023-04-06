import { HomeRouter } from './home';
import { MenuRouter } from './menu';
import { CategoryRouter } from './category';
import { SeoRouter } from './seo';
import { ProductRouter } from './product';

export const route = (app: any) => {
    // Add headers before the routes are defined
    app.use((req: any, res: any, next: any) => {
        // Website you wish to allow to connect
        res.setHeader(
            'Access-Control-Allow-Origin',
            process.env.PUBLIC_FRONTEND_URL,
        );

        // Request methods you wish to allow
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        );

        // Request headers you wish to allow
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-Requested-With,content-type',
        );

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', 1);

        // Pass to next layer of middleware
        next();
    });

    app.use('/', HomeRouter);
    app.use('/category', CategoryRouter);
    app.use('/product', ProductRouter);
    app.use('/menu', MenuRouter);
    app.use('/seo', SeoRouter);
};
