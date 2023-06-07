import { getAllClassics } from './api';
import ClassicList from '@/components/classics/ClassicList';

export default async function ClassicsPage() {
  const classics = await getAllClassics();

  return (
    <div>
      <ClassicList classics={classics} />
    </div>
  )
}
