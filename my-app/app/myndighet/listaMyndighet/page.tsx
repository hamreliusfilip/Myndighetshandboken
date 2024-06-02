import React from 'react'
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import List from '@/components/DatabaseComponents/List';

export default function Page() {
    return (
        <div>
            <Logo />
            <CompleteMenu />
            <List type="myndighet" />
            <Footer />
        </div>
    );
}