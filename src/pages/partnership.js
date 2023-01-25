import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import Layout from "@/components/layout"
import PartnerCom from "@/components/partner"

function partnership() {
    return (
        <>
         <Layout>
            <PartnerCom/>
          </Layout>
        </>
      )
}

export default partnership
