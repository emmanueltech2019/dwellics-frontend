import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import Layout from "@/components/layout"
import LicensingCom from "@/components/licensing"

export default function Licensing() {
  return (
    <>
     <Layout>
        <LicensingCom/>
      </Layout>
    </>
  )
}
