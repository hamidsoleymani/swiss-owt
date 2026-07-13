ALTER TABLE boat
    DROP COLUMN manufacturer;

ALTER TABLE boat
    DROP COLUMN length;

ALTER TABLE boat
    ADD COLUMN description VARCHAR(1000);