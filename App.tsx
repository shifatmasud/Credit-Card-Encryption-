
import React from 'react';
import EncryptionVisualizer from './components/Section/EncryptionVisualizer';
import { theme, type CSS } from './styles/theme';

const App: React.FC = () => {
    return (
        <main style={styles.main}>
            <header style={styles.header}>
                <h1 style={styles.title}>Data Encryption</h1>
                <p style={styles.subtitle}>A Visual Demonstration</p>
            </header>
            <EncryptionVisualizer />
        </main>
    );
};

const styles: { [key: string]: CSS } = {
    main: {
        height: '100%',
        width: '100%',
        maxWidth: '1200px',
        padding: theme.space.L,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    header: {
        position: 'absolute',
        top: theme.space.XL,
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        zIndex: 10,
        width: '100%',
    },
    title: {
        ...theme.type.Expressive.Display.M,
        color: theme.color.Base.Content[3],
    },
    subtitle: {
        ...theme.type.Readable.Body.M,
        color: theme.color.Base.Content[2],
        marginTop: theme.space.S,
    },
};


export default App;
