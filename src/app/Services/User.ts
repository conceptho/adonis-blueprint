'use strict'
/** @type {typeof import('@conceptho/adonis-service-layer/src/services/Service')} */
const { Service } = use('Conceptho/Services')

class UserService extends Service implements ServiceInterface {

  /**
   * Returns the path for the Model related to this Service
   * @returns {string}
   * @constructor
   */
  static get ModelName () {
    return 'App/Models/User'
  }

  /**
   * Returns if this Service is related to a Model
   * @returns {boolean}
   */
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
  async actionCreate ({ model, serviceContext = {} }: any) {
    return super.actionCreate({ model, serviceContext })
  }

  /**
   * Updates an entity
   *
   * @param {Object} param
   * @param {Model} param.model Model instance
   * @param {Transaction} param.trx Knex transaction
   */
  async actionUpdate ({ model, serviceContext = {} }: any) {
    return super.actionUpdate({ model, serviceContext })
  }

  /**
   * Deletes an entity
   *
   * @param {Object} param
   * @param {Model} param.model Model instance
   * @param {Boolean} softDelete If true, performs a soft delete. Defaults to false
   * @throws {ServiceException} If model doesnt support softDelete and it is required
   */
  async actionDelete ({ model, serviceContext = {} }: any, softDelete: boolean) {
    return super.actionDelete({ model, serviceContext }, softDelete)
  }

  /**
   * Finds an entity with given where clauses or creates it if it does not exists.
   *
   * @param {Object} param
   * @param {Object} whereAttributes Values to look for
   * @param {Object} modelData If entity is not found, create a new matching this modelData. Defaults to whereAttributes
   * @param {Transaction} param.trx Knex transaction
   * @param {Object} params.byActive If true, filter only active records
   */
  async actionFindOrCreate ({ whereAttributes, modelData = whereAttributes, serviceContext, byActive = false }: any) {
    return super.actionFindOrCreate({ whereAttributes, modelData, serviceContext, byActive })
  }

  /**
   * Finds an entity if it exists and returns it.
   *
   * @param {Object} params
   * @param {Object} params.whereAttributes Values to look for
   * @param {Object} params.byActive If true, filter only active records
   * @returns {ServiceResponse} Response
   */
  async actionFind ({ whereAttributes, byActive = false, serviceContext }: any) {
    return super.actionFind({ whereAttributes, byActive, serviceContext })
  }
}

module.exports = new UserService()
