import jobjson from '@jobdetail/datas/jobjson.json'
import _ from 'lodash'
import { json } from 'stream/consumers'

function JobDetailPage({ params }: { params: { slug: number } }) {
  return <div>My Post: {params.slug}</div>
}

export default JobDetailPage
