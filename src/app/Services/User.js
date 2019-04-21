'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Service } = use('Conceptho/Services');
class UserService extends Service {
    static get ModelName() {
        return 'App/Models/User';
    }
    static get hasModel() {
        return true;
    }
    actionCreate({ model, serviceContext = {} }) {
        const _super = Object.create(null, {
            actionCreate: { get: () => super.actionCreate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.actionCreate.call(this, { model, serviceContext });
        });
    }
    actionUpdate({ model, serviceContext = {} }) {
        const _super = Object.create(null, {
            actionUpdate: { get: () => super.actionUpdate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.actionUpdate.call(this, { model, serviceContext });
        });
    }
    actionDelete({ model, serviceContext = {} }, softDelete) {
        const _super = Object.create(null, {
            actionDelete: { get: () => super.actionDelete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.actionDelete.call(this, { model, serviceContext }, softDelete);
        });
    }
    actionFindOrCreate({ whereAttributes, modelData = whereAttributes, serviceContext, byActive = false }) {
        const _super = Object.create(null, {
            actionFindOrCreate: { get: () => super.actionFindOrCreate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.actionFindOrCreate.call(this, { whereAttributes, modelData, serviceContext, byActive });
        });
    }
    actionFind({ whereAttributes, byActive = false, serviceContext }) {
        const _super = Object.create(null, {
            actionFind: { get: () => super.actionFind }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.actionFind.call(this, { whereAttributes, byActive, serviceContext });
        });
    }
}
module.exports = new UserService();
//# sourceMappingURL=User.js.map