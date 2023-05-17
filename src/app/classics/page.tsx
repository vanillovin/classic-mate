import ClassicList from '@/components/classics/ClassicList';
import classics from '@/data/classics.json'

export default async function ClassicsPage() {
  return (
    <div>
      <ClassicList classics={classics} />    
    </div>
  )
}
