import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
            name: 'Anvu',
            email: 'Anvu13s308@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'CuongVu',
            email: 'Cuongvu2004@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            "_id": 1,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345942/poster/f2rtjmgzropdcceku4oc.jpg",
                    "id": "poster/f2rtjmgzropdcceku4oc"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345943/poster/gz9z62uxrb2nd23t2nxc.jpg",
                    "id": "poster/gz9z62uxrb2nd23t2nxc"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345943/poster/qg7oztaukobghhytxfie.jpg",
                    "id": "poster/qg7oztaukobghhytxfie"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345943/poster/v9txjtsaeq5wbvyn4xhk.jpg",
                    "id": "poster/v9txjtsaeq5wbvyn4xhk"
                }
            ],
            "name": "vans authentic 44 dx anaheim factory - vn0a38enu69",
            "price": 1200000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "xanh",
            "collections": "Anaheim Factory",
            "productType": "Authentic",
            "description": " Để kỉ niệm ngày thành lập của nhà máy Anaheim - nhà máy đầu tiên của Vans vào năm 1966-. Vans đã cho ra mắt bộ sưu tập mang tên “Anaheim Factory” như nhìn lại những chặng đường đã đi qua của mình . Với việc mượn lại hình ảnh của đôi Authentic quen thuộc, lại biến tấu lạ mắt hơn với họa tiết kẻ ô độc đáo, các sockliners UltraCush được cải tiến hiện đại. Van Anaheim Authentic 44 DX cũng sở hữu một outlook vượt trội so với những sản phẩm trước đây. Sản phẩm hiện đang có mặt tại hệ thống với 2 phiên bản OG White và OG Bright. Hệ thống Drake – Drake VN là đại lý chính thức phân phối sản phẩm Vans, tất cả sản phẩm bán ra đều đầy đủ phụ kiện kèm theo: Giày, Túi vải, Phiếu bảo hành, Hộ trùng code. Nếu là một fans của những đôi giày Vans thì hãy đừng bỏ lỡ cơ hội mua giày Vans chính hãng với những ưu đãi cực tốt từ Drake nhé. ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:59:02+00:00"
        },
        {
            "_id": 2,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345704/poster/wyqolqasrg88nroaqc4l.jpg",
                    "id": "poster/wyqolqasrg88nroaqc4l"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345705/poster/yvusrcp93lwsio85sk2e.jpg",
                    "id": "poster/yvusrcp93lwsio85sk2e"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345705/poster/spnlirpxoqhg9idf0vbb.jpg",
                    "id": "poster/spnlirpxoqhg9idf0vbb"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345705/poster/cb48hhzyf1i7j1vzvghk.jpg",
                    "id": "poster/cb48hhzyf1i7j1vzvghk"
                }
            ],
            "name": "vans anaheim factory style 73 dx - vn0a3wlqul1",
            "price": 2300000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "đen",
            "collections": "Anaheim Factory",
            "productType": "Anaheim Factory",
            "description": " Tháng 3 này chào đón sự trở lại của dòng giày Anaheim Factory cổ điển nhà Vans với sự xuất hiện của phiên bản Style73 DX từ những thập niên 90. Đây là sản phẩm với sự kết hợp hoàn hảo giữa cũ và mới giúp bạn có được một item mang đậm phong cách Retro. \n Thiết kế nguyên bản với phiên bản thời kỳ đầu \n Chất liệu da lộn cao cấp mang đến cảm giác của phong cách vintage, Retro vô cùng cuốn hútĐế giày bền chắc, có độ dày hơn với màu trắng ngà được phủ bóng đặc trưng Điểm nhấn tiếp theo chính là tem logo “Vans Off The Wall” ở phần lưỡi giày được dệt một cách tỉ mỉ mang đậm dấu ấn Retro của những ngày cũ. Đây là điều tạo nên sự khác biệt của Style 73 DX so với các dòng giày khác của Anaheim nói riêng và Vans nói chung Khác với đường lượn sóng trắng thường thấy ở dòng Old Skool, dải Flying-V lạ mắt, độc đáo được đính vào bên hông thân giày tạo nên điều đặc biệt cho Style 73 DX ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:55:04+00:00"
        },
        {
            "_id": 3,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345543/poster/tojvgozkzbdbaukfprtp.jpg",
                    "id": "poster/tojvgozkzbdbaukfprtp"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345543/poster/hwltyfirxopypsyzwyah.jpg",
                    "id": "poster/hwltyfirxopypsyzwyah"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345543/poster/knjtqpnpd3iblphxacj6.jpg",
                    "id": "poster/knjtqpnpd3iblphxacj6"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345544/poster/gesfcyraafcb2uvsk8bc.jpg",
                    "id": "poster/gesfcyraafcb2uvsk8bc"
                }
            ],
            "name": "vans old skool 36 dx anaheim factory - vn0a38g2pxc",
            "price": 2200000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "đen",
            "collections": "Old Skool DX",
            "productType": "Sid DX",
            "description": " Phải công nhận rằng chưa bao giờ cái tên Vans Anaheim thôi làm giới trẻ yêu giày mê mẩn bởi đây được xem là dòng sản phẩm được yêu thích nhất trong thập niên 90 đặc biệt là với những tay chơi ván trượt đường phố. Và để tiếp nối những thành công của các “đàn anh” đi trước, bộ sưu tập Vans Anaheim Factory Sid DX ra đời mang đến nguồn năng lượng lớn tái tạo lại hình bóng retro đầy hoài niệm cùng công nghệ hiện đại hứa hẹn sẽ mang đế cho các tín đồ sneaker nhiều trải nghiệm mới mẻ. \n Vans Anaheim Factory Sid Dx – Thời hoàng kim trở lại \n Rõ ràng năm 2019 dường như là năm “ăn nên làm ra” của nhà Vans khi đã “show” ra liên tục trên thị trường hàng hoạt những collection cực hot được giới trẻ săn đón phải kể đến như: BMX, Label Mix, Baker hay MN Ave Pro.... Cũng như bao lần trước, Vans nhất quyết không để fans của mình có giây phút “nghỉ ngơi” khi tiếp tục trình làng một cực phẩm với tên gọi quen thuộc Vans Anaheim Factory Sid Dx một collection với vẻ ngoài nhuốm màu retro nhưng nội thất bên trong lại vô cùng hiện đại.\nTừ trước đến nay mỗi khi nhắc đến Vans Anaheim mọi người thường nghĩ ngay đến lối thiết kế “cổ kính” đặc trưng – là nhân tố làm nên sức hút khó cưỡng cho dòng sản phẩm này và lần này cũng không ngoại lệ. ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:52:23+00:00"
        },

        {
            "_id": 4,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345417/poster/wovuu0lnb8vkgyqvpydn.jpg",
                    "id": "poster/wovuu0lnb8vkgyqvpydn"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345417/poster/y1henzsbmiaoa4huswvg.jpg",
                    "id": "poster/y1henzsbmiaoa4huswvg"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345418/poster/twlxtve5qfelivn7gtlf.jpg",
                    "id": "poster/twlxtve5qfelivn7gtlf"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345418/poster/jlnrlpbpnc6isecc0jjv.jpg",
                    "id": "poster/jlnrlpbpnc6isecc0jjv"
                }
            ],
            "name": "vans old skool 36 dx anaheim factory - vn0a38g2oak",
            "price": 2200000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "đen,trắng",
            "collections": "Old Skool DX",
            "productType": "Sid DX",
            "description": " Phải công nhận rằng chưa bao giờ cái tên Vans Anaheim thôi làm giới trẻ yêu giày mê mẩn bởi đây được xem là dòng sản phẩm được yêu thích nhất trong thập niên 90 đặc biệt là với những tay chơi ván trượt đường phố. Và để tiếp nối những thành công của các “đàn anh” đi trước, bộ sưu tập Vans Anaheim Factory Sid DX ra đời mang đến nguồn năng lượng lớn tái tạo lại hình bóng retro đầy hoài niệm cùng công nghệ hiện đại hứa hẹn sẽ mang đế cho các tín đồ sneaker nhiều trải nghiệm mới mẻ. \n Vans Anaheim Factory Sid Dx – Thời hoàng kim trở lại \n Rõ ràng năm 2019 dường như là năm “ăn nên làm ra” của nhà Vans khi đã “show” ra liên tục trên thị trường hàng hoạt những collection cực hot được giới trẻ săn đón phải kể đến như: BMX, Label Mix, Baker hay MN Ave Pro.... Cũng như bao lần trước, Vans nhất quyết không để fans của mình có giây phút “nghỉ ngơi” khi tiếp tục trình làng một cực phẩm với tên gọi quen thuộc Vans Anaheim Factory Sid Dx một collection với vẻ ngoài nhuốm màu retro nhưng nội thất bên trong lại vô cùng hiện đại.\nTừ trước đến nay mỗi khi nhắc đến Vans Anaheim mọi người thường nghĩ ngay đến lối thiết kế “cổ kính” đặc trưng – là nhân tố làm nên sức hút khó cưỡng cho dòng sản phẩm này và lần này cũng không ngoại lệ. ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:50:17+00:00"
        },
        {
            "_id": 5,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345366/poster/oqekdynzrgpggrzvokgr.jpg",
                    "id": "poster/oqekdynzrgpggrzvokgr"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345367/poster/m9rc7iqf47367ywo08z5.jpg",
                    "id": "poster/m9rc7iqf47367ywo08z5"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345367/poster/mepfjqxzdjoid2zsg1zd.jpg",
                    "id": "poster/mepfjqxzdjoid2zsg1zd"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345368/poster/qoigtuazs5anpfm9gj0g.jpg",
                    "id": "poster/qoigtuazs5anpfm9gj0g"
                }
            ],
            "name": "vans slip on checkerboard 98 dx anaheim factory - vn0a3jexpu1",
            "price": 1900000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "đen,trắng",
            "collections": "Anaheim Factory",
            "productType": "Sid DX",
            "description": " Phải công nhận rằng chưa bao giờ cái tên Vans Anaheim thôi làm giới trẻ yêu giày mê mẩn bởi đây được xem là dòng sản phẩm được yêu thích nhất trong thập niên 90 đặc biệt là với những tay chơi ván trượt đường phố. Và để tiếp nối những thành công của các “đàn anh” đi trước, bộ sưu tập Vans Anaheim Factory Sid DX ra đời mang đến nguồn năng lượng lớn tái tạo lại hình bóng retro đầy hoài niệm cùng công nghệ hiện đại hứa hẹn sẽ mang đế cho các tín đồ sneaker nhiều trải nghiệm mới mẻ. \n Vans Anaheim Factory Sid Dx – Thời hoàng kim trở lại \n Rõ ràng năm 2019 dường như là năm “ăn nên làm ra” của nhà Vans khi đã “show” ra liên tục trên thị trường hàng hoạt những collection cực hot được giới trẻ săn đón phải kể đến như: BMX, Label Mix, Baker hay MN Ave Pro.... Cũng như bao lần trước, Vans nhất quyết không để fans của mình có giây phút “nghỉ ngơi” khi tiếp tục trình làng một cực phẩm với tên gọi quen thuộc Vans Anaheim Factory Sid Dx một collection với vẻ ngoài nhuốm màu retro nhưng nội thất bên trong lại vô cùng hiện đại.\nTừ trước đến nay mỗi khi nhắc đến Vans Anaheim mọi người thường nghĩ ngay đến lối thiết kế “cổ kính” đặc trưng – là nhân tố làm nên sức hút khó cưỡng cho dòng sản phẩm này và lần này cũng không ngoại lệ. ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:49:26+00:00"
        },
        {
            "_id": 6,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345306/poster/yzetwfyhvcccer5lesom.jpg",
                    "id": "poster/yzetwfyhvcccer5lesom"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345306/poster/nslqurgumcglnby8vbkg.jpg",
                    "id": "poster/nslqurgumcglnby8vbkg"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345307/poster/wdgg9cubenjtppb6facl.jpg",
                    "id": "poster/wdgg9cubenjtppb6facl"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345307/poster/r6t6lm4mlzas8kawhfgi.jpg",
                    "id": "poster/r6t6lm4mlzas8kawhfgi"
                }
            ],
            "name": "vans anaheim factory sid dx - vn0a4btxul1",
            "price": 2300000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "đen",
            "collections": "Anaheim Factory",
            "productType": "Sid DX",
            "description": " Phải công nhận rằng chưa bao giờ cái tên Vans Anaheim thôi làm giới trẻ yêu giày mê mẩn bởi đây được xem là dòng sản phẩm được yêu thích nhất trong thập niên 90 đặc biệt là với những tay chơi ván trượt đường phố. Và để tiếp nối những thành công của các “đàn anh” đi trước, bộ sưu tập Vans Anaheim Factory Sid DX ra đời mang đến nguồn năng lượng lớn tái tạo lại hình bóng retro đầy hoài niệm cùng công nghệ hiện đại hứa hẹn sẽ mang đế cho các tín đồ sneaker nhiều trải nghiệm mới mẻ. \n Vans Anaheim Factory Sid Dx – Thời hoàng kim trở lại \n Rõ ràng năm 2019 dường như là năm “ăn nên làm ra” của nhà Vans khi đã “show” ra liên tục trên thị trường hàng hoạt những collection cực hot được giới trẻ săn đón phải kể đến như: BMX, Label Mix, Baker hay MN Ave Pro.... Cũng như bao lần trước, Vans nhất quyết không để fans của mình có giây phút “nghỉ ngơi” khi tiếp tục trình làng một cực phẩm với tên gọi quen thuộc Vans Anaheim Factory Sid Dx một collection với vẻ ngoài nhuốm màu retro nhưng nội thất bên trong lại vô cùng hiện đại.\nTừ trước đến nay mỗi khi nhắc đến Vans Anaheim mọi người thường nghĩ ngay đến lối thiết kế “cổ kính” đặc trưng – là nhân tố làm nên sức hút khó cưỡng cho dòng sản phẩm này và lần này cũng không ngoại lệ. ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:48:26+00:00"
        },
        {
            "_id": 7,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345037/poster/qyrqi5frobs6kr81jtlo.jpg",
                    "id": "poster/qyrqi5frobs6kr81jtlo"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345037/poster/smtboyosgojdkt3fpgdk.jpg",
                    "id": "poster/smtboyosgojdkt3fpgdk"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345038/poster/eq4efanxkfh1jjkpxc1p.jpg",
                    "id": "poster/eq4efanxkfh1jjkpxc1p"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607345038/poster/ifoo5ehclbrqihqpwyc4.jpg",
                    "id": "poster/ifoo5ehclbrqihqpwyc4"
                }
            ],
            "name": "vans anaheim factory sid dx - vn0a4btxul4",
            "price": 2300000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "trắng sữa",
            "collections": "Anaheim Factory",
            "productType": "Sid DX",
            "description": " Phải công nhận rằng chưa bao giờ cái tên Vans Anaheim thôi làm giới trẻ yêu giày mê mẩn bởi đây được xem là dòng sản phẩm được yêu thích nhất trong thập niên 90 đặc biệt là với những tay chơi ván trượt đường phố. Và để tiếp nối những thành công của các “đàn anh” đi trước, bộ sưu tập Vans Anaheim Factory Sid DX ra đời mang đến nguồn năng lượng lớn tái tạo lại hình bóng retro đầy hoài niệm cùng công nghệ hiện đại hứa hẹn sẽ mang đế cho các tín đồ sneaker nhiều trải nghiệm mới mẻ. \n Vans Anaheim Factory Sid Dx – Thời hoàng kim trở lại \n Rõ ràng năm 2019 dường như là năm “ăn nên làm ra” của nhà Vans khi đã “show” ra liên tục trên thị trường hàng hoạt những collection cực hot được giới trẻ săn đón phải kể đến như: BMX, Label Mix, Baker hay MN Ave Pro.... Cũng như bao lần trước, Vans nhất quyết không để fans của mình có giây phút “nghỉ ngơi” khi tiếp tục trình làng một cực phẩm với tên gọi quen thuộc Vans Anaheim Factory Sid Dx một collection với vẻ ngoài nhuốm màu retro nhưng nội thất bên trong lại vô cùng hiện đại.\nTừ trước đến nay mỗi khi nhắc đến Vans Anaheim mọi người thường nghĩ ngay đến lối thiết kế “cổ kính” đặc trưng – là nhân tố làm nên sức hút khó cưỡng cho dòng sản phẩm này và lần này cũng không ngoại lệ. ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:43:57+00:00"
        },
        {
            "_id": 8,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344926/poster/tr6m2ft3prx9cauwhdmm.jpg",
                    "id": "poster/tr6m2ft3prx9cauwhdmm"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344927/poster/xp8ajmalctilgazjvxmw.jpg",
                    "id": "poster/xp8ajmalctilgazjvxmw"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344927/poster/ambpyp48bydvgwdpp6pr.jpg",
                    "id": "poster/ambpyp48bydvgwdpp6pr"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344928/poster/ai21wef96akrcxep4ikm.jpg",
                    "id": "poster/ai21wef96akrcxep4ikm"
                }
            ],
            "name": "vans anaheim factory sid dx - vn0a4btxvtm",
            "price": 2300000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "đỏ",
            "collections": "Anaheim Factory",
            "productType": "Sid DX",
            "description": " Phải công nhận rằng chưa bao giờ cái tên Vans Anaheim thôi làm giới trẻ yêu giày mê mẩn bởi đây được xem là dòng sản phẩm được yêu thích nhất trong thập niên 90 đặc biệt là với những tay chơi ván trượt đường phố. Và để tiếp nối những thành công của các “đàn anh” đi trước, bộ sưu tập Vans Anaheim Factory Sid DX ra đời mang đến nguồn năng lượng lớn tái tạo lại hình bóng retro đầy hoài niệm cùng công nghệ hiện đại hứa hẹn sẽ mang đế cho các tín đồ sneaker nhiều trải nghiệm mới mẻ. \n Vans Anaheim Factory Sid Dx – Thời hoàng kim trở lại \n Rõ ràng năm 2019 dường như là năm “ăn nên làm ra” của nhà Vans khi đã “show” ra liên tục trên thị trường hàng hoạt những collection cực hot được giới trẻ săn đón phải kể đến như: BMX, Label Mix, Baker hay MN Ave Pro.... Cũng như bao lần trước, Vans nhất quyết không để fans của mình có giây phút “nghỉ ngơi” khi tiếp tục trình làng một cực phẩm với tên gọi quen thuộc Vans Anaheim Factory Sid Dx một collection với vẻ ngoài nhuốm màu retro nhưng nội thất bên trong lại vô cùng hiện đại.\nTừ trước đến nay mỗi khi nhắc đến Vans Anaheim mọi người thường nghĩ ngay đến lối thiết kế “cổ kính” đặc trưng – là nhân tố làm nên sức hút khó cưỡng cho dòng sản phẩm này và lần này cũng không ngoại lệ. ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:42:06+00:00"
        },
        {
            "_id": 9,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344840/poster/naqvyr7kzehmbgflqjax.jpg",
                    "id": "poster/naqvyr7kzehmbgflqjax"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344840/poster/vvwxrzlw6bgpror94qr1.jpg",
                    "id": "poster/vvwxrzlw6bgpror94qr1"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344840/poster/ls4r9qyahsv9qn73onmc.jpg",
                    "id": "poster/ls4r9qyahsv9qn73onmc"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344841/poster/orvsnqhckp1kaumkr7oz.jpg",
                    "id": "poster/orvsnqhckp1kaumkr7oz"
                }
            ],
            "name": "vans anaheim factory sid dx - vn0a4btxxmc",
            "price": 2300000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "vàng",
            "collections": "Anaheim Factory",
            "productType": "Sid DX",
            "description": " Phải công nhận rằng chưa bao giờ cái tên Vans Anaheim thôi làm giới trẻ yêu giày mê mẩn bởi đây được xem là dòng sản\n    phẩm được yêu thích nhất trong thập niên 90 đặc biệt là với những tay chơi ván trượt đường phố. Và để tiếp nối những\n    thành công của các “đàn anh” đi trước, bộ sưu tập Vans Anaheim Factory Sid DX ra đời mang đến nguồn năng lượng lớn\n    tái tạo lại hình bóng retro đầy hoài niệm cùng công nghệ hiện đại hứa hẹn sẽ mang đế cho các tín đồ sneaker nhiều\n    trải nghiệm mới mẻ. \n Vans Anaheim Factory Sid Dx – Thời hoàng kim trở lại \n Rõ ràng năm 2019 dường như là năm “ăn nên làm ra” của nhà Vans khi đã “show” ra liên tục trên thị trường hàng hoạt\n    những collection cực hot được giới trẻ săn đón phải kể đến như: BMX, Label Mix, Baker hay MN Ave Pro.... Cũng như\n    bao lần trước, Vans nhất quyết không để fans của mình có giây phút “nghỉ ngơi” khi tiếp tục trình làng một cực phẩm\n    với tên gọi quen thuộc Vans Anaheim Factory Sid Dx một collection với vẻ ngoài nhuốm màu retro nhưng nội thất bên\n    trong lại vô cùng hiện đại.\n\n    Từ trước đến nay mỗi khi nhắc đến Vans Anaheim mọi người thường nghĩ ngay đến lối thiết kế “cổ kính” đặc trưng – là\n    nhân tố làm nên sức hút khó cưỡng cho dòng sản phẩm này và lần này cũng không ngoại lệ ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:40:39+00:00"
        },
        {
            "_id": 10,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344674/poster/jiqszcfvwt4fpjlcy1bc.jpg",
                    "id": "poster/jiqszcfvwt4fpjlcy1bc"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344674/poster/pndwiuy70rle8gfxtdc1.jpg",
                    "id": "poster/pndwiuy70rle8gfxtdc1"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344674/poster/w791veiuocuwrv52qkv6.jpg",
                    "id": "poster/w791veiuocuwrv52qkv6"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344675/poster/sg8d06iid4ou3urol2ni.jpg",
                    "id": "poster/sg8d06iid4ou3urol2ni"
                }
            ],
            "name": "vans ua era 95 dx anaheim factory - vn0a2rr1tio",
            "price": 2100000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "đen",
            "collections": "Anaheim Factory",
            "productType": "Sk8-Hi",
            "description": " Các thiết kế quen thuộc trong dòng Anaheim cao cấp \n Vẫn là những kiểu dáng quen thuộc của hai dòng giày kinh điển: Sk8 – Hi và Era. Các thiết kế thể hiện một sự đẳng cấp trong phong cách thời trang bởi điểm nhấn ở đế ngà Vintage.Khác với các dòng giày của Vans, Anaheim Factory được xem là sự hội tụ của những đỉnh cao trong công nghệ thiết kế giày. Ngoài form giày được thiết kế cứng cáp, chắc chắn, Anaheim còn khẳng định chất lượng bởi công nghệ đệm lót bên trong. Việc sử dụng đệm lót UltraCush được tạo ra từ chất liệu xốp nén giúp làm giảm trọng lượng cho đôi giày một cách rõ rệt giúp người mang có được sự êm ái, thông thoáng tối ưu. Ngoài ra, lớp gel bên trong còn giúp hấp thụ lực cực tốt để bạn có thể di chuyển một cách thoải mái và nhẹ nhàng hơn.\n \n Phong cách thời trang chất lừ với những item trắng đen cực dễ phối đồ \n Nói về các thiết kế lần này trong bộ sưu tập Anaheim Factory, Vans đã sử dụng những tông màu trắng đen kinh điển để làm nổi bật hơn phong cách Retro cho người mang. Ngoài ra những điểm nhấn nhá trên thiết kế cũng giúp làm nổi bật hơn cho các set đồ của bạn. ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:37:54+00:00"
        },
        {
            "_id": 11,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344545/poster/gb7dtmmeye5qniaaj2p2.jpg",
                    "id": "poster/gb7dtmmeye5qniaaj2p2"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344545/poster/a2gohzmscnpcdluxeica.jpg",
                    "id": "poster/a2gohzmscnpcdluxeica"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344546/poster/iutadjtsoviiyhgedo1j.jpg",
                    "id": "poster/iutadjtsoviiyhgedo1j"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344546/poster/pnngg575brcm38afvyds.jpg",
                    "id": "poster/pnngg575brcm38afvyds"
                }
            ],
            "name": "vans ua sk8-hi 38 dx anaheim factory - vn0a38gftio",
            "price": 2400000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "đen",
            "collections": "Anaheim Factory",
            "productType": "Sk8-Hi",
            "description": " Các thiết kế quen thuộc trong dòng Anaheim cao cấp \n Khác với các dòng giày của Vans, Anaheim Factory được xem là sự hội tụ của những đỉnh cao trong công nghệ thiết kế giày. Ngoài form giày được thiết kế cứng cáp, chắc chắn, Anaheim còn khẳng định chất lượng bởi công nghệ đệm lót bên trong. Việc sử dụng đệm lót UltraCush được tạo ra từ chất liệu xốp nén giúp làm giảm trọng lượng cho đôi giày một cách rõ rệt giúp người mang có được sự êm ái, thông thoáng tối ưu. Ngoài ra, lớp gel bên trong còn giúp hấp thụ lực cực tốt để bạn có thể di chuyển một cách thoải mái và nhẹ nhàng hơn. ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:35:45+00:00"
        },
        {
            "_id": 12,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344438/poster/dn9ilshtjwpejxlztbti.jpg",
                    "id": "poster/dn9ilshtjwpejxlztbti"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344439/poster/usdtpmiqfrgrigso4jiv.jpg",
                    "id": "poster/usdtpmiqfrgrigso4jiv"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344439/poster/xcnrthcioekxvtyk1pxm.jpg",
                    "id": "poster/xcnrthcioekxvtyk1pxm"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1607344440/poster/hgdecmyk87v17pwuptv0.jpg",
                    "id": "poster/hgdecmyk87v17pwuptv0"
                }
            ],
            "name": "vans ua sk8-hi 38 dx anaheim factory  vn0a38gftip",
            "price": 2200000,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam,nữ",
            "color": "trắng",
            "collections": "Anaheim Factory",
            "productType": "Sk8-Hi",
            "description": " Các thiết kế quen thuộc trong dòng Anaheim cao cấp \n Khác với các dòng giày của Vans, Anaheim Factory được xem là sự hội tụ của những đỉnh cao trong công nghệ thiết kế giày. Ngoài form giày được thiết kế cứng cáp, chắc chắn, Anaheim còn khẳng định chất lượng bởi công nghệ đệm lót bên trong. Việc sử dụng đệm lót UltraCush được tạo ra từ chất liệu xốp nén giúp làm giảm trọng lượng cho đôi giày một cách rõ rệt giúp người mang có được sự êm ái, thông thoáng tối ưu. Ngoài ra, lớp gel bên trong còn giúp hấp thụ lực cực tốt để bạn có thể di chuyển một cách thoải mái và nhẹ nhàng hơn. ",
            "key": "vans",
            "NSX": "vans anaheim factory",
            "createdAt": "2020-12-07T12:33:58+00:00"
        },
        {
            "_id": 13,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                },
                {
                    "options": 44
                },
                {
                    "options": 45
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597767208/poster/glgtnbtv1y99oeaph4jo.jpg",
                    "id": "poster/glgtnbtv1y99oeaph4jo"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597767211/poster/wjbzp9sculxrh3sn5hlh.jpg",
                    "id": "poster/wjbzp9sculxrh3sn5hlh"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597767214/poster/wo2z4ilxbhvsrkieiqwk.jpg",
                    "id": "poster/wo2z4ilxbhvsrkieiqwk"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597767216/poster/zlz8psimp0b3p7g62gzq.jpg",
                    "id": "poster/zlz8psimp0b3p7g62gzq"
                }
            ],
            "name": "alphabounce beyond grey",
            "price": 977500,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam",
            "color": "xám",
            "collections": "alphabounce",
            "productType": "adidas",
            "description": " giày adidas alphabounce beyond grey red  <p >giày adidas alphabounce beyond xám đỏ là một trong những màu sắc cá tính nhất khi kết hợp màu xám bạc và  màu đỏ làm điểm nhấn một cách tinh tế. mang đến cho các bạn một phong cách mạnh mẽ, tràn đầy năng lượng. chất sang lại rất nổi bật và thời trang. tạo ra một trào lưu mới hiện nay.   giày adidas alphabounce beyond được cải tiến mạnh mẽ hơn  <p >thừa kế tính đa dụng của đời alphabounce trước và lắng nghe ý kiến của khách hàng, hiểu thấu được những gì khách hàng mong muốn vì vậy adidas đã cải tiến mạnh mẽ về bên ngoài của đôi giày giúp đôi giày alphabounce beyond đáp ứng tốt nhất và có những trải nghiệm đầy thú vị cho khách hàng.   <p >không phải đơn giản chỉ để cho đẹp cá tính, mà phần đế bounce được adidas thiết kế bè ra là có nguyên do. phần đế bè ra giúp bạn chống lật gót chân dẫn đến tình trạng chấn thương cổ chân khi vận động mạnh. và phần đế giày alphabounce beyond bè ra giúp tản điều lực bàn chân giảm bớt áp lực trọng lượng cơ thể lên bàn chân. giúp bước chân vững trải giảm thiểu những chấn thương thường gặp với những môn thể thao vận động cao. ",
            "key": "adidas",
            "NSX": "adidas alphabounce",
            "createdAt": "2020-11-20T23:32:27+07:00"
        },
        {
            "_id": 14,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                },
                {
                    "options": 44
                },
                {
                    "options": 45
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766994/poster/nq5az3cbxyrtbbvj7dme.jpg",
                    "id": "poster/nq5az3cbxyrtbbvj7dme"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766996/poster/ia8lf1yyivhfl5rklvln.jpg",
                    "id": "poster/ia8lf1yyivhfl5rklvln"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766998/poster/ip1faqb0divfmtianeip.jpg",
                    "id": "poster/ip1faqb0divfmtianeip"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597767001/poster/lxtueuouukkqmixx3bae.jpg",
                    "id": "poster/lxtueuouukkqmixx3bae"
                }
            ],
            "name": "alphabounce instinct core black silver metallic",
            "price": 967500,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam, nữ",
            "color": "đen",
            "collections": "alphabounce",
            "productType": "adidas",
            "description": " đôi giày mang lại cảm giác linh hoạt, thoải mái.  <p >alphabounce instinct core black silver metallic với chất liệu cao cấp đảm bảo độ bền và thoải mái chân khi mang. kiểu dáng đơn giản nhưng không kém phầm sang trọng. giúp bảo vệ đôi chân của bạn trong suốt quá trính vận động. với cảm hứng đầy tự hào từ những phiên bản đi trước sẽ là người bạn đồng hành siêu bền bỉ cho bạn trong các trải nghiệm đường phố mỗi ngày. ",
            "key": "adidas",
            "NSX": "adidas alphabounce",
            "createdAt": "2020-11-20T23:31:49+07:00"
        },
        {
            "_id": 15,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                },
                {
                    "options": 44
                },
                {
                    "options": 45
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766828/poster/yx4wbnmqovzqju2uzc9l.jpg",
                    "id": "poster/yx4wbnmqovzqju2uzc9l"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766831/poster/qqn7bdytz4bnvpg6ibrw.jpg",
                    "id": "poster/qqn7bdytz4bnvpg6ibrw"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766833/poster/zjyze1x2gnjpa0dtsbyk.jpg",
                    "id": "poster/zjyze1x2gnjpa0dtsbyk"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766835/poster/zgi9u2nwg3gnphbg79yq.jpg",
                    "id": "poster/zgi9u2nwg3gnphbg79yq"
                }
            ],
            "name": "alphabounce instinct triple white",
            "price": 967500,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam, nữ",
            "color": "trắng",
            "collections": "alphabounce",
            "productType": "adidas",
            "description": " đôi giày mang lại cảm giác linh hoạt, thoải mái.  <p >alphabounce instinct triple white với chất liệu cao cấp đảm bảo độ bền và thoải mái chân khi mang. kiểu dáng đơn giản nhưng không kém phầm sang trọng. giúp bảo vệ đôi chân của bạn trong suốt quá trính vận động. với cảm hứng đầy tự hào từ những phiên bản đi trước sẽ là người bạn đồng hành siêu bền bỉ cho bạn trong các trải nghiệm đường phố mỗi ngày.  ",
            "key": "adidas",
            "NSX": "adidas alphabounce",
            "createdAt": "2020-11-20T23:25:54+07:00"
        },
        {
            "_id": 16,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                },
                {
                    "options": 44
                },
                {
                    "options": 45
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766633/poster/mdjhzkgodbwio5ge38k7.jpg",
                    "id": "poster/mdjhzkgodbwio5ge38k7"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766635/poster/bgj1vsec01dpg9vsnihh.jpg",
                    "id": "poster/bgj1vsec01dpg9vsnihh"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766637/poster/hogtlbwvwfkaxartsau6.jpg",
                    "id": "poster/hogtlbwvwfkaxartsau6"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766640/poster/wxqrftb4s4btrhrulnlj.jpg",
                    "id": "poster/wxqrftb4s4btrhrulnlj"
                }
            ],
            "name": "alphabounce instinct linen",
            "price": 967500,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam, nữ",
            "color": "nâu, trắng",
            "collections": "alphabounce",
            "productType": "adidas",
            "description": "      giày chạy bộ đa năng với phần trên lưới hỗ trợ liền mạch.   <p >được thiết kế để trở thành giày chạy của vận động viên, những đôi giày này có phần trên mềm mại và co giãn ôm sát bàn chân của bạn để tạo cảm giác vừa vặn và thoải mái. đế giữa có lò xo cung cấp sự gia cố ở giữa và bên để khóa chân giữa. loại người chạy giày trung tính dành cho người chạy đa năng vừa vặn hỗ trợ phần trên liền mạch được thiết kế với các khu vực hỗ trợ và kéo giãn để giúp đảm bảo vừa vặn tùy chỉnh thích ứng với mọi chuyển động đệm lò xo đệm nảy tạo sự thoải mái và linh hoạt nâng cao cầu xoắn nâng cao bao bọc bàn chân giữa để tạo sự ổn định và cho phép chuyển động tự nhiên của bàn chân trước và bàn chân sau lực kéo đáng tin cậy đế ngoài cao su continental ™ cho lực kéo đặc biệt trong điều kiện khô và ướt  ",
            "key": "adidas",
            "NSX": "adidas alphabounce",
            "createdAt": "2020-11-20T23:25:39+07:00"
        },
        {
            "_id": 17,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                },
                {
                    "options": 44
                },
                {
                    "options": 45
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766324/poster/comt15nsibk0icdayrhu.jpg",
                    "id": "poster/comt15nsibk0icdayrhu"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766326/poster/tdkvasgwt1rcshkgjigw.jpg",
                    "id": "poster/tdkvasgwt1rcshkgjigw"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766328/poster/nfphdzpjoikgyjikql02.jpg",
                    "id": "poster/nfphdzpjoikgyjikql02"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766330/poster/bon1syt2sw61nufvdahr.jpg",
                    "id": "poster/bon1syt2sw61nufvdahr"
                }
            ],
            "name": "alphabounce instinct core heather",
            "price": 967500,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam, nữ",
            "color": "xám",
            "collections": "alphabounce",
            "productType": "adidas",
            "description": "      giày chạy bộ đa năng với phần trên lưới hỗ trợ liền mạch.   <p >được thiết kế để trở thành giày chạy của vận động viên, những đôi giày này có phần trên mềm mại và co giãn ôm sát bàn chân của bạn để tạo cảm giác vừa vặn và thoải mái. đế giữa có lò xo cung cấp sự gia cố ở giữa và bên để khóa chân giữa. loại người chạy giày trung tính dành cho người chạy đa năng vừa vặn hỗ trợ phần trên liền mạch được thiết kế với các khu vực hỗ trợ và kéo giãn để giúp đảm bảo vừa vặn tùy chỉnh thích ứng với mọi chuyển động đệm lò xo đệm nảy tạo sự thoải mái và linh hoạt nâng cao cầu xoắn nâng cao bao bọc bàn chân giữa để tạo sự ổn định và cho phép chuyển động tự nhiên của bàn chân trước và bàn chân sau lực kéo đáng tin cậy đế ngoài cao su continental ™ cho lực kéo đặc biệt trong điều kiện khô và ướt  ",
            "key": "adidas",
            "NSX": "adidas alphabounce",
            "createdAt": "2020-11-20T23:25:27+07:00"
        },
        {
            "_id": 18,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                },
                {
                    "options": 44
                },
                {
                    "options": 45
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766160/poster/zm3aeazwsvnye2eg9dbd.jpg",
                    "id": "poster/zm3aeazwsvnye2eg9dbd"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766162/poster/qd8heyip4asbq4uip8jw.jpg",
                    "id": "poster/qd8heyip4asbq4uip8jw"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766164/poster/cwbnmzsys7fmpwah86k3.jpg",
                    "id": "poster/cwbnmzsys7fmpwah86k3"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597766165/poster/vfylz9orrt5hvfunlwhh.jpg",
                    "id": "poster/vfylz9orrt5hvfunlwhh"
                }
            ],
            "name": "alphabounce beyond black",
            "price": 977500,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam, nữ",
            "color": "xám",
            "collections": "alphabounce",
            "productType": "adidas",
            "description": " alphabounce beyond black   <p > alphabounce beyond màu đen mang phong cách mạnh mẽ trẻ trung, được thiết kế dành riêng cho     phái mạnh với form giày khỏe khoắn, phiên bản cổ lửng, thân giày làm bằng lưới thoáng mát với cấu trúc sợi dệt đan bện hiện đại, co giãn giúp bạn dễ vệ sinh sau tập luyện, đồng thời giày còn có khả năng thoát nước rất tốt.    một số thông tin về alphabounce beyond dark grey   <p >giày alphabounce beyond black là một đôi giày thể thao chạy bộ rất khỏe và độ bền cực tốt đó là những ấn tượng đầu tiên về giày alphabounce. hơn nữa nó còn là biểu tượng của sự khỏe khoắn và năng động do chất lượng và hiệu quả cũng như tính thời trang thẩm mỹ khá tốt. là sự lựa chọn số 1 nếu như bạn muốn tìm một dòng giày thể thao thay thế cho ultraboost.    ",
            "key": "adidas",
            "NSX": "adidas alphabounce",
            "createdAt": "2020-11-20T23:24:57+07:00"
        },
        {
            "_id": 19,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                },
                {
                    "options": 44
                },
                {
                    "options": 45
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597765802/poster/arwdaauz7suyjxighjzq.jpg",
                    "id": "poster/arwdaauz7suyjxighjzq"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597765804/poster/onutbodvi2kdrrbp3cur.jpg",
                    "id": "poster/onutbodvi2kdrrbp3cur"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597765806/poster/hpcsnzbziotx4wognxkp.jpg",
                    "id": "poster/hpcsnzbziotx4wognxkp"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1597765808/poster/sgextw3tocsulpvloggp.jpg",
                    "id": "poster/sgextw3tocsulpvloggp"
                }
            ],
            "name": "alphabounce instinct cloud white grey two",
            "price": 967500,
            "numReviews": 0,
            "rating": 0,
            "sex": "nam, nữ",
            "color": "xám",
            "collections": "alphabounce",
            "productType": "adidas",
            "description": "<p > alphabounce instinct cloud white grey two với chất liệu cao cấp đảm bảo độ bền và thoải mái chân khi mang. kiểu dáng đơn giản nhưng không kém phầm sang trọng. giúp bảo vệ đôi chân của bạn trong suốt quá trính vận động. với cảm hứng đầy tự hào từ những phiên bản đi trước sẽ là người bạn đồng hành siêu bền bỉ cho bạn trong các trải nghiệm đường phố mỗi ngày.      ",
            "key": "adidas",
            "NSX": "adidas alphabounce",
            "createdAt": "2020-11-20T23:24:38+07:00"
        },
        {
            "_id": 20,
            "size": [
                {
                    "options": 38
                },
                {
                    "options": 39
                },
                {
                    "options": 40
                },
                {
                    "options": 41
                },
                {
                    "options": 42
                },
                {
                    "options": 43
                }
            ],
            "poster": [
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1605883258/poster/e17hbc4npsfn3ewgyuqv.jpg",
                    "id": "poster/e17hbc4npsfn3ewgyuqv"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1605883260/poster/c6rnqearb7obzqjzthj3.jpg",
                    "id": "poster/c6rnqearb7obzqjzthj3"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1605883261/poster/pnntx8nzvgwj2ctv6nbz.jpg",
                    "id": "poster/pnntx8nzvgwj2ctv6nbz"
                },
                {
                    "url": "http://res.cloudinary.com/phuockaito/image/upload/v1605883263/poster/u2iwg0qpdi6aurryay97.jpg",
                    "id": "poster/u2iwg0qpdi6aurryay97"
                }
            ],
            "name": "Vans UA Classic Slip On Shit Happens VN0A4U38WTX",
            "price": 1350000,
            "numReviews": 0,
            "rating": 0,
            "sex": "Nam/Nữ",
            "color": "(Shit Happens) cadmium yellow/true white",
            "collections": "Shit Happens",
            "productType": "giầy vans",
            "description": " Vans cho ra mắt BST Vans Shit Happens tại thị trường Việt Nam. BST mang đến một nét thú vị mới mà không phải hãng giày nào cũng dám thể hiện, phá bỏ đi rào cản lề lối của chiếc mặt nạ đứng đắn mà mọi người khoác lên hàng ngày, đem đến sự thoải mái và cá tính chất chơi trong phong cách. Nói đến đây hẳn là bạn đã cảm thấy quá tò mò, từ cái tên đến diện mạo của những đôi giày trong BST rồi đúng không nào? Vậy thì hãy cùng nhìn ngắm phong cách độc và lạ của BST Vans Shit Happens ngay bây giờ nhé.    Biến tấu đầy phong cách với cụm từ tiếng lóng “Shit Happens”   Nếu từng xem qua nhiều bộ phim về văn hóa sống đậm chất đường phố của Mỹ thì chắc hẳn bạn sẽ không xa lạ gì với cụm từ “Shit Happens”. Đây là cụm từ tiếng lóng của Mỹ, như một sự biểu thị thái độ “khá cộc” khi một việc không như mong muốn xảy ra. Một cụm từ thể hiện rõ nét phong cách đường phố lại được mang vào vào đôi giày Vans một cách đầy tinh tế, như một sự phá bỏ rào cản của chiếc mặt nạ đứng đắn, ngăn con người ta sống đúng với cảm xúc của mình.   Cụm từ này không được dùng nhiều trên các phương tiện truyền thông đại chúng, nhưng với những ai am hiểu về văn hóa Mỹ thì sẽ rõ ràng về ý nghĩa và cách dùng. Một từ ngữ tiếng lóng được sử dụng trong sinh hoạt đời thường của người dân xứ Mỹ, nhất là đối với thế hệ trẻ với tính cách xốc nổi, luôn muốn thể hiện bản thân mình. Vans đã mang từ ngữ này vào đôi giày, thể hiện đúng chất lối sống đường phố của Mỹ và mang lại một không gian văn hóa thật bản địa.   Chỉ đơn giản là một từ ngữ thông tục hay với nhà thiết kế, họ còn muốn mang đến thông điệp nào khác? Có thể hiểu đơn giản là Vans muốn truyền đạt một lối sống thật trẻ trung, thật cá tính, đậm chất đường phố, đúng với bản chất của mỗi người, cởi bỏ đi chiếc mặt nạ nghiêm túc mà mọi người thường phải khoác lên trong công việc, và trong các dịp trang trọng khác. ",
            "key": "vans",
            "NSX": "vans sneaker",
            "createdAt": "2020-11-20T21:40:59+07:00"
        }
    ]
}
export default data;