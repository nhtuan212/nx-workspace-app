import HomeRouter from './home';
import NewsRouter from './news';

export const route = (app: any) => {
    app.use('/', HomeRouter);
    app.use('/news', NewsRouter);
};
