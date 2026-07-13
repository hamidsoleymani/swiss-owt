CREATE TABLE boat
(
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100),
    length      DECIMAL(5,2),
    created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);