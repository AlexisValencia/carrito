CREATE DATABASE productos_node;
CREATE USER 'alexito'@'localhost' IDENTIFIED BY 'alexisto';
GRANT ALL PRIVILEGES ON productos_node.* TO 'alexito'@'localhost';
FLUSH PRIVILEGES;
USE productos_node;

CREATE TABLE IF NOT EXISTS productos(
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(45) NOT NULL,
 price decimal(10,2) DEFAULT 0,
 urlIMG VARCHAR(256) NULL,
 deleted TINYINT NULL
);

INSERT INTO `productos_node`.`productos` (`name`, `price`, `deleted`) VALUES ('COCHE', '18.99', '0');