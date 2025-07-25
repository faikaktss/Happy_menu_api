export async function up(knex){
    await knex.schema.createTable('categories',(table)=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.timestamp('created_at').default(knex.fn.now());
        table.timestamp('deleted_at').notNullable();
        table.timestamp('updated_at').notNullable();
    })

}

export async function down(knex){
    await knex.schema.dropTable('categories');
}