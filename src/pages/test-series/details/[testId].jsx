import Header from '@/component/header/header';
import { useRouter } from 'next/router'
import React from 'react'

const TestID = () => {

    const router = useRouter();
    const { testId } = router.query;
  return (<>
    <Header />
  </>
  )
}

export default TestID