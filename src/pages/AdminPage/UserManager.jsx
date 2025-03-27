import React, { useEffect, useState } from 'react'
import { getUserList } from '../../api/adminService'

export default function UserManager() {
    const [user, setUser] = useState([]);
    // useEffect(() => {
    //     getUserList()
    //         .then((result) => {
    //             console.log('✌️result --->', result);

    //         }).catch((err) => {
    //             console.log('✌️err --->', err);

    //         });
    // }, [])
    return (
        <div>UserManager</div>
    )
}
