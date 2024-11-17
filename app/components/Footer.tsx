import React from 'react';
import Button from './button';

interface FooterProps {
    toggleFeedCallback: () => void;
    killFeedCallback: () => void;
    isFeedKilled: boolean;
}

const Footer: React.FC<FooterProps> = ({
    toggleFeedCallback,
    killFeedCallback,
    isFeedKilled,
}) => {
    return (
        <div className='flex justify-center bg-[#121723]'>
            {!isFeedKilled && (
                <Button
                    title={'Toggle Feed'}
                    backgroundColor={'#5741d9'}
                    callback={toggleFeedCallback}
                />
            )}
            <Button
                title={isFeedKilled ? 'Renew feed' : 'Kill Feed'}
                backgroundColor={'#b91d1d'}
                callback={killFeedCallback}
            />
        </div>
    );
};

export default Footer;
