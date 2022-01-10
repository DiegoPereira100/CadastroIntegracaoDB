import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {

  const {client, clients, clientSelected, newClient, clientDeleted, saveClient, viewTable, visibleTable} = useClients()

  return (

    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-black via-blue-600 to-white
        text-white
    `}>
      <Layout title="Cadastro Simples">
        {visibleTable ? (

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
            canceled={viewTable}
        />
        )}
      </Layout>
    </div>  

  )

}
