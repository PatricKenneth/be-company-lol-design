import { MigrationInterface, QueryRunner } from 'typeorm';

export class createPriceTable1640196775561 implements MigrationInterface {
  name = 'createPriceTable1640196775561';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "price_table" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "origin" integer NOT NULL, "destiny" integer NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_063855c405395c4abaf346e7ba0" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "price_table"`);
  }
}
