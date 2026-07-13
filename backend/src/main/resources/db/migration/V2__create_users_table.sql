CREATE TABLE app_user
(
    id BIGSERIAL PRIMARY KEY,

    username VARCHAR(100) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    role VARCHAR(30) NOT NULL
);

INSERT INTO app_user(username, password, role)
VALUES
    (
        'admin',
        '$2a$10$A8KTMncCkA.lvR3r6kC9DOaSVFHJTFLMszcNoPcstkKjcmTmSK1kC',
        'ADMIN'
    );