const bannerModel = require('../model/Banner.model');
const eventModel = require('../model/Event.model');
const show = async (res, req) => {
    await bannerModel.readBanner( async(err, response)  => { 
         await eventModel.readEvent((err, response1) =>  {
            const resultBanner = Object.values(JSON.parse(JSON.stringify(response)));
            const resultEvent = Object.values(JSON.parse(JSON.stringify(response1)));
            res.render('index', { csrfToken: req.csrfToken(), "banner": resultBanner, 'event': resultEvent });
        })
    });
};

module.exports = { show };