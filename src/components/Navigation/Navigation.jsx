import React, { useEffect } from 'react'
import classNames from 'classnames'

import { Container } from '../Container/Container'

import style from './Navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { categoryRequestAcync, changeCategory } from '../../store/category/categorySlice'
import { API_URI } from '../../const'

const Navigation = () => {
	const { category, activeCategory } = useSelector((state) => state.category)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(categoryRequestAcync('123'))
	}, [])

	return (
		<nav className={style.navigation}>
			<Container className={style.container}>
				<ul className={style.list}>
					{category.map((item, i) => (
						<li className={style.navigation_item} key={item.title}>
							<button
								className={classNames(style.button, activeCategory === i ? style.button_active : '')}
								style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
								onClick={() => {
									dispatch(changeCategory({ indexCategory: i }))
								}}
							>
								{item.rus}
							</button>
						</li>
					))}
				</ul>
			</Container>
		</nav>
	)
}

export default Navigation
