import classNames from 'classnames'

import style from './Container.module.css'

export const Container = ({ className, children }) => {
	return <div className={classNames(style.container, className)}>{children}</div>
}
