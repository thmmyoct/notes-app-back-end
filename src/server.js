/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable no-multi-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-spacing */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
/* eslint-disable key-spacing */
/* eslint-disable brace-style */
/* eslint-disable linebreak-style */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable no-console */

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
 
