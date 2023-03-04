import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function SkeletonCard() {
    
  return (
    <div className='pokemon-list'>
    { Array(20).fill(1).map((item,index)=>
      (
      <div className='pokemon-list-item' key={index}>
         <p>
         <Skeleton width={80} height={80}/>
         </p>
         <Skeleton width={80} height={30} />

      </div>
      )
     )
    }
      </div>
  )
}