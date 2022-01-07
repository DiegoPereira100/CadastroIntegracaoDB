import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Marcos', 58, '2'),
    new Client('Mateus', 45, '3'),
    new Client('Jãozinho', 32, '4'),
  ]

  return (

    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-black via-blue-600 to-white
        text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table clients={clients}></Table>
      </Layout>
    </div>  

  )

}
