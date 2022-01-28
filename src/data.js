const articles = [
	{
		source: { id: null, name: 'Youm7.com' },
		author: null,
		title:
			'خبير أرصاد يكشف موعد تحسن حالة الجو وارتفاع درجات الحرارة - اليوم السابع',
		description:
			'كشفت الدكتور أحمد عبد العال رئيس هيئة الأرصاد الجوية السابق وخبير الأرصاد، أنه من المتوقع أن تشهد البلاد حالة تحسن تدريجى فى الأحوال الجوية مع بداية الأسبوع..',
		url: 'https://www.youm7.com/story/2022/1/28/خبير-أرصاد-يكشف-موعد-تحسن-حالة-الجو-وارتفاع-درجات-الحرارة/5635112',
		urlToImage: 'https://img.youm7.com/large/202111211225222522.jpg',
		publishedAt: '2022-01-28T13:07:00Z',
		content: null
	},
	{
		source: { id: 'rt', name: 'RT' },
		author: 'RT Arabic',
		title: 'بعد بضع كلمات.. إيلون ماسك يخسر 24.5 مليار دولار - RT Arabic',
		description:
			'خسر مؤسس شركة "تسلا" لصناعة السيارات الكهربائية إيلون ماسك نحو 24.5 مليار دولار من إجمالي ثروته في يوم واحد، وذلك في ظل تراجع سهم شركة "تسلا" بأكثر من 11% يوم أمس.',
		url: 'https://arabic.rt.com/business/1319060-%D8%A8%D8%B9%D8%AF-%D8%A8%D8%B6%D8%B9-%D9%83%D9%84%D9%85%D8%A7%D8%AA-%D8%A5%D9%8A%D9%84%D9%88%D9%86-%D9%85%D8%A7%D8%B3%D9%83-%D9%8A%D8%AE%D8%B3%D8%B1-245-%D9%85%D9%84%D9%8A%D8%A7%D8%B1-%D8%AF%D9%88%D9%84%D8%A7%D8%B1-%D9%81%D9%8A-%D9%8A%D9%88%D9%85-%D9%88%D8%A7%D8%AD%D8%AF/',
		urlToImage:
			'https://cdni.rt.com/media/pics/2022.01/original/61f3d79c4236047825473483.jpg',
		publishedAt: '2022-01-28T12:13:00Z',
		content: null
	},
	{
		source: { id: 'rt', name: 'RT' },
		author: 'RT Arabic',
		title:
			'بيسكوف يعلق على "مزحة" نولاند حول ضخ الفودكا عبر "السيل الشمالي-2" - RT Arabic',
		description:
			'علق المتحدث باسم الرئاسة الروسية على مزحة نائبة وزير الخارجية الأمريكي فيكتوريا نولاند حول ضخ الفودكا عبر "السيل الشمالي-2" بالقول "ليمزحوا" فهذا أفضل من التصعيد في أوروبا.',
		url: 'https://arabic.rt.com/world/1319045-%D8%A8%D9%8A%D8%B3%D9%83%D9%88%D9%81-%D9%8A%D8%B9%D9%84%D9%82-%D8%B9%D9%84%D9%89-%D9%85%D8%B2%D8%AD%D8%A9-%D9%86%D9%88%D9%84%D8%A7%D9%86%D8%AF-%D8%AD%D9%88%D9%84-%D8%B6%D8%AE-%D8%A7%D9%84%D9%81%D9%88%D8%AF%D9%83%D8%A7-%D8%B9%D8%A8%D8%B1-%D8%A7%D9%84%D8%B3%D9%8A%D9%84-%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A-2/',
		urlToImage:
			'https://cdni.rt.com/media/pics/2022.01/original/61f3cef54c59b75c4f3ef152.jpg',
		publishedAt: '2022-01-28T11:22:00Z',
		content: null
	},
	{
		source: { id: null, name: 'Skynewsarabia.com' },
		author: 'سكاي نيوز عربية',
		title: 'رونالدو يفاجئ صديقته بهدية من على برج خليفة - سكاي نيوز عربية',
		description:
			'احتفل النجم البرتغالي كريستيانو رونالدو بعيد ميلاد صديقته عارضة الأزياء جورجينا رودريغيز، في دبي بدولة الإمارات، بطريقة مبتكرة.',
		url: 'https://www.skynewsarabia.com/varieties/1496990-%D8%B1%D9%88%D9%86%D8%A7%D9%84%D8%AF%D9%88-%D9%8A%D9%81%D8%A7%D8%AC%D9%8A%D9%94-%D8%B5%D8%AF%D9%8A%D9%82%D8%AA%D9%87-%D8%A8%D9%87%D8%AF%D9%8A%D8%A9-%D8%B9%D9%84%D9%89-%D8%A8%D8%B1%D8%AC-%D8%AE%D9%84%D9%8A%D9%81%D8%A9',
		urlToImage:
			'https://www.skynewsarabia.com/images/v1/2022/01/28/1496989/1200/630/1-1496989.jpg',
		publishedAt: '2022-01-28T11:01:14Z',
		content: null
	},
	{
		source: { id: null, name: 'Masrawy.com' },
		author: 'مصراوي',
		title:
			'فيديو مؤثر لبكاء إيمي ودنيا سمير غانم ووقوف حضور joy awards لتحيتهما - Masrawy-مصراوي',
		description:
			'فيديو مؤثر لبكاء إيمي ودنيا سمير غانم ووقوف حضور joy awards لتحيتهما | مصراوى',
		url: 'https://www.masrawy.com/arts/zoom/details/2022/1/28/2165766/فيديو-مؤثر-لبكاء-إيمي-ودنيا-سمير-غانم-ووقوف-حضور-joy-awards-لتحيتهما',
		urlToImage:
			'https://media.gemini.media/img/large/2022/1/28/2022_1_28_12_21_35_785.JPG',
		publishedAt: '2022-01-28T10:24:00Z',
		content: null
	},
	{
		source: { id: null, name: 'BBC News' },
		author: 'https://www.facebook.com/bbcnews',
		title:
			'روسيا وأوكرانيا: بايدن يحذر من غزو روسي محتمل لأوكرانيا "الشهر المقبل - BBC Arabic',
		description:
			'تحذير أمريكي من غزو روسي محتمل لأوكرانيا في فبراير/ شباط القادم رغم النفي الروسي، والولايات المتحدة تهدد بوقف افتتاح خط أنابيب لنقل الغاز الروسي إلى أوروبا الغربية وتطلب من مجلس الأمن عقد اجتماع لمناقشة التهديد الروسي.',
		url: 'https://www.bbc.com/arabic/world-60135442',
		urlToImage:
			'https://ichef.bbci.co.uk/news/1024/branded_arabic/430B/production/_123036171__123034085_mediaitem123034084.jpg',
		publishedAt: '2022-01-28T10:07:30Z',
		content:
			'Reuters\r\n" " . \r\n " " . \r\n . \r\n . \r\n. \r\n " / ". \r\n " ."\r\n " " " ". \r\n " ". \r\n "" . . \r\n . \r\n " 2" . \r\n . \r\n 1,225 11 . . \r\n . \r\n "". \r\n " ". \r\n " " " ."\r\n " " . \r\n " " . \r\n . \r\n .\r\n . \r\n .\r\n " ". \r\n … [+66 chars]'
	},
	{
		source: { id: null, name: 'BBC News' },
		author: 'https://www.facebook.com/bbcnews',
		title: 'قصة المكان الذي قد يمثل أقدم شكل للحياة على وجه الأرض - BBC Arabic',
		description:
			'تاريخ منطقة بيلبارا في غرب أستراليا يعود إلى نحو 3.6 مليار سنة، وهي موطن للأدلة الأحفورية لأقدم أشكال الحياة على الأرض، كما يقول علماء.',
		url: 'https://www.bbc.com/arabic/vert-cul-60145770',
		urlToImage:
			'https://ichef.bbci.co.uk/news/1024/branded_arabic/DE96/production/_123028965_8ca866b6-a8ff-417f-b22b-2c65b466a093.jpg',
		publishedAt: '2022-01-28T09:38:39Z',
		content:
			'Dan Avila\r\n3.6 .\r\n .\r\n 3.6 . \r\n : 61 !\r\n. .\r\n : " ".\r\n .\r\n 1980 3.45 ( ) . .\r\n ( ) . .\r\n 2019 . : " ". \r\n: " ".\r\n . : " ".\r\n .\r\n . .\r\n . \r\n . : " ".\r\n .\r\n . . .\r\n " " . .\r\n . . \r\n . .\r\n : " . . . . "… [+12 chars]'
	},
	{
		source: { id: 'rt', name: 'RT' },
		author: 'RT Arabic',
		title: 'متى تهدأ موجة "كوفيد-19" الناجمة عن متحور "أوميكرون"؟ - RT Arabic',
		description:
			'يتوقع عالم الفيروسات الروسي بيتر تشوماكوف، أن تهدأ موجة انتشار "كوفيد-19" الناجمة عن المتحور "أوميكرون" اعتبارا من 10 فبراير 2022.',
		url: 'https://arabic.rt.com/health/1318541-%D9%85%D8%AA%D9%89-%D8%AA%D9%87%D8%AF%D8%A3-%D9%85%D9%88%D8%AC%D8%A9-%D9%83%D9%88%D9%81%D9%8A%D8%AF-19-%D8%A7%D9%84%D9%86%D8%A7%D8%AC%D9%85%D8%A9-%D8%B9%D9%86-%D9%85%D8%AA%D8%AD%D9%88%D8%B1-%D8%A3%D9%88%D9%85%D9%8A%D9%83%D8%B1%D9%88%D9%86/',
		urlToImage:
			'https://cdni.rt.com/media/pics/2022.01/original/61f26a5e42360460dd404a18.jpg',
		publishedAt: '2022-01-28T09:00:00Z',
		content: null
	},
	{
		source: { id: 'rt', name: 'RT' },
		author: 'RT Arabic',
		title: 'فرنسا تسجل نتائج اقتصادية لم تشهدها منذ 52 عاما - RT Arabic',
		description:
			'سجل إجمالي الناتج المحلي لفرنسا نموا بلغت نسبته 7% في 2021، في ارتفاع لم تشهده البلاد منذ 52 عاما، لكنه جاء بعد الانكماش القياسي في 2020 الذي بلغ 8%.',
		url: 'https://arabic.rt.com/business/1318973-%D9%81%D8%B1%D9%86%D8%B3%D8%A7-%D8%AA%D8%B3%D8%AC%D9%84-%D9%86%D8%AA%D8%A7%D8%A6%D8%AC-%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%D9%8A%D8%A9-%D9%84%D9%85-%D8%AA%D8%B4%D9%87%D8%AF%D9%87%D8%A7-%D9%81%D9%8A-52-%D8%B9%D8%A7%D9%85%D8%A7/',
		urlToImage:
			'https://cdni.rt.com/media/pics/2022.01/original/61f3a9ce42360447e33124dd.jpg',
		publishedAt: '2022-01-28T08:40:00Z',
		content: null
	},
	{
		source: { id: null, name: 'Youm7.com' },
		author: null,
		title: 'وزير الخارجية الروسي: لن تكون هناك حربا مع أوكرانيا - اليوم السابع',
		description:
			'أكد وزير الخارجية الروسي أنه لنيكون هناك حرب مع أوكرانيا، حسبما ذكرت قناة سكاى نيوز عربية في خبر عاجل لها.',
		url: 'https://www.youm7.com/story/2022/1/28/وزير-الخارجية-الروسي-لن-تكون-هناك-حربا-مع-أوكرانيا/5634769',
		urlToImage: 'https://img.youm7.com/large/20210412014603463.jpg',
		publishedAt: '2022-01-28T08:27:00Z',
		content: null
	},
	{
		source: { id: null, name: 'Alarabiya.net' },
		author: 'العربية',
		title: 'الجنيه المصري في 2022.. مؤسسة عالمية متفائلة بقوة - العربية',
		description:
			'توقعت مؤسسة غولدمان ساكس استمرار قوة وصمود الجنيه المصري أمام الدولار والعملات الرئيسية خلال العام الحالي 2022، وعدم حدوث انخفاضات كبيرة للعملة المصرية على',
		url: 'https://www.alarabiya.net/aswaq/economy/2022/01/28/%D8%BA%D9%88%D9%84%D8%AF%D9%85%D8%A7%D9%86-%D8%B3%D8%A7%D9%83%D8%B3-%D9%85%D8%AA%D9%81%D8%A7%D8%A1%D9%84-%D8%A8%D8%A3%D8%AF%D8%A7%D8%A1-%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D9%87-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A-%D9%87%D8%B0%D9%87-%D8%AA%D9%88%D9%82%D8%B9%D8%A7%D8%AA%D9%87-%D9%81%D9%8A-2022',
		urlToImage:
			'https://vid.alarabiya.net/images/2019/05/26/da59b0c7-8f3e-4926-b78f-0fd72fda8160/da59b0c7-8f3e-4926-b78f-0fd72fda8160_16x9_600x338.jpg',
		publishedAt: '2022-01-28T08:19:00Z',
		content:
			'2022 .\r\n .\r\n .\r\n .\r\n .\r\n 40 \r\n GSDEER 2016 40% .\r\n 5 6% 2022 2% 3% 10% .\r\n .\r\n () 60 41 31 .\r\n .\r\n 40 .\r\n 10 2021/2022 3% 2021/2022 4.6% 2020/2021.\r\n .\r\n 4 .\r\n .\r\n .'
	},
	{
		source: { id: null, name: 'Skynewsarabia.com' },
		author: 'سكاي نيوز عربية',
		title:
			'تضرر طائرة مدنية جراء قصف طال مجمع مطار بغداد - Sky News Arabia سكاي نيوز عربية',
		description:
			'تضررت طائرة مدنية جراء قصف استهدف قاعدة أميركية قرب مطار بغداد، بحسب ما أفاد مراسلنا في العاصمة العراقية.',
		url: 'https://www.skynewsarabia.com/middle-east/1496957-%D8%AA%D8%B6%D8%B1%D8%B1-%D8%B7%D8%A7%D9%8A%D9%94%D8%B1%D8%A9-%D9%85%D8%AF%D9%86%D9%8A%D8%A9-%D8%AC%D8%B1%D8%A7%D8%A1-%D9%82%D8%B5%D9%81-%D8%B7%D8%A7%D9%84-%D9%85%D8%AC%D9%85%D8%B9-%D9%85%D8%B7%D8%A7%D8%B1-%D8%A8%D8%BA%D8%AF%D8%A7%D8%AF',
		urlToImage:
			'https://www.skynewsarabia.com/images/v1/2022/01/28/1496954/1200/630/1-1496954.jpg',
		publishedAt: '2022-01-28T08:09:28Z',
		content: null
	},
	{
		source: { id: 'rt', name: 'RT' },
		author: 'RT Arabic',
		title: 'مليارديرات عرب على قائمة أثرياء إفريقيا في 2022 - RT Arabic',
		description:
			'المليارديرات في إفريقيا أغنى مما كانوا عليه منذ سنوات ويقدر إجمالي ثروات المليارديرات في القارة، البالغ عددهم 18 مليارديرا، بنحو 84.9 مليار دولار، بزيادة 15% عن 12 شهرا الماضية.',
		url: 'https://arabic.rt.com/business/1318938-%D9%85%D9%84%D9%8A%D8%A7%D8%B1%D8%AF%D9%8A%D8%B1%D8%A7%D8%AA-%D8%B9%D8%B1%D8%A8-%D8%B9%D9%84%D9%89-%D9%82%D8%A7%D8%A6%D9%85%D8%A9-%D8%A3%D8%AB%D8%B1%D9%8A%D8%A7%D8%A1-%D8%A5%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7-%D9%81%D9%8A-2022/',
		urlToImage:
			'https://cdni.rt.com/media/pics/2022.01/original/61f3925542360416a20cc1e9.jpg',
		publishedAt: '2022-01-28T07:08:00Z',
		content: null
	},
	{
		source: { id: null, name: 'beIN SPORTS' },
		author: null,
		title:
			'نادال يصعد إلى نهائي بطولة أستراليا المفتوحة للتنس - beIN SPORTS MENA Arabic',
		description:
			'بات الإسباني رافاييل نادال على بعد خطوة من التتويج بلقب بطولة أستراليا المفتوحة للتنس، أولى البطولات الأربع الكبرى بعدما تأهل إلى النهائي اليوم الجمعة.',
		url: 'https://www.beinsports.com/ar/%D8%A8%D8%B7%D9%88%D9%84%D8%A9-%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D9%84%D9%8A%D8%A7-%D8%A7%D9%84%D9%85%D9%81%D8%AA%D9%88%D8%AD%D8%A9/%D9%81%D9%8A%D8%AF%D9%8A%D9%88/%D9%86%D8%A7%D8%AF%D8%A7%D9%84-%D9%8A%D8%B5%D8%B9%D8%AF-%D8%A5%D9%84%D9%89-%D9%86%D9%87%D8%A7%D8%A6%D9%8A-%D8%A8%D8%B7%D9%88/1822759',
		urlToImage:
			'https://images.beinsports.com/PS5z4IqDTQorWgAyUAoq7rj9Z9U=/670x424/smart/filters:watermark(https://assets.beinsports.com/picto-play.png,285,162,0)/4128686-2022-01-28T053833Z_921543875_UP1EI1S0FO7HF_RTRMADP_3_TENNIS-AUSOPEN.JPG',
		publishedAt: '2022-01-28T06:39:39Z',
		content: null
	},
	{
		source: { id: null, name: 'صحيفة البيان' },
		author: 'البيان',
		title: 'نقص هذه الفيتامينات يجعلك كثير التثاؤب - البيان الصحي',
		description:
			'التثاؤب الكثير ليس دليل على النوم السيء، أو أنك لم تنل قسطاً جيداً من الراحة، فقد يكون لنظامك الغذائي دور رئيسي في الشعور المستمر بالتعب. بغض النظر عن مقدار الراحة، علامة على وجود مرض أو حالة صحية أساسية.وتعرّف هيئة الخدمات الصحية الوطنية (NHS) التعب بأنه',
		url: 'https://www.albayan.ae/health/2022-01-28-1.4356763',
		urlToImage:
			'https://www.albayan.ae/polopoly_fs/1.4356764.1643347630!/image/image.jpg',
		publishedAt: '2022-01-28T05:24:00Z',
		content:
			'. .\r\n (NHS) " ". "".\r\n .\r\n .\r\n .\r\n .\r\n .\r\n .\r\n . .\r\nD\r\nDDD .\r\nD .\r\nD .\r\nB12 .\r\nB12 .\r\nB12B12.\r\nC\r\nC .\r\nC .\r\nC .\r\nC .'
	},
	{
		source: { id: null, name: 'Alarabiya.net' },
		author: 'العربية',
		title:
			'توفيت بالفستان الأبيض.. مصرع عروس مصرية بحادث سير عقب زفافها - العربية',
		description:
			'مأساة إنسانية شهدتها محافظة البحيرة شمال مصر في الساعات الأولى من صباح اليوم الجمعة، حيث لقيت عروس مصرعها عقب انتهاء حفل زفافها وخلال انتقالها لمسكن الزوجي',
		url: 'https://www.alarabiya.net/arab-and-world/egypt/2022/01/28/%D8%AA%D9%88%D9%81%D9%8A%D8%AA-%D8%A8%D8%A7%D9%84%D9%81%D8%B3%D8%AA%D8%A7%D9%86-%D8%A7%D9%84%D8%A3%D8%A8%D9%8A%D8%B6-%D9%85%D8%B5%D8%B1%D8%B9-%D8%B9%D8%B1%D9%88%D8%B3-%D9%85%D8%B5%D8%B1%D9%8A%D8%A9-%D8%A8%D8%AD%D8%A7%D8%AF%D8%AB-%D8%B3%D9%8A%D8%B1-%D8%B9%D9%82%D8%A8-%D8%B2%D9%81%D8%A7%D9%81%D9%87%D8%A7-',
		urlToImage:
			'https://vid.alarabiya.net/images/2022/01/28/680b32dc-ee56-40bd-b63b-069b639e710d/680b32dc-ee56-40bd-b63b-069b639e710d_16x9_600x338.jpg',
		publishedAt: '2022-01-28T04:54:00Z',
		content: null
	},
	{
		source: { id: null, name: 'Skynewsarabia.com' },
		author: 'سكاي نيوز عربية',
		title:
			'دراسة تكشف العلاقة بين "فيتامين الشمس" وأمراض المناعة - Sky News Arabia سكاي نيوز عربية',
		description:
			'كشفت دراسة حديثة أجراها باحثون في جامعة مستشفى بريغهام ببوسطن الأميركية، فوائد جديدة لفيتامين "د" تتعلق بأمراض المناعة الذاتية.',
		url: 'https://www.skynewsarabia.com/technology/1496909-%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9-%D8%AA%D9%83%D8%B4%D9%81-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%82%D8%A9-%D9%81%D9%8A%D8%AA%D8%A7%D9%85%D9%8A%D9%86-%D8%A7%D9%84%D8%B4%D9%85%D8%B3-%D9%88%D8%A7%D9%94%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B9%D8%A9',
		urlToImage:
			'https://www.skynewsarabia.com/images/v1/2022/01/28/1496908/1200/630/1-1496908.jpg',
		publishedAt: '2022-01-28T04:17:41Z',
		content: null
	},
	{
		source: { id: null, name: 'Alarabiya.net' },
		author: 'العربية',
		title: 'شاهد.. سقوط وفاء الكيلاني على درج حفل جوائز الرياض - العربية',
		description:
			'تعرضت الإعلامية وفاء الكيلاني، الخميس، لموقف محرج كاد أن يتحول إلى إصابة بالغة قبل مشاركتها في تقديم حفل توزيع جوائز Joy awards في الرياض.وأظهر فيديو متداو',
		url: 'https://www.alarabiya.net/social-media/2022/01/28/%D8%B4%D8%A7%D9%87%D8%AF-%D8%B3%D9%82%D9%88%D8%B7-%D9%88%D9%81%D8%A7%D8%A1-%D8%A7%D9%84%D9%83%D9%8A%D9%84%D8%A7%D9%86%D9%8A-%D8%B9%D9%84%D9%89-%D8%B3%D9%84%D8%A7%D9%84%D9%85-%D8%AD%D9%81%D9%84-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6',
		urlToImage:
			'https://vid.alarabiya.net/images/2022/01/28/1a1f933a-1564-4a8e-b955-47c3b65803eb/1a1f933a-1564-4a8e-b955-47c3b65803eb_16x9_600x338.jpg',
		publishedAt: '2022-01-28T03:48:00Z',
		content: 'Joy awards .\r\n Joy awards .\r\n .\r\n " " " MBC" " " MBC1 VIP .'
	},
	{
		source: { id: null, name: 'Masrawy.com' },
		author: 'مصراوي',
		title:
			'حول العالم في 24 ساعة: صاروخ إيلون ماسك في طريقه للاصطدام بالقمر - مصراوي',
		description:
			'حول العالم في 24 ساعة صاروخ إيلون ماسك في طريقه للاصطدام بالقمر | مصراوى',
		url: 'https://www.masrawy.com/news/news_publicaffairs/details/2022/1/28/2165701/حول-العالم-في-24-ساعة-صاروخ-إيلون-ماسك-في-طريقه-للاصطدام-بالقمر',
		urlToImage:
			'https://media.gemini.media/img/large/2022/1/28/2022_1_28_1_22_33_14.jpg',
		publishedAt: '2022-01-27T23:25:00Z',
		content: ':'
	},
	{
		source: { id: 'google-news', name: 'Google News' },
		author: null,
		title:
			'انهيار جديد فى سعر الذهب اليوم فى مصر وعالميا مساء الخميس 27 يناير 2022 - Al Masry Al Youm - المصري اليوم',
		description: null,
		url: 'https://news.google.com/__i/rss/rd/articles/CBMiMmh0dHBzOi8vd3d3LmFsbWFzcnlhbHlvdW0uY29tL25ld3MvZGV0YWlscy8yNTEzMjQ40gEA?oc=5',
		urlToImage: null,
		publishedAt: '2022-01-27T20:56:53Z',
		content: null
	}
];

export default articles;
