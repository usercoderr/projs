import React, { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { userActions, getUserMounted } from '@/entities/User';
import { AppRouter } from '@/app/providers/router';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {mounted && <AppRouter />}
                </div>

            </Suspense>
        </div>
    );
}

export default App;
