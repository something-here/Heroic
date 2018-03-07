import knex from 'knex'
import bookshelf from 'bookshelf'
import Delete from 'bookshelf-cascade-delete'
import Configuration from '../config/options'

const data = {
  client :"mysql",
  connection:{
    host: Configuration.database.host,
    user: Configuration.database.user,
    password: Configuration.database.password,
    database: Configuration.database.database
  }
}
const Database = bookshelf(knex(data))

Database.plugin(Delete)

export default Database
