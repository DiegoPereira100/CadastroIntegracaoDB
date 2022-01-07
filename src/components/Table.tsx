import Client from '../core/Client';
import { IconEdit, IconTrash } from './Icons';

interface TableProps {
    clients: Client[]
    clientSelected?: (client: Client) => void
    clientDeleted?: (client: Client) => void
}

export default function Table(props: TableProps) {

    const renderAction = props.clientDeleted || props.clientSelected

    function renderHeader() {
        return (
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {renderAction ? <th className='p-4'>Ações</th> : false}
            </tr>
        )
    }

    function renderData(){
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`${i % 2 === 0 ? 'g-purple-300' : 'bg-purple-200'}`}>
                    <td className='p-4'>{client.id}</td>
                    <td className='p-4'>{client.name}</td>
                    <td className='p-4'>{client.age}</td>
                    {renderAction ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client){
        return (
            <td className='flex justify-center'>
                {props.clientSelected ? (

                <button onClick={() => props.clientSelected(client)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-200
                    `}>
                        {IconEdit}
                </button>

                ) : false}
                {props.clientDeleted ? (
                    <button onClick={() => props.clientDeleted(client)} className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-200
                `}>
                    {IconTrash}
                </button>

                ) : false}
                
            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderHeader()}
            </thead>
           {renderData()}
        </table>
    )
}