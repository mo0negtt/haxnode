import { pgTable, text, serial, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const configurations = pgTable("configurations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  nodes: jsonb("nodes").notNull(), 
  edges: jsonb("edges").notNull(), 
  values: jsonb("values").notNull(), 
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertConfigurationSchema = createInsertSchema(configurations).omit({ 
  id: true, 
  createdAt: true 
});

export type Configuration = typeof configurations.$inferSelect;
export type InsertConfiguration = z.infer<typeof insertConfigurationSchema>;

// Request types
export type CreateConfigurationRequest = InsertConfiguration;
export type UpdateConfigurationRequest = Partial<InsertConfiguration>;

// Script Template Response
export interface ScriptTemplateResponse {
  content: string;
}
