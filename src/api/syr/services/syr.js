'use strict';

/**
 * syr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::syr.syr');
