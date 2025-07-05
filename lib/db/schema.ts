import {
    bigint,
    decimal,
    integer,
    serial,
    text,
    timestamp,
    pgTable,
} from "drizzle-orm/pg-core";



export const users = pgTable("users", {
    id: serial('id').primaryKey(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name'),
    username: text('username').unique().notNull(),
    accountType: text('account_type',{enum: ["seller","buyer"]}).default("buyer"),
    profilePic: text("profile_pic"),
    refreshToken: text("refresh_token"),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdate(() => new Date())
});

export const product = pgTable("products", {
    id: serial("id").primaryKey(),
    productName: text("product_name").notNull(),
    sellerId: bigint("seller_id",{mode:'number'}).references(() => users.id),
    productDescription: text("product_description"),
    price: decimal("price").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()),    
});

export const addressTable = pgTable("address_table",{
    id: serial("id").primaryKey(),
    userId: bigint("user_id",{mode:'number'}).references(() => users.id),
    address: text("address").notNull(),
    city: text("city").notNull(),
    pincode: integer("pincode").notNull(),
    state: text("state").notNull(),
    country: text("country").notNull()
})

export const productMedia = pgTable('product_media',{
    id: serial("id").primaryKey(),
    productId: bigint("product_id",{mode:'number'}).references(() => product.id),
    mediaType: text('media_type',{enum: ["video","image"]}).notNull(),
    mediaUrl: text("media_url").notNull()
})