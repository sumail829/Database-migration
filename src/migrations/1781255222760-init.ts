import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1781255222760 implements MigrationInterface {
    name = 'Init1781255222760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blogCategory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" text, "slug" text, "description" text, "status" boolean, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_2f5b8e86debf5d209a738699212" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "blogs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "categoryId" uuid NOT NULL, "title" text, "slug" character varying(255), "images" character varying(255), "description" text, "shortDescription" text, "metaKeywords" text, "metaDescriptions" text, "authorName" character varying, "authorEmail" character varying, "authorDesignation" character varying, "authorImage" character varying, "authorPhone" character varying, "authorInsights" text, "authorLinkedin" character varying, "authorWebsite" character varying, "views" integer NOT NULL DEFAULT '0', "displayOrder" integer, "status" boolean NOT NULL DEFAULT true, "isPopular" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_e113335f11c926da929a625f118" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "page_setting" ("id" SERIAL NOT NULL, "eBookingLandlineNumber" character varying NOT NULL, "mobileNumber" character varying NOT NULL, "officialEmail" character varying NOT NULL, "supportEmail" character varying NOT NULL, "location" character varying NOT NULL, "facebook" character varying NOT NULL, "instagram" character varying NOT NULL, "linkedin" character varying NOT NULL, "x" character varying NOT NULL, CONSTRAINT "PK_90fefcfbc6c00e9e572aefd7a22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."services_status_enum" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`CREATE TABLE "services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "image" character varying NOT NULL, "description" text NOT NULL, "slug" text NOT NULL, "priority" integer NOT NULL DEFAULT '0', "status" "public"."services_status_enum" NOT NULL DEFAULT 'active', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD CONSTRAINT "FK_8c937e1b5e2c1269689bcf1138e" FOREIGN KEY ("categoryId") REFERENCES "blogCategory"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blogs" DROP CONSTRAINT "FK_8c937e1b5e2c1269689bcf1138e"`);
        await queryRunner.query(`DROP TABLE "services"`);
        await queryRunner.query(`DROP TYPE "public"."services_status_enum"`);
        await queryRunner.query(`DROP TABLE "page_setting"`);
        await queryRunner.query(`DROP TABLE "blogs"`);
        await queryRunner.query(`DROP TABLE "blogCategory"`);
    }

}
