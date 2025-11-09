import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CreditCard from '../Core/CreditCard';
import { theme, type CSS } from '../../styles/theme';

const EncryptionVisualizer: React.FC = () => {
    const [isEncrypted, setIsEncrypted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = () => {
        if (isAnimating) return;
        setIsEncrypted(!isEncrypted);
    };

    const animationDuration = 0.8;

    // The scan line starts immediately.
    const scanTransition = { duration: animationDuration, ease: 'easeInOut' };
    
    // The wipe and tilt effects are slightly delayed to follow the scan line.
    const followTransition = { duration: animationDuration, ease: 'easeInOut', delay: 0.05 };

    return (
        <div style={styles.container}>
            <motion.div
                style={styles.cardContainer}
                animate={{ rotateY: isAnimating ? (isEncrypted ? [0, -7, 0] : [0, 7, 0]) : 0 }}
                transition={followTransition}
            >
                {/* Base unencrypted card */}
                <CreditCard isEncrypted={false} />

                {/* Encrypted card overlay with animated clip-path */}
                <motion.div
                    style={styles.encryptedCardWrapper}
                    initial={{ clipPath: 'inset(0 100% 0 0)' }}
                    animate={{ clipPath: isEncrypted ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
                    transition={followTransition}
                    onAnimationStart={() => setIsAnimating(true)}
                    onAnimationComplete={() => setIsAnimating(false)}
                >
                    <CreditCard isEncrypted={true} />
                </motion.div>
                
                {/* Synced Animated Scan Line */}
                <AnimatePresence>
                    {isAnimating && (
                         <motion.div
                            style={styles.scanLine}
                            initial={{ 
                                left: isEncrypted ? '0%' : '100%',
                                opacity: 0 
                            }}
                            animate={{ 
                                left: isEncrypted ? '100%' : '0%',
                                opacity: [0, 1, 1, 0] // Fade in, scan, fade out
                            }}
                            exit={{ 
                                opacity: 0, 
                            }}
                            transition={{
                                left: scanTransition,
                                opacity: { duration: scanTransition.duration, times: [0, 0.15, 0.85, 1] }
                            }}
                        />
                    )}
                </AnimatePresence>
            </motion.div>

            <motion.button
                style={styles.button}
                onClick={handleToggle}
                whileHover={{ scale: isAnimating ? 1 : 1.05 }}
                whileTap={{ scale: isAnimating ? 1 : 0.95 }}
                disabled={isAnimating}
                animate={{
                    background: isEncrypted ? theme.color.Secondary.Surface[1] : theme.color.Primary.Surface[1],
                    color: isEncrypted ? theme.color.Secondary.Content[1] : theme.color.Primary.Content[1]
                }}
            >
                {isEncrypted ? 'Decrypt' : 'Encrypt'}
            </motion.button>
        </div>
    );
};

const styles: { [key:string]: CSS } = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.space.XL,
        perspective: '1000px',
    },
    cardContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: '380px',
        borderRadius: theme.radius.card,
        transformStyle: 'preserve-3d', // Enable 3D transformations for children
    },
    encryptedCardWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: theme.radius.card,
        overflow: 'hidden',
    },
    scanLine: {
        position: 'absolute',
        top: '-5%',
        // Center the line on the x position by translating it by half its width
        transform: 'translateX(-50%)', 
        width: '4px',
        height: '110%',
        background: `linear-gradient(to bottom, transparent 0%, ${theme.color.Focus.Surface[1]} 50%, transparent 100%)`,
        boxShadow: `0 0 15px 3px ${theme.color.Focus.Surface[1]}`,
        zIndex: 2,
        borderRadius: '2px',
    },
    button: {
        ...theme.type.Readable.Body.M,
        fontWeight: 500,
        border: 'none',
        padding: `${theme.space.M} ${theme.space.L}`,
        borderRadius: theme.radius.full,
        cursor: 'pointer',
        boxShadow: theme.effect.shadow.Drop[1],
        transition: 'transform 0.2s',
        minWidth: '160px',
        textAlign: 'center',
    }
};

export default EncryptionVisualizer;