import { allClassics } from '@/data/allClassics';
import { type ClassicT } from "./types";

export async function getAllClassics(): Promise<ClassicT[]> {
  return allClassics; 
}