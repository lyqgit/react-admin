import React,{ Suspense } from 'react'
import PreLoad from '@/components/preLoad'

export default (path)=>{
  const LazyDiv = React.lazy(()=>
    Promise.all([
      import('@/'+path),
      new Promise(reslove=>setTimeout(reslove,800))
    ])
    .then(([moduleExports]) => moduleExports)
  )

  //无法在延迟期间展示PreLoad
  // const LazyDiv = React.lazy(() => {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(import('@/'+path), 1500))
  //   });
  // })
  return (props)=>(
    <Suspense fallback={<PreLoad/>}>
      <LazyDiv {...props}/>
    </Suspense>
  )
}