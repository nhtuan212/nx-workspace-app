// import Db from '../config/database';
// import { QueryTypes, Sequelize } from 'sequelize';
// import { API } from '../config/constants';
// import db from '../models';
// import { User, User2 } from '../models/MenuModel';

export default new (class HomeController {
    /// [GET]/
    index = async (req: any, res: any) => {
        // const { statusCode } = res;
        // // await User.sync();
        // const sequelize = new Sequelize(process.env.PUBLIC_DATABASE, 'root', '', {
        // 	host: 'localhost',
        // 	dialect: 'mysql',
        // });
        // const users = await sequelize.query('SELECT * FROM `table_product`', {
        //     type: QueryTypes.SELECT,
        // });
        // // const User2 = await sequelize.query('SELECT * FROM `table_product`', {
        // // 	type: QueryTypes.SELECT,
        // // });
        // const data = User2;
        // console.log('All data:', JSON.stringify(data, null, 2));
        // const sql = 'SELECT * FROM table_product limit 0,5';
        // Db.query(sql)
        //     .then(data => {
        //         switch (statusCode) {
        //             case API.STATUS_CODE.SUCCESS:
        //                 res.status(statusCode).json({
        //                     message: API.MESSAGE.PRODUCT_LIST_SUCCESS,
        //                     type: API.TYPE.SUCCESS,
        //                     status: statusCode,
        //                     data,
        //                 });
        //                 break;
        //             default:
        //                 res.status(statusCode).json({
        //                     status: statusCode,
        //                 });
        //                 break;
        //         }
        //     })
        //     .catch((err: any) => {
        //         throw err;
        //     });
    };
})();
