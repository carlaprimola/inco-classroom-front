'use client';
import React, { useState, useEffect } from 'react';
import { fetchUsers } from "/app/lib/data.js"; 
import MainInfo from "../ui/dashboard/mainInfo/MainInfo"

import Search from "/app/ui/dashboard/search/search";
import styles from "/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import { UserProvider } from '../contexts/UserContext';

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
        <UserProvider>

            <div className={styles.container}>
                <MainInfo/>
            </div>
        </UserProvider>
    );
};

export default UsersPage;
