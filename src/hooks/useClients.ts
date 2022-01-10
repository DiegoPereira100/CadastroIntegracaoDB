import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import ClientRepo from "../core/ClientRepo"
import useTableOrForm from "./useTableOrForm"

export default function useClients() {

    const repo: ClientRepo = new ClientCollection()

    const { visibleTable, visibleForm, viewTable, viewForm} = useTableOrForm();

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  useEffect(getAll, [])
  
  function getAll() {
    
    repo.getAll().then((clients)=>{
      setClients(clients)
      viewTable()
    })

  }

  function clientSelected(client: Client) {
    setClient(client)
    viewForm()
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
    viewForm()
  }

  return {

      client,
      clients,
      newClient,
      saveClient,
      clientDeleted,
      clientSelected,
      getAll,
      visibleTable,
      viewTable

  }
    
}