'use strict';

/**
 * bac service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bac.bac');
