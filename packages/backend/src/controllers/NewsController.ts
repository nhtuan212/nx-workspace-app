export default new (class NewsController {
    /// [GET]/news
    index = (req: any, res: any) => {
        res.render('news');
    };
})();
