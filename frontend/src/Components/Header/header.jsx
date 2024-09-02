import { useState } from "react";

export function Header() {
    const [headerName, setHeaderName] = useState('Erik')
    setHeaderName('erik')
    return (
        <div>
            {headerName}
        </div>
    )
}