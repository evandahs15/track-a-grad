exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('first_name')
    table.string('last_name')
    table.integer('cohort_id')
    table.string('profile_picture')
    table.string('location')
    table.string('cv_location')
    table.string('description')
    table.string('github_url')
    table.integer('work_statuses_id').references('work_statuses.id')
    table.string('skills')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
}
