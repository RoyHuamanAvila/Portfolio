import { useSelector } from 'react-redux'
import { Sections } from '../../types'
import NavbarView from './NavbarView'
import { RootState } from '../../app/store'

const NavbarContainer = () => {
	const sectionInView = useSelector(
		(state: RootState) => state.pageParams.sectionInView
	)

	const isActiveLink = (nameSection: Sections) => {
		if (sectionInView === nameSection) {
			return 'active'
		} else {
			return ''
		}
	}

	return <NavbarView isActiveLink={isActiveLink} />
}

export default NavbarContainer
