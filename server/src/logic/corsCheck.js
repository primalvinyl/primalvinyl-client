const cors = require('cors');

module.exports = () => {
    const corsWhitelist = process.env.cors_origin ? process.env.cors_origin.split(',') : [];
    const corsOptions = {
        origin: (origin, callback) => {
            if (corsWhitelist.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        optionsSuccessStatus: 200
    }

    return cors(corsOptions);
};
