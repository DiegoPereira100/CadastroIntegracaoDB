import Layout from "../components/Layout";

export default function Home() {

  return (

    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-black via-blue-600 to-white
        text-white
    `}>
      <Layout title="Cadastro Simples">
        <span>Conteúdo</span>
      </Layout>
    </div>  

  )

}
