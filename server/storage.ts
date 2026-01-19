import { db } from "./db";
import {
  configurations,
  type InsertConfiguration,
  type UpdateConfigurationRequest,
  type Configuration
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getConfigurations(): Promise<Configuration[]>;
  getConfiguration(id: number): Promise<Configuration | undefined>;
  createConfiguration(config: InsertConfiguration): Promise<Configuration>;
  updateConfiguration(id: number, updates: UpdateConfigurationRequest): Promise<Configuration>;
  deleteConfiguration(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getConfigurations(): Promise<Configuration[]> {
    return await db.select().from(configurations);
  }

  async getConfiguration(id: number): Promise<Configuration | undefined> {
    const [config] = await db.select().from(configurations).where(eq(configurations.id, id));
    return config;
  }

  async createConfiguration(insertConfig: InsertConfiguration): Promise<Configuration> {
    const [config] = await db.insert(configurations).values(insertConfig).returning();
    return config;
  }

  async updateConfiguration(id: number, updates: UpdateConfigurationRequest): Promise<Configuration> {
    const [updated] = await db.update(configurations)
      .set(updates)
      .where(eq(configurations.id, id))
      .returning();
    return updated;
  }

  async deleteConfiguration(id: number): Promise<void> {
    await db.delete(configurations).where(eq(configurations.id, id));
  }
}

export const storage = new DatabaseStorage();
