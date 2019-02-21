const Model = use('Model');
const ErrorCode = use('Exceptions/ErrorCodeException');

const QueryBuilder = use('@adonisjs/lucid/src/Lucid/QueryBuilder');
// const ServiceResponse = use('App/Services/ServiceResponse');

/**
 * Resourceful controller for interacting with bases
 */
class BaseController {
  applyExpand({ data, expand, blackList = [], whiteList = [] }) {
    let expandArray = expand;
    let expandedData = data;

    if (typeof expandArray === 'string') {
      expandArray = expandArray.replace(/ /g, '').split(',');
    }

    if (expandArray && expandArray instanceof Array) {
      expandArray = [...new Set(expandArray)].filter(value => !blackList.includes(value) && whiteList.includes(value));

      if (expandedData instanceof Model) {
        return data.loadMany(expandArray);
      }
      if (expandedData instanceof QueryBuilder) {
        for (const i in expandArray) {
          expandedData = expandedData.with(expandArray[i]);
        }
      }
    }

    return expandedData;
  }

  async verifyServiceResponse({ response, serviceResponse: { isOk, data }, callbackWhenIsOk = async (value) => {} }) {
    if (isOk) {
      if (data) {
        await callbackWhenIsOk(data);

        return data;
      }

      return response.noContent();
    }

    throw new ErrorCode(400, data);
  }
}

module.exports = BaseController;
