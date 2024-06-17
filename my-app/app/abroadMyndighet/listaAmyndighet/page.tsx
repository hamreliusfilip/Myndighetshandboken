import React from 'react'
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import ListVariant from '@/components/DatabaseComponents/ListVariant';

export default function Page() {
    return (
        <div>
            <Logo />
            <CompleteMenu />
            <ListVariant />
            <Footer />
        </div>
    );
}