import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Catalog from './components/Catalog/Catalog'

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Navigation />
				<Catalog />
			</main>
		</>
	)
}

export default App
