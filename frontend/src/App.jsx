import React, { useState } from "react";
import styles from "./app.module.css";
import Button from "./_components/ui/Button/Button";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <section id="center" className={styles.center}>
        {isLogin ? (
          <div className={styles.container_login}>
            <div className={styles.header_container}>
              <h1>Seja bem-vindo!</h1>
              <p>Estamos felizes em tê-lo aqui!</p>
            </div>
            <div className={styles.content_container}>
              <form action="" className={styles.form}>
                <div className={styles.label_input}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input type="email" id="email" className={styles.input} />
                </div>
                <div className={styles.label_input}>
                  <label htmlFor="password" className={styles.label}>
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    className={styles.input}
                  />
                </div>
              </form>
            </div>
            <div className={styles.footer_container}>
              <Button type="button" variant="primary">
                Entrar
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.container_register}>
            <div className={styles.header_container}>
              <h1>Criar conta</h1>
              <p>Preencha os campos abaixo para criar sua conta.</p>
            </div>
            <div className={styles.content_container}>
              <form action="" className={styles.form}>
                <div className={styles.label_input}>
                  <label htmlFor="nome" className={styles.label}>
                    Nome
                  </label>
                  <input type="text" id="nome" className={styles.input} />
                </div>
                <div className={styles.label_input}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input type="email" id="email" className={styles.input} />
                </div>
                <div className={styles.label_input}>
                  <label htmlFor="password" className={styles.label}>
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    className={styles.input}
                  />
                </div>
              </form>
            </div>
            <div className={styles.footer_container}>
              <Button type="button" variant="primary">
                Criar
              </Button>
            </div>
          </div>
        )}
        <div className={styles.toogle}>
          <Button type="button" variant="secondary" onClick={toggleLogin}>
            {isLogin ? "Criar conta" : "Acessar minha conta"}
          </Button>
        </div>
      </section>
    </>
  );
}

export default App;
