import HomeRouter from './home';
import MenuRouter from './menu';

export const route = (app: any) => {
    app.use('/', HomeRouter);
    app.use('/menu', MenuRouter);
};
