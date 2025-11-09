import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme, type CSS } from '../../styles/theme';

interface CreditCardProps {
    isEncrypted?: boolean;
}

const LockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);

const ChipIcon = () => (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
        <rect width="48" height="36" rx="4" fill="#A0A0A0"/>
        <rect x="4" y="4" width="40" height="28" rx="2" fill="#222222"/>
        <line x1="24" y1="4" x2="24" y2="32" stroke="#A0A0A0" strokeWidth="2"/>
        <line x1="4" y1="18" x2="44" y2="18" stroke="#A0A0A0" strokeWidth="2"/>
    </svg>
);

const numberCellVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.4,
            ease: 'easeOut'
        }
    }),
    exit: (i: number) => ({
        opacity: 0,
        y: -10,
        transition: {
            delay: i * 0.08,
            duration: 0.3,
            ease: 'easeIn'
        }
    })
};

const CreditCard: React.FC<CreditCardProps> = ({ isEncrypted = false }) => {
    const cardStyle: CSS = {
        ...styles.card,
        background: isEncrypted ? theme.color.Secondary.Surface[1] : theme.color.Base.Surface[2],
        color: isEncrypted ? theme.color.Secondary.Content[1] : theme.color.Base.Content[1],
    };

    const numbers = ['4922', '1234', '5678', '9012'];
    const encryptedNumbers = ['****', '****', '****', '9012'];

    return (
        <div style={cardStyle}>
            <div style={styles.header}>
                <ChipIcon />
                <AnimatePresence>
                    {isEncrypted && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <LockIcon />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
            <div style={styles.cardNumber}>
                {numbers.map((_, i) => (
                    <div key={i} style={styles.numberCell}>
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={isEncrypted ? `enc-${i}` : `dec-${i}`}
                                custom={isEncrypted ? i : (numbers.length - 1 - i)}
                                variants={numberCellVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                style={{ display: 'inline-block' }}
                            >
                                {isEncrypted ? encryptedNumbers[i] : numbers[i]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            
            <div style={styles.footer}>
                <span style={styles.cardHolder}>MINIMALIST INC.</span>
                <span style={styles.expiry}>12/28</span>
            </div>
        </div>
    );
};

const styles: { [key: string]: CSS } = {
    card: {
        width: '100%',
        maxWidth: '380px',
        aspectRatio: '1.586 / 1', // Standard credit card ratio
        borderRadius: theme.radius.card,
        padding: theme.space.L,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        boxShadow: theme.effect.shadow.Drop[1],
        overflow: 'hidden',
        transition: 'background 0.4s, color 0.4s',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardNumber: {
        ...theme.type.Readable.Body.M,
        fontSize: ' clamp(1.1rem, 4vw, 1.5rem)',
        fontFamily: 'monospace',
        display: 'flex',
        justifyContent: 'space-between',
        letterSpacing: '2px',
        width: '100%',
    },
    numberCell: {
        position: 'relative',
        height: '1.2em',
        overflow: 'hidden',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    cardHolder: {
        ...theme.type.Readable.Label.S,
        textTransform: 'uppercase',
    },
    expiry: {
        ...theme.type.Readable.Body.M,
        fontFamily: 'monospace',
    },
};

export default CreditCard;