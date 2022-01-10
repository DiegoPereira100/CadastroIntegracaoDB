import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientCollection";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRepo from "../core/ClientRepo";

export default function Home() {

  const repo: ClientRepo = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'tabel' | 'form'>('tabel')

  useEffect(getAll, [])
  
  function getAll() {
    
    repo.getAll().then((clients)=>{
      setClients(clients)
      setVisible('tabel')
    })

  }

  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function clientDeleted(client: Client) {
    await repo.delete(client)
    getAll()
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
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
