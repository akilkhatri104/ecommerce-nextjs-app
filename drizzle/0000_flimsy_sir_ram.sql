CREATE TABLE "ecommerce_nextjs_app_address_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" bigint,
	"address" text NOT NULL,
	"city" text NOT NULL,
	"pincode" integer NOT NULL,
	"state" text NOT NULL,
	"country" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ecommerce_nextjs_app_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_name" text NOT NULL,
	"seller_id" bigint,
	"product_description" text,
	"price" numeric NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "ecommerce_nextjs_app_product_media" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" bigint,
	"media_type" text NOT NULL,
	"media_url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ecommerce_nextjs_app_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text,
	"username" text NOT NULL,
	"account_type" text DEFAULT 'buyer',
	"profile_pic" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "ecommerce_nextjs_app_users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "ecommerce_nextjs_app_address_table" ADD CONSTRAINT "ecommerce_nextjs_app_address_table_user_id_ecommerce_nextjs_app_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."ecommerce_nextjs_app_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ecommerce_nextjs_app_products" ADD CONSTRAINT "ecommerce_nextjs_app_products_seller_id_ecommerce_nextjs_app_users_id_fk" FOREIGN KEY ("seller_id") REFERENCES "public"."ecommerce_nextjs_app_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ecommerce_nextjs_app_product_media" ADD CONSTRAINT "ecommerce_nextjs_app_product_media_product_id_ecommerce_nextjs_app_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."ecommerce_nextjs_app_products"("id") ON DELETE no action ON UPDATE no action;