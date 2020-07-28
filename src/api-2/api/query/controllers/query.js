"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async feedback(ctx) {
    const { id } = ctx.params;
    const { value } = ctx.request.body;
    // const value = "positive";
    strapi.log.debug(id);
    const query = await strapi.services.query.findOne({ id });
    strapi.log.debug(query);
    query.feedback = value;
    const updatedValue = await strapi.services.query.update({ id }, query);
    return sanitizeEntity(updatedValue, { model: strapi.models.query });
  },
};
