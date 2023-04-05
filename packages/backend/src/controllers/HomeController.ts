export default new (class HomeController {
    // [GET]/
    index = (req: any, res: any) => {
        res.render('home');
    };
})();
