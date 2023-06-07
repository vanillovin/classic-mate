import { allClassics } from '@/data/allClassics';
import { type ClassicT } from "./types";

export async function getClassics(): Promise<ClassicT[]> {
  return allClassics; 
}