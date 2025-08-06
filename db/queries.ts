import { eq, desc } from 'drizzle-orm';
import { db } from './client';
import { awards, type Awards } from './schema';

/**
 * Awards
 * This section contains queries related to the awards table.
 * Queries: getAllAwards, getAwardById, createAward, updateAward, deleteAward
 */

export async function getAllAwards(): Promise<Awards[]> {
  try {
    return await db.select().from(awards).orderBy(desc(awards.createdAt));
  } catch (error) {
    console.error('Error fetching awards:', error);
    throw new Error('Failed to fetch awards');
  }
}

export async function getAwardById(id: number): Promise<Awards | null> {
  try {
    const result = await db.select().from(awards).where(eq(awards.id, id)).limit(1);
    return result[0] || null;
  } catch (error) {
    console.error(`Error fetching award with ID ${id}:`, error);
    throw new Error(`Failed to fetch award with ID ${id}`);
  }
}

export async function createAward(newAward: Omit<Awards, 'id'>): Promise<Awards> {
  try {
    const [createdAward] = await db.insert(awards).values(newAward).$returningId();

    const award = await getAwardById(createdAward.id);
    if (!award) {
      throw new Error('Awards not found after creation');
    }

    return award;
  } catch (error) {
    console.error('Error creating award:', error);
    throw new Error('Failed to create award');
  }
}

export async function updateAward(id: number, updatedFields: Partial<Awards>): Promise<Awards | null> {
  try {
    const [updatedAward] = await db
      .update(awards)
      .set(updatedFields)
      .where(eq(awards.id, id))
      .execute();
    
    const award = await getAwardById(id);
    if (!award) {
      throw new Error('Award not found after update');
    }
    return award;
  } catch (error) {
    console.error(`Error updating award with ID ${id}:`, error);
    throw new Error(`Failed to update award with ID ${id}`);
  }
}

export async function deleteAward(id: number): Promise<void> {
  try {
    await db.delete(awards).where(eq(awards.id, id));
  } catch (error) {
    console.error(`Error deleting award with ID ${id}:`, error);
    throw new Error(`Failed to delete award with ID ${id}`);
  }
}
