"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async latest(ctx) {
    const { language } = ctx.params;
    return strapi.services.homepage
      .find({ _limit: 1, language: language })
      .then((homepage) => {
        console.log(homepage);
        return sanitizeEntity(homepage[0], { model: strapi.models.homepage });
      })
      .catch((err) => "unexpected error");
  },
};
