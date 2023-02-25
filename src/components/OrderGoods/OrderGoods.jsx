import React from 'react'
import Count from '../Count/Count'

import style from './OrderGoods.module.css'

const OrderGoods = () => {
	return (
		<li className={style.item}>
			<img className={style.image} src='' alt='Супер сырный' />

			<div className={style.goods}>
				<h3 className={style.title}>Супер сырный</h3>

				<p className={style.weight}>512г</p>

				<p className={style.price}>
					1279
					<span className='currency'>₽</span>
				</p>
			</div>

			<Count />
		</li>
	)
}

export default OrderGoods
