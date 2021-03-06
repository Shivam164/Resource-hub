import React from 'react'
import { useRouter } from 'next/router'
import NavbarColor from '../../components/navbar/NavbarColor'
import Footer from '../../components/Footer' 
import SubCards from '../../components/SubCards'
import styles from '../../styles/subject.module.css'

const Subject = () => {

    const router = useRouter();
    const subName = router.query.subject;

    return (
        <div>
            <NavbarColor />
            <div className={styles.subdiv}>
                <h1 className={styles.subject}>{subName}</h1>
            </div>
            <SubCards />
            <Footer />
        </div>
    )
}

export default Subject
