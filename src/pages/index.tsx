import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const [client, setClient] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState<'tabel' | 'form'>('tabel')

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Marcos', 58, '2'),
    new Client('Mateus', 45, '3'),
    new Client('Jãozinho', 32, '4'),
  ]

  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function clientDeleted(client: Client) {
    console.log('Excluir',client.name)
  }

  function saveClient(client: Client) {
    console.log(client)
    setVisible('tabel')
  }

  function newClient() {
    setClient(Client.empty())
    setVisible('form')
  }

  return (

    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-black via-blue-600 to-white
        text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'tabel' ? (

        <>
        <div className="flex justify-end">
            <Button color="green" className="mb-4"
              onClick={newClient}>
              Novo Cliente
          </Button>
        </div>
        <Table
            clients={clients} clientSelected={clientSelected}
            clientDeleted={clientDeleted}
        />
        </>
          
        ) : (

          <Form client={client}
            clientChange={saveClient}
            canceled={() => setVisible('tabel')}
        />
        )}
      </Layout>
    </div>  

  )

}
