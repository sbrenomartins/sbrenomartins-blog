import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>

        <ul className={utilStyles.list}>          
          <li className={utilStyles.listItem} key='randompassword'>
            <a href='https://createpassword.netlify.app/' target='_blank' rel='noreferrer'>Random Password Generator</a>
          </li>
          
          <li className={utilStyles.listItem} key='acompanheocovid'>
            <a href='http://acompanheocovid.netlify.com/' target='_blank' rel='noreferrer'>Acompanhe o Covid</a>
          </li>

          <li className={utilStyles.listItem} key='monitorbot'>
            <a href='http://app-monitorbot.herokuapp.com/' target='_blank' rel='noreferrer'>Monitor Chatbot</a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
