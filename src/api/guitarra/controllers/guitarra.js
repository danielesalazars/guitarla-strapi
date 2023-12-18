"use strict";

/**
 * guitarra controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

//module.exports = createCoreController('api::guitarra.guitarra'); ORIGINAL

module.exports = createCoreController(
  "api::guitarra.guitarra",
  ({ strapi }) => ({
    async findOne(ctx) {
      //console.log(ctx.params);
      const { id } = ctx.params;
      const entity = await strapi.db
        .query("api::guitarra.guitarra")
        .findOne({ where: { url: id } });

      //console.log(entity);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
