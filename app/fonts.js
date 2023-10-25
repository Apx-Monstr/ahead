import { Outfit } from "next/font/google"

const outfit = Outfit({subsets:['latin'], display: 'swap', adjustFontFallback: false})
const outfitMedium = Outfit({subsets:['latin'],weight:"500"})
const outfitSemi = Outfit({subsets:['latin'],weight:"600"})

const fonts = {
    outfit,
    outfitMedium,
    outfitSemi
}

export default fonts;