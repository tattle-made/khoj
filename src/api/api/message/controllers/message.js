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

    const message = await strapi.services.message.findOne({ id });
    strapi.log.debug(message);
    message.feedback = value;

    const updatedValue = await strapi.services.message.update({ id }, message);

    return sanitizeEntity(updatedValue, { model: strapi.models.message });
  },
};
