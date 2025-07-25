export async function up(knex){
    await knex.schema.createTable('productİngredients',(table)=>{
        table.increments('id').primary();
        table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE');
        table.integer('ingredient_id').unsigned().references('id').inTable('ingredients').onDelete('CASCADE');
    })
}

export async function down(knex){
    await knex.schema.dropTable('productİngredients')
}