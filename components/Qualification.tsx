import { useRouter } from 'next/router'
import GermanQualification from './GermanQualification'
import RussianQualificationNew from './RussianQualificationNew'

const Qualification = () => {
    const router = useRouter()
    const { locale } = router

    if (locale === 'ru') {
        return <RussianQualificationNew />
    } else {
        return <GermanQualification />
    }
}

export default Qualification
