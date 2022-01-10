import { useState } from "react";

export default function useTableOrForm() {
    const [visible, setVisible] = useState<'tabel' | 'form'>('tabel')

    const viewTable = () => setVisible('tabel')
    const viewForm = () => setVisible('form')

    return {
        visibleForm: visible === 'form',
        visibleTable: visible === 'tabel',
        viewTable,
        viewForm
    }
}