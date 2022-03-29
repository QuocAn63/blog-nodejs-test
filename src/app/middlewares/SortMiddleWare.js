module.exports = function SortMiddleWare(req, res, next) {
    res.locals._sort = {
        enabled: false,
        order: 'default',
        by: null,
    };

    if (req.query.hasOwnProperty('_sort')) {
        // res.locals._sort.enabled = true
        // res.locals._sort.order = req.query.order
        // res.locals._sort.by = req.query.by

        Object.assign(res.locals._sort, {
            enabled: true,
            order: req.query.order,
            by: req.query.by,
        });
    }

    next();
};
