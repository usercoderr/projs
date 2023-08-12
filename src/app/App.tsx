import React, { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@/entities/User/model/slices/userSlice';
import { getUserMounted } from '@/entities/User/model/selectors/getUserMounted/getUserMounted';
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
