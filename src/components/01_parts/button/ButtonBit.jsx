import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/buttonBit.module.scss';

export const ButtonBit = props => {   
    
    const { href, label, theme } = props;

    return (
        <a className={styles.btn} href={href}>
            <i className={['iconfont', 'icon-icon_arrowright']}></i> {label}
        </a>
    );
}

ButtonBit.propTypes = {
    href: PropTypes.string,
    theme: PropTypes.oneOf(['black', 'default']),
    label: PropTypes.string
};

ButtonBit.defaultProps = {
    href: 'https://hk.iteshop.com/b_it/',
    theme: 'default',
    label: 'SHOP NOW'
};
