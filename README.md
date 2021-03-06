# Conceptho AdonisJs Blueprint

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with:

- Bodyparser
- Authentication
- CORS
- Lucid
- Migrations and Seeds

Also, it includes a bunch of helpfull structures such as:

- A `BaseController`;
- A `BaseModel` with support to `softDelete`;
- `Errors`: Exports default http error messages.
- `Exceptions/ErrorCodeException`: An easy to use error class with support to default messages and payload.
- `Middleware/CreateTransaction`: Inserts a database transaction into the `context` object, which can be later captured by the `FinalizeTransaction` middleware.
- `Middleware/FinalizeTransaction`: Commits the current transaction in the `context` object or rollback it if any error occurs.
- `Middleware/HeaderPagination`: Captures the `response` object within the current `context` and sets the header with pagination info.

## Setup

Use the `adonis` command to install the blueprint. It can be achieved as follows:

```bash
npm i -g @adonisjs/cli
```

And then:

```bash
adonis new <project_name> --blueprint conceptho/adonis-blueprint
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
