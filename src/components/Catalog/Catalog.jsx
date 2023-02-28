import React from 'react'
import CatalogProduct from '../CatalogProduct/CatalogProduct'
import { Container } from '../Container/Container'
import Order from '../Order/Order'

import style from './Catalog.module.css'

const goodsList = [
	{ id: 1, title: 'Мясная бомба' },
	{ id: 2, title: 'Супер сырный' },
	{ id: 3, title: 'Сытный' },
	{ id: 4, title: 'Итальянский' },
	{ id: 5, title: 'Вечная классика' },
	{ id: 6, title: 'Тяжелый удар' },
]

const Catalog = () => {
	return (
		<section className='catalog'>
			<Container className={style.container}>
				<Order />

				<div className={style.wrapper}>
					<h2 className={style.title}>Бургеры</h2>

					<div className={style.wrap_list}>
						<ul className={style.list}>
							{goodsList.map((item) => (
								<li className={style.item} key={item.id}>
									<CatalogProduct title={item.title} />
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Catalog
