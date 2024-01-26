import type { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

// Components
import { Banner } from '@/components/organisms/banner'

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta property='og:title' content='Homepage' key='title' />
        <meta name='description' content='a description' />
      </Head>
      <main>
        <Banner />
      </main>
    </>
  )
}

// Fetch data
export async function getServerSideProps() {
  // const res = await fetch(process.env.NEXT_PUBLIC_APIURL!, {
  //   cache: 'no-store',
  // })

  // if (!res.ok) {
  //   throw new Error('Failed to fetch data')
  // }

  // const data = await res.json()
  const data = 'Replace with actual api response'

  return { props: { data } }
}
