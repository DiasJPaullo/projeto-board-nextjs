import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
export function SignInButton(){
  const session = true
  return session ? (
    <button
    type='button'
    className={styles.signInButton}
    onClick={() => {}}
    >
      <img src="/images/2wolf.jpg" alt="imagem perfil" />
      Olá João
      <FiX color="#737380"
      className={styles.closeIcon}
      />
    </button>
  ) : (
    <button
    type='button'
    className={styles.signInButton}
    onClick={() => {}}
    >
      <FaGithub color='#ff8800'/>
      Entrar com git 
    </button>

  )
}