exports.up = function (knex) {
    return knex.schema.createTable('project', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description').notNullable();
        table.string('url').nullable();
        table.string('client').nullable();
        table.string('date').notNullable();
        table.text('brief').notNullable();
        table.text('concept').notNullable();
        table.text('deliverables').notNullable();
        table.string('demographic').notNullable();
        table.specificType('tech', 'text ARRAY').notNullable();
        table.string('github').nullable();
        table.specificType('images', 'text ARRAY').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('project');
};