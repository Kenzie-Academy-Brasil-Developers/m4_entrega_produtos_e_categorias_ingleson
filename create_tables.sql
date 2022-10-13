CREATE EXTENSION "uuid-ossp";

CREATE TABLE categories(
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE products(
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	name VARCHAR(200) NOT NULL,
	price DECIMAL(6, 2) NOT NULL,
	category_id INTEGER,
	FOREIGN KEY (category_id) REFERENCES categories(id)
);