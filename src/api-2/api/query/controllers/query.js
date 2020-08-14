"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async feedback(ctx) {
    const { id } = ctx.params;
    const { value } = ctx.request.body;
    // const value = "positive";\
    strapi.log.debug(" Feedback Endpoint Pinged");
    strapi.log.debug("id : " + id + " | value : " + value);
    strapi.log.debug(strapi);

    return strapi.services.query
      .findOne({ id })
      .then((query) => {
        query.user_feedback = value;
        return strapi.services.query
          .update({ id }, query)
          .then((updatedQuery) => {
            return sanitizeEntity(updatedQuery, { model: strapi.models.query });
          });
      })
      .catch((err) => {
        console.log("error", err);
        return "error";
      });
    // const query = await strapi.services.query.findOne({ id });
    // strapi.log.debug(query);
    // query.feedback = value;
    // const updatedValue = await strapi.services.query.update({ id }, query);
    // return sanitizeEntity(updatedValue, { model: strapi.models.query });
  },

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.author = ctx.state.user.id;
      entity = await strapi.services.query.create(data, { files });
    } else {
      ctx.request.body.author = ctx.state.user.id;
      entity = await strapi.services.query.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.query });
  },
};
