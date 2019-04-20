'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Hash = use('Hash');
const { Model } = use('Conceptho/Models');
class User extends Model {
    constructor(data) {
        super(data);
    }
    static boot() {
        super.boot();
        this.addHook('beforeSave', (userInstance) => __awaiter(this, void 0, void 0, function* () {
            if (userInstance.dirty.password) {
                userInstance.password = yield Hash.make(userInstance.password);
            }
        }));
    }
    tokens() {
        return this.hasMany('App/Models/Token');
    }
}
module.exports = User;
//# sourceMappingURL=User.js.map