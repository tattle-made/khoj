"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      console.log("post create");
      console.log(result);
      console.log(data);
      const queryId = result["_id"];
      data = {
        type: "text",
        text: {
          heading: "Thank you for sending us your query.",
          byline:
            "Our team is looking into your request now. Please give us 3-5 business days to get back to you.",
        },
        queries: [queryId],
      };
      const response = await strapi.services.response.create(data);
      console.log(response);
    },
  },
};
