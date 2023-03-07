import DAO from "./dao.js";

class ProductDbMethod extends DAO{
    static async createTableProduct(){
        const query = `
        CREATE TABLE IF NOT EXISTS products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR,
            descripiton VARCHAR,
            price INTEGER,
            color VARCHAR,
            weight VARCHAR,
            height VARCHAR
        )
        `
        const response = await this.createTable(query)
        return response
    }

    static async insertProduct(product){
        const query = `INSERT INTO products(name, descripiton, price, color, weight, height) VALUES (?, ?, ?, ?, ?, ?)`;
        const response = await this.insert(product, query)
        return response
    }

    static async listAllProducts(){
        const query = `SELECT * FROM products`
        const response = await this.listAll(query)
        return response
    }

    static async listProductById(id){
        const query = `SELECT * FROM products WHERE id = ?`
        const response = await this.listById(id, query)
        return response
    }

    static async deleteProduct(id){
        const query = `DELETE FROM products WHERE id = ?`
        const response = await this.deleteById(id, query)
        return response
    }

    static async updateProduct(id, product){
        const query = `UPDATE products
        SET name = ?,
        descripiton = ?,
        price = ?,
        color = ?,
        weight = ?,
        height = ?
        WHERE id = ?`

        const response = await this.updateById(product, id, query)
        return response
    }
}

export default ProductDbMethod