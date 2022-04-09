import { signIn, getProviders } from 'next-auth/react'
import Image from 'next/image'
import styles from '../../styles/Signin.module.css'

const Signin = ({ csrfToken, providers }) => {
  console.log('PROVIDERS!', providers)
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <div className={styles.wrapper} />
      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <Image src='/katalog_full.svg' width="196px" height="64px" alt='App Logo' style={{ height: '85px', marginBottom: '20px' }} />
          <div className={styles.cardContent}>
            <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
            <input placeholder='Email' size='large' />

            <button className={styles.primaryBtn}>
              Submit
            </button>
            <hr />
            {providers &&
              Object.values(providers).map(provider => {
                console.log('prov', provider)
                return (
                  <div key={provider.name} style={{ marginBottom: 0 }}>
                    <button onClick={() => signIn(provider.id)} >
                      Sign in with{' '}
                      {provider.name === 'Google' ? (
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg>
                      ) : (
                        provider.name
                      )}
                    </button>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
      <Image src='/login_pattern.svg' alt='Pattern Background' layout='fill' className={styles.styledPattern} />
    </div>
  )
}

export default Signin

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  }
}
