// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import Layout from "@/components/layout"
import HomeCom from "@/components/home"

export default function Home() {
  return (
    <>
     <Layout>
        <HomeCom/>
      </Layout>
    </>
  )
}
