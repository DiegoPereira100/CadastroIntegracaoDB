import { useState } from 'react';
import Input from '../components/Input';
import Client from '../core/Client'
import Button from './Button';

interface FormProps{
    client: Client
    clientChange?: (client: Client) => void
    canceled?: () => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id

    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? (
                <Input 
                text="Código" 
                value={id}
                className='mb-4'
            />
        ) : false}

        <Input 
            text="Nome"
            value={name}
            onChange={setName}
            className='mb-4'
        />

         <Input 
            text="Idade"
            type="number"
            value={age}
            onChange={setAge}
        />
        <div className='flex justify-end mt-3'>
            <Button color="blue" className='mr-2'
                onClick={() => props.clientChange?.(new Client(name, +age, id))}>
                {id ? 'Alterar' : 'Salvar'}
            </Button>
            <Button onClick={props.canceled}>
                Cancelar
            </Button>
            
        </div>
        </div>
    )
}