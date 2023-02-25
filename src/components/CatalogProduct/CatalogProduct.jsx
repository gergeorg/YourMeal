import React from 'react'
import style from './CatalogProduct.module.css'

const CatalogProduct = ({ title }) => {
	return (
		<article className={style.product}>
			<img src='' alt={title} className={style.image} />

			<p className={style.price}>
				689<span className='currency'>₽</span>
			</p>

			<h3 className={style.title}>
				<button className={style.detail}>{title}</button>
			</h3>

			<p className={style.weight}>520г</p>

			<button className={style.add} type='button'>
				Добавить
			</button>
		</article>
	)
}

export default CatalogProduct
