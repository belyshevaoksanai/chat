import Header from './components/header'
import Form from './components/form'
import Messages from './components/messages'

import styles from './styles.module.scss';

export default function Home() {
  return (
    <main className={styles.chat}>
      <Header />
      <Messages />
      <Form />
    </main>
  )
}
