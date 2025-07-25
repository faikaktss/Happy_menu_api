export async function up(knex){
    await knex.schema.createTable('products',(table)=>{
        table.increments('id').primary();
        table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE');
        table.string('name').notNullable(); 
        table.string('description').notNullable();
        table.integer('price').notNullable();
        table.timestamp('created_at').default(knex.fn.now());
        table.timestamp('deleted_at').notNullable();
        table.timestamp('updated_at').notNullable();
    })
}

export async function down(knex){
    await knex.schema.dropTable('products');
}