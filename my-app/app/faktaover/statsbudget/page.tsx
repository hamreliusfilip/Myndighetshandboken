import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import Budget from "../../../components/Other/budget";

export default function Home() {

    return (
        <div>
            <Logo />
            <CompleteMenu />
            <Budget />
            <Footer />
        </div>
    );
}
