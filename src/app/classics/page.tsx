import { getAllClassics } from './api';
import ClassicsContainer from '@/components/classics/ClassicsContainer';

export default async function ClassicsPage() {
  const classics = await getAllClassics();

  return (
    <div>
      <ClassicsContainer classics={classics} />
    </div>
  )
}
