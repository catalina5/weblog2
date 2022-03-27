const data = {
    homePost: [
        {
            id: 1,
            img: 'https://blogger.googleusercontent.com/img/a/AVvXsEgVvOZkZ65S4fIjbDm0jXIDe3cyJuuFIqi1HbD4vTJoS3qcUhD_VZ27S-K4_gcVTJJBPBeqntDfHmYidYtPlbTWELWf7COAHXtOG6IZyyMgHPMK2i6uD80SRaUuZZrQljHuonJE8AKGlECdvv9Yrz1yEGQJqet7FSc-kKWWtR5Q4owIv50Ql7mXoNT3=w474-h296-p-k-no-nu',
            title: 'Girl with camera style',
            category: 'Music'
        },
        {
            id: 2,
            img: 'https://blogger.googleusercontent.com/img/a/AVvXsEiz29Q9Px49ULga09YtCVRw7lcL2hwV-DeGbWRlyKLHA37O2LaPeqdCDt-EA6bleEDypUgfphD61qSxV5YGe-5AVe1rX4O3O8LwLfgb8dzAVWnxDjOIkOhUegs93_okBr_AjbEgsLnF0cgwlBVaceG6_JnVOklpWNKHlGz0iKeI_7_apwcv4bN6yo5p=w474-h296-p-k-no-nu',
            title: 'Elegant woman in front of a waterfall',
            category: 'Fashion'
        },
        {
            id: 3,
            img: 'https://blogger.googleusercontent.com/img/a/AVvXsEiytyDyfZ9Gwwx8g50zDi7sGzm4njoT0zy3DrCNai-IJqxYP7NcQQb9nmaAxhDXnLwWllVXdMSe161WPIttC8VFD3dScOlHYIJMXWUJluYZLL2G_kzjI3B7MhdDzBQZgcSidMU0fwU661wN09gz7J-tcnYgmLqZpwMOJI3X3Nx0-lbOJBsUjFT7eUZH=w474-h296-p-k-no-nu',
            title: 'Fashion and beautiful backpack',
            category: 'Fashion'
        },
        {
            id: 4,
            img: 'https://blogger.googleusercontent.com/img/a/AVvXsEjrLHZK7EjxQcLrqCcxbAwy5v1YzzqYesyxYMJTn__4DDMUGOc4usJIwzGPWwqrUcZC0CozJBmVBmlRPZwlo6_zNrabax8Fip2T46UEjGE0rpWKjDlHlqj77XTGRgcB0I55eWyBMWAYo_bCX74HfQGADFpeX3nk5XClcvAKkm7ayn30-Io6K1PnrxFt=w474-h296-p-k-no-nu',
            title: 'Elegant business man having a delicious cup of coffee',
            category: 'People'
        },
        {
            id: 5,
            img: 'https://blogger.googleusercontent.com/img/a/AVvXsEh6kyeouJzhJLBtIOafT4dXRZBoHSwgkPQMAmC9PYBgFy301prV0NUZ1nJhPvzX0dCUUYMD3aTtJxjcrKqUrsS_b-5lQBHenvH5-g0zdsp9IXIX2mHHiHayCEvBiWGCcyOR--0vY1YquuJpjwKV_SRwAPzYxwpruJGumO5KaM1OZTWKd5V7ondQZtCa=w474-h296-p-k-no-nu',
            title: 'Girl with camera style vintage',
            category: 'Photography'
        },
        {
            id: 6,
            img: 'https://1.bp.blogspot.com/-tE181d_K7gs/Vupfu_6tHnI/AAAAAAAADYE/OXF5cqzoXao890DJVCBdSeEMyCtdcKIjA/w474-h296-p-k-no-nu/girl-984155_960_720.jpg',
            title: 'Girl play with fireworks in nature',
            category: 'People'
        },
        {
            id: 7,
            img: 'https://4.bp.blogspot.com/-GkUyTOGonKQ/Vupe8svLNsI/AAAAAAAADX0/tqWMHfiRudY_V82YeEE7yq86apVldYnZA/w474-h296-p-k-no-nu/photographer-1150052_960_720.jpg',
            title: 'Cool vintage photograph',
            category: 'Photography'
        },
        {
            id: 8,
            img: 'https://1.bp.blogspot.com/-v0QptPDrcVs/VupeaXsiCOI/AAAAAAAADXw/mXxQ3zVItm0UWkJqINGNkzqwVFL4pA6DQ/w474-h296-p-k-no-nu/books-1185628_960_720.jpg',
            title: 'Old books stacked on top of a ladder',
            category: 'Learn'
        },
        {
            id: 9,
            img: 'https://4.bp.blogspot.com/-BlBi18JGkEA/Vupbk40a0UI/AAAAAAAADXk/rydm_x2vsJURxIq763HgLebaYXvmhrnQA/w474-h296-p-k-no-nu/person-731479_960_720.jpg',
            title: 'Business man analyzing graphs on a tablet',
            category: 'Technology'
        },
        {
            id: 10,
            img: 'https://2.bp.blogspot.com/-C2ZNH3JwldA/Vupbf-HopaI/AAAAAAAADXU/xq1cJrP0LJMEylkyCr76kPNm-bxo0-7og/w474-h296-p-k-no-nu/city-1150026_960_720.jpg',
            title: 'Cars waiting pedestrians cross the street',
            category: 'Technology'
        },
        {
            id: 11,
            img: 'https://1.bp.blogspot.com/-keqVlJeDxRA/Vupbj8ebLMI/AAAAAAAADXg/jEq7fAGhLyEO13ayr69hPg_c-m5yK1-Mw/w474-h296-p-k-no-nu/imac-605421_960_720.jpg',
            title: 'Tablet on a table showing calendar',
            category: 'Technology'
        },
        {
            id: 12,
            img: 'https://4.bp.blogspot.com/-hRZbMTprGYM/VupbiPgYX-I/AAAAAAAADXc/ghlbMrG6NxgLTqZOyGb3FDmqvuu584_ZQ/w474-h296-p-k-no-nu/business-man-1031755_960_720.jpg',
            title: 'Business man reading newspaper',
            category: 'Learn'
        },
        {
            id: 13,
            img: 'https://4.bp.blogspot.com/-WQooH_zXbmE/Vupbh9DASKI/AAAAAAAADXY/ar3YOh4Tu986R3N0gA65ckU8APk43ArQQ/w474-h296-p-k-no-nu/buildings-1149917_960_720.jpg',
            title: 'Sunset behind an old and beautiful building',
            category: 'Photography'
        },
        {
            id: 14,
            img: 'https://1.bp.blogspot.com/-NgTHE9VTuzU/VupZzu7WM1I/AAAAAAAADXE/GlsZafgUyb8FDNP19GfHsnIhiUTjbFk3w/w474-h296-p-k-no-nu/beef-1204649_960_720.jpg',
            title: 'Sandwich with delicious cheeses',
            category: 'Food'
        },
        {
            id: 15,
            img: 'https://4.bp.blogspot.com/-xcrSOZLGycA/VupZydWLg-I/AAAAAAAADXA/2iIF_hX7sakciiBFeolr3xcQGrtJFVMtQ/w474-h296-p-k-no-nu/italian-1082230_960_720.jpg',
            title: 'Cook preparing delicious pasta',
            category: 'Food'
        },
        {
            id: 16,
            img: 'https://4.bp.blogspot.com/-P-12tKyqaUY/VupZ095myKI/AAAAAAAADXI/gX9DQ4918NcdtEjdIIreFLmjtakuG7b9w/w474-h296-p-k-no-nu/pumpkin-1030817_960_720.jpg',
            title: 'Ripe pumpkin in the middle of green grass',
            category: 'Food'
        }
    ]
}

export default data