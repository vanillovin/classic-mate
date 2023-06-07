import { getAllClassics } from '../api';
import { type ClassicT } from '../types';

export async function getClassicById(id: number): Promise<ClassicT | undefined> {
  return getAllClassics().then(classics => classics.find(classic => classic.id === id));
}
