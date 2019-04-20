'use strict'
/** @type {typeof import('@conceptho/adonis-service-layer/src/services/Service')} */
const { Service } = use('Conceptho/Services')

class User extends Service {
    static get ModelName () {
        return 'App/Models/User'
    }

    static get hasModel () {
        return true
    }
    /**
    * Creates and persists a new entity handled by this service in the database.
    *
    * @param {Object} param
    * @param {Model} param.model Model instance
    * @param {ServiceContext} param.trx Knex transaction
    */
    async actionCreate ({ model, serviceContext = {} }) {
        const response = await super.actionCreate({ model, serviceContext })
        console.log(response)
        return response
    }

    /**
    * Updates an entity
    *
    * @param {Object} param
    * @param {Model} param.model Model instance
    * @param {Transaction} param.trx Knex transaction
    */
    async actionUpdate ({ model, serviceContext = {} }) {
        return super.update({ model, serviceContext })
    }

    /**
    * Deletes an entity
    *
    * @param {Object} param
    * @param {Model} param.model Model instance
    * @param {Boolean} softDelete If true, performs a soft delete. Defaults to false
    * @throws {ServiceException} If model doesnt support softDelete and it is required
    */
    async actionDelete ({ model, serviceContext = {} }, softDelete) {
        return super.delete({ model, serviceContext }, softDelete)
    }
}

module.exports = new User()
