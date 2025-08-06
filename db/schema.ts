import { mysqlTable, text, varchar, int, timestamp, mysqlEnum } from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';

const awards = mysqlTable('awards', {
  id: int('id').primaryKey().autoincrement(),
  awardId: varchar('award_id', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  agency: varchar('agency', { length: 255 }).notNull(),
  value: int('value').notNull(),
  type: varchar('type', { length: 255 }).notNull(),
  placeOfPerformance: varchar('place_of_performance', { length: 255 }).notNull(),
  startDate: varchar('start_date', { length: 255 }).notNull(),
  endDate: varchar('end_date', { length: 255 }).notNull(),
  usaSpendingUrl: varchar('usa_spending_url', { length: 255 }).notNull(),
  status: mysqlEnum('status', ['active', 'done']).notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`).$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});

export { awards };
export type Awards = typeof awards.$inferSelect;
export type InsertAwards = typeof awards.$inferInsert;
