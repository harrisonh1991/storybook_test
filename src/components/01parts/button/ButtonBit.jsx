import React from 'react';
import styles from './styles/ButtonBit.module.scss';
import PropTypes from 'prop-types';

export const ButtonBit = props => {

    const { label, href, theme , align, size } = props;

    let btnClassNames = [styles.btn],
    tag_css_theme = 'btn__theme',
    tag_css_align = 'btn__align',
    tag_css_size = 'btn__size';
    
    switch(theme || ''){
        case 'black':
            btnClassNames.push(styles[tag_css_theme + '--black']);
        break;
        default:
            btnClassNames.push(styles[tag_css_theme + '--default']);
    }

    switch(size || ''){
        case 'full':
        break;
        default:
            btnClassNames.push(styles[tag_css_size + '--default']);
            
            switch(align || ''){
                case 'left':
                    btnClassNames.push(styles[tag_css_align + '--left']);
                break;
                case 'right':
                    btnClassNames.push(styles[tag_css_align + '--right']);
                break;
                default:
                    btnClassNames.push(styles[tag_css_align + '--default']);
            }
    }

    return (
        <a className={btnClassNames.join(' ')} href={href}>
            <i className={['iconfont','icon-icon_arrowright', styles.icon].join(' ')}></i> {label}
        </a>
    );
}

ButtonBit.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(['black', '']),
    size: PropTypes.oneOf(['full', '']),
    align: PropTypes.oneOf(['left', 'right', '']),
};
  
ButtonBit.defaultProps = {
    label: 'SHOP NOW',
    href: 'https://hk.iteshop.com'
};