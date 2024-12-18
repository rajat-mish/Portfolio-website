tailwind.config={ // our own grid template column
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto':'repeat(auto-fit,minmax(200px,1fr))'
            },
            fontfamily:{
                outfit:[ "Outfit", "sans-serif"],
                Ovo:["Ovo","serif"]
            },
            animation:{
                spin_slow:'spin 6s linear infinite'
            },
            colors:{
                lightHover:'#fcf4ff',
                darkHover:'#2a004a',
                darktheme:'#11001F'
            }
        }
       
    },
    darkMode:'selector'
}