import { useRouter } from 'next/router'
import RussianQualification from './RussianQualification'
import GermanQualification from './GermanQualification'

const Qualification = () => {
    const router = useRouter()
    const { locale } = router

    if (locale === 'ru') {
        return <RussianQualification />
    } else {
        return <GermanQualification />
    }
}

export default Qualification
