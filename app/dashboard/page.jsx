// 'use client';
// import React, { useState, useEffect } from 'react';
// import { fetchUsers } from "/app/lib/data.js"; // Importa la función fetchUsers
// import Search from "/app/ui/dashboard/search/search";
// import styles from "/app/ui/dashboard/users/users.module.css";
// import Link from "next/link";

// const UsersPage = ({ searchParams }) => {
//     const [userRole, setUserRole] = useState(null);

//     useEffect(() => {
//         const loadUserRole = async () => {
//             const user2 = await fetchUsers();
//             console.log(user2.role.TipoRol)

//             try {
//                 const user = await fetchUsers();
//                 setUserRole(user.role.TipoRol);
//                 console.log(userRole)
//             } catch (error) {
//                 console.error('Error fetching user role:', error);
//             }
//         };

//         loadUserRole();
//     }, [searchParams]);

//     return (
//         <div className={styles.container}>
//             <div className={styles.top}>
//                 <Search placeholder="Search for a user..." />
//                 <Link href="/dashboard/users/add">
//                     <button className={styles.addButton}>Add New</button>
//                 </Link>
//             </div>
//             <div className="bg-gray-100 min-h-screen py-16 text-black">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <h1>User Role: {userRole}</h1>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UsersPage;


'use client';
import React, { useState, useEffect } from 'react';
import { fetchUsers } from "/app/lib/data.js"; // Importa la función fetchUsers
import Search from "/app/ui/dashboard/search/search";
import styles from "/app/ui/dashboard/users/users.module.css";
import Link from "next/link";

const UsersPage = ({ searchParams }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const user = await fetchUsers();
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        loadUserData();
    }, [searchParams]);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <div className="bg-gray-100 min-h-screen py-16 text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1>Rol: {userData ? userData.role.TipoRol : 'Loading...'}</h1>
                    <h1>Nombre: {userData ? userData.Nombre : 'Loading...'}</h1>
                    <h1>Email: {userData ? userData.Email : 'Loading...'}</h1>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
