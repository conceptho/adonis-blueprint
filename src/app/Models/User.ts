'use strict'

const Hash = use('Hash')
const { Model } = use('Conceptho/Models')

interface UserData {
  id?: number
  username: string
  email: string
  password: string
}

class User extends Model implements UserData {
  email!: string;
  id!: number;
  password!: string;
  username!: string;

  constructor(data: UserData) {
    super(data)
  }

  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance: User) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
