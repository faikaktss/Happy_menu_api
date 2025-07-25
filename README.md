# 🍽️ HappyMenu - Restoran Menü API

HappyMenu, Express.js ve PostgreSQL kullanılarak geliştirilen, restoran menü yönetimi için bir backend API uygulamasıdır. Kategoriler, ürünler, malzemeler ve ürünlerin malzemeleri gibi temel bileşenleri barındırır. Sistem, soft delete, filtreleme ve ilişkisel veritabanı mantığını temel alır.

## 🛠️ Kullanılan Teknolojiler

- Node.js
- Express.js
- PostgreSQL
- Knex.js (Query Builder)
- RESTful API yapısı

## 📦 Veri Modeli

### 1. Kategoriler (categories)

| Alan            | Açıklama                 |
|-----------------|--------------------------|
| id              | Kategori ID              |
| name            | Kategori adı             |
| description     | Açıklama                 |
| created_at      | Oluşturulma tarihi       |
| updated_at      | Güncellenme tarihi       |
| deleted_at      | Silinme tarihi (nullable)|

### 2. Ürünler (products)

| Alan            | Açıklama                 |
|-----------------|--------------------------|
| id              | Ürün ID                  |
| category_id     | Kategori ID (FK)         |
| name            | Ürün adı                 |
| description     | Açıklama                 |
| price           | Fiyat                    |
| created_at      | Oluşturulma tarihi       |
| updated_at      | Güncellenme tarihi       |
| deleted_at      | Silinme tarihi (nullable)|

### 3. Malzemeler (ingredients)

| Alan            | Açıklama                 |
|-----------------|--------------------------|
| id              | Malzeme ID               |
| name            | Malzeme adı              |
| is_allergen     | Alerjen mi? (boolean)    |
| created_at      | Oluşturulma tarihi       |
| updated_at      | Güncellenme tarihi       |
| deleted_at      | Silinme tarihi (nullable)|

### 4. Ürün-Malzeme İlişkisi (product_ingredients)

| Alan            | Açıklama                 |
|-----------------|--------------------------|
| product_id      | Ürün ID (FK)             |
| ingredient_id   | Malzeme ID (FK)          |

## 🔁 İlişkiler

- Bir kategori birçok ürüne sahiptir (One-to-Many)
- Bir ürün birçok malzemeye sahip olabilir ve bir malzeme birçok üründe olabilir (Many-to-Many)

## 📡 API Endpointleri

### Kategori Endpoints

- `POST /categories` → Yeni kategori oluştur
- `GET /categories` → Tüm kategorileri listele (filtreleme destekli)
- `GET /categories/:id` → Kategori detaylarını getir
- `PATCH /categories/:id` → Kategoriyi güncelle
- `DELETE /categories/:id` → Soft delete

**Filtreleme Parametreleri:**
- `showDeleted=true|false`
- `onlyDeleted=true`

### Ürün Endpoints

- `POST /products`
- `GET /products` (category, showDeleted, onlyDeleted parametrelerini destekler)
- `GET /products/:id`
- `PATCH /products/:id`
- `DELETE /products/:id`

### Malzeme Endpoints

- `POST /ingredients`
- `GET /ingredients`
- `GET /ingredients/:id`
- `PATCH /ingredients/:id`
- `DELETE /ingredients/:id`

## 🔍 Örnek Sorgular

- `/categories?showDeleted=true`
- `/products?category=2&onlyDeleted=true`
- `/products?showDeleted=false`

## 🧪 Test ve Postman

Tüm endpointler bir Postman koleksiyonuna eklenmiş olup, örnek response verileri ile birlikte proje dizininde `postman_collection.json` dosyası olarak yer almaktadır.

## 📁 Klasör Yapısı Önerisi

```
project-root/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   └── db/knexfile.js
├── postman_collection.json
├── package.json
└── README.md
```

## 🧑‍💻 Geliştirici Notları

- Soft delete tüm modellerde kullanılmıştır.
- Knex ile migration ve query işlemleri yapılmaktadır.
- API, esnek filtreleme desteğine sahiptir.

---

📝 Lisans: MIT
