import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.sustainability': 'Sustainability',
    'nav.contact': 'Contact',
    'nav.news': 'News',
    'nav.importer': 'Importer',
    'nav.exporter': 'Exporter',
    'nav.research': 'Research',
    'nav.partnerships': 'Partnerships',
    
    // Hero Section
    'hero.title': 'Pioneering Excellence in Shrimp Farming for Over Two Decades',
    'hero.subtitle': 'Sustainable aquaculture excellence for over 25 years',
    'hero.description': 'Experience the finest quality shrimp products from our state-of-the-art facilities in India, committed to environmental stewardship and community development.',
    'hero.cta.primary': 'Explore Products',
    'hero.cta.secondary': 'Learn More',
    
    // About Section
    'about.title': 'About Mayank Aquaculture',
    'about.subtitle': 'Leading sustainable aquaculture since 1996',
    'about.description': 'Mayank Aquaculture Pvt. Ltd. (MAPL) has been at the forefront of sustainable aquaculture in India, combining traditional knowledge with cutting-edge technology to produce premium shrimp while protecting our marine ecosystems.',
    'about.description.extended': 'Operating over 200+ hectares of farms across India, our facilities benefit from perfect conditions, year-round operations, and biosecure practices — creating ideal conditions for premium shrimp cultivation.',
    'about.features.zero.chemicals': 'Zero antibiotics or chemicals',
    'about.features.certified': 'ASC & BAP certified facilities',
    'about.features.traceability': 'Blockchain traceability',
    'about.features.employment': 'Local community employment',
    'about.features.renewable': 'Renewable energy powered',
    'about.features.mangrove': 'Protected mangrove restoration',
    
    // Timeline
    'timeline.title': 'Our Journey Through Time',
    'timeline.subtitle': 'Over 25 years of innovation, growth, and commitment to sustainable aquaculture excellence',
    'timeline.stats.years': 'Years of Excellence',
    'timeline.stats.countries': 'Export Countries',
    'timeline.stats.capacity': 'Tons/Month Capacity',
    'timeline.stats.sustainable': 'Sustainable Practices',
    'timeline.events.2024.title': 'Global Expansion & Digital Innovation',
    'timeline.events.2024.description': 'Launched comprehensive digital platform and expanded to 15+ countries',
    'timeline.events.2024.location': 'Global',
    'timeline.events.2024.impact': '500+ tons/month capacity',
    'timeline.events.2024.details.0': 'Launched new e-commerce platform for premium shrimp',
    'timeline.events.2024.details.1': 'Expanded to European and Asian markets',
    'timeline.events.2024.details.2': 'Implemented AI-powered quality control systems',
    'timeline.events.2024.details.3': 'Achieved carbon-neutral operations',
    
    // Divisions
    'divisions.title': 'Our Divisions',
    'divisions.subtitle': 'Discover our comprehensive operations across aquaculture, processing, sustainability, and research',
    'divisions.aquaculture.name': 'Aquaculture Division',
    'divisions.aquaculture.description': 'Our core shrimp farming operations with sustainable practices',
    'divisions.processing.name': 'Processing Division',
    'divisions.processing.description': 'State-of-the-art processing and packaging facilities',
    'divisions.sustainability.name': 'Sustainability Division',
    'divisions.sustainability.description': 'Environmental stewardship and community development',
    'divisions.research.name': 'Research & Development',
    'divisions.research.description': 'Innovation in aquaculture technology and practices',
    
    // Virtual Tour
    'tour.title': 'Virtual Tour',
    'tour.subtitle': 'Experience our facilities through immersive 360° tours and drone footage',
    'tour.cta.start': 'Start Full Tour',
    'tour.cta.learn': 'Learn More',
    
    // Sustainability
    'sustainability.title': 'Sustainability & Social Impact',
    'sustainability.subtitle': 'Committed to environmental stewardship, community development, and sustainable aquaculture practices',
    'sustainability.pillars.environment': 'Environmental Protection',
    'sustainability.pillars.community': 'Community Development',
    'sustainability.pillars.innovation': 'Innovation & Excellence',
    
    // Partners
    'partners.title': 'Global Partners & Clients',
    'partners.subtitle': 'Trusted by leading companies and organizations worldwide for premium shrimp products and sustainable practices',
    'partners.cta.become': 'Become a Partner',
    'partners.cta.benefits': 'View Partnership Benefits',
    
    // Media & Blog
    'media.title': 'Media & Blog',
    'media.subtitle': 'Stay updated with industry insights, recipes, sustainability stories, and company news',
    'media.tabs.blog': 'Blog',
    'media.tabs.press': 'Press',
    'media.tabs.recipes': 'Recipes',
    'media.tabs.media': 'Media',
    
    // Footer
    'footer.description': 'Leading sustainable aquaculture in Madagascar with premium shrimp products and environmental stewardship.',
    'footer.quicklinks': 'Quick Links',
    'footer.products': 'Products',
    'footer.company': 'Company',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact Info',
    'footer.follow': 'Follow Us',
    'footer.copyright': '© 2024 MAPL Shrimp. All rights reserved.',
    
    // Services
    'services.title': 'Global Business Services',
    'services.subtitle': 'Connecting Madagascar\'s premium shrimp with global markets through our comprehensive import and export services',
    'services.import.title': 'Import Services',
    'services.import.subtitle': 'Direct import from Madagascar to your market',
    'services.import.cta': 'View Import Services',
    'services.import.fresh.title': 'Fresh Shrimp Import',
    'services.import.fresh.description': 'Premium fresh shrimp delivered within 24-48 hours',
    'services.import.fresh.price': 'From $12/kg',
    'services.import.fresh.minimum': '500kg min',
    'services.import.fresh.features.temperature': 'Temperature controlled',
    'services.import.fresh.features.haccp': 'HACCP certified',
    'services.import.fresh.features.tracking': 'Real-time tracking',
    'services.import.frozen.title': 'Frozen Shrimp Import',
    'services.import.frozen.description': 'Flash-frozen shrimp with 12-month shelf life',
    'services.import.frozen.price': 'From $8/kg',
    'services.import.frozen.minimum': '1000kg min',
    'services.import.frozen.features.iqf': 'IQF technology',
    'services.import.frozen.features.packaging': 'Bulk packaging',
    'services.import.frozen.features.shipping': 'Global shipping',
    'services.export.title': 'Export Capabilities',
    'services.export.subtitle': 'Exporting premium shrimp to global markets',
    'services.export.cta': 'View Export Services',
    'services.export.network.title': 'Global Export Network',
    'services.export.network.description': 'Exporting to 15+ countries worldwide',
    'services.export.network.volume': '500+ tons/month',
    'services.export.network.markets.europe': 'Europe',
    'services.export.network.markets.usa': 'USA',
    'services.export.network.markets.japan': 'Japan',
    'services.export.network.markets.canada': 'Canada',
    'services.export.network.features.asc': 'ASC Certified',
    'services.export.network.features.bap': 'BAP 4-Star',
    'services.export.network.features.carbon': 'Carbon Neutral',
    'services.export.services.title': 'Export Services',
    'services.export.services.description': 'Complete export solutions from farm to port',
    'services.export.services.volume': '200+ tons/month',
    'services.export.services.markets.asia': 'Asia-Pacific',
    'services.export.services.markets.middle.east': 'Middle East',
    'services.export.services.markets.australia': 'Australia',
    'services.export.services.features.quality': 'Quality Control',
    'services.export.services.features.documentation': 'Documentation',
    'services.export.services.features.logistics': 'Logistics',
    'services.stats.countries': 'Export Countries',
    'services.stats.capacity': 'Tons/Month Capacity',
    'services.stats.delivery': 'Fresh Delivery',
    'services.stats.quality': 'Certified Quality',
    
    // Common
    'common.learn.more': 'Learn More',
    'common.read.more': 'Read More',
    'common.view.all': 'View All',
    'common.get.started': 'Get Started',
    'common.contact.us': 'Contact Us',
    'common.explore': 'Explore',
    'common.discover': 'Discover',
    'common.see.more': 'See More',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.products': '产品',
    'nav.sustainability': '可持续发展',
    'nav.contact': '联系我们',
    'nav.news': '新闻',
    'nav.importer': '进口商',
    'nav.exporter': '出口商',
    'nav.research': '研发',
    'nav.partnerships': '合作伙伴',
    
    // Hero Section
    'hero.title': '马达加斯加优质虾类',
    'hero.subtitle': '25年可持续水产养殖卓越成就',
    'hero.description': '体验来自马达加斯加最先进设施的优质虾类产品，致力于环境管理和社区发展。',
    'hero.cta.primary': '探索产品',
    'hero.cta.secondary': '了解更多',
    
    // About Section
    'about.title': '关于MAPL',
    'about.subtitle': '自2000年以来引领可持续水产养殖',
    'about.description': 'MAPL虾类在马达加斯加可持续水产养殖领域处于领先地位，将传统知识与尖端技术相结合，生产优质虾类产品，同时保护我们的海洋生态系统。',
    'about.description.extended': '位于马达加斯加西北部原始水域，我们的500公顷农场受益于完美的盐度、全年阳光和零工业污染——为优质虾类养殖创造理想条件。',
    'about.features.zero.chemicals': '零抗生素或化学品',
    'about.features.certified': 'ASC和BAP认证设施',
    'about.features.traceability': '区块链可追溯性',
    'about.features.employment': '当地社区就业',
    'about.features.renewable': '可再生能源供电',
    'about.features.mangrove': '红树林保护修复',
    
    // Timeline
    'timeline.title': '我们的时间历程',
    'timeline.subtitle': '25年以上的创新、增长和对可持续水产养殖卓越的承诺',
    'timeline.stats.years': '卓越年数',
    'timeline.stats.countries': '出口国家',
    'timeline.stats.capacity': '月产能（吨）',
    'timeline.stats.sustainable': '可持续实践',
    'timeline.events.2024.title': '全球扩张与数字创新',
    'timeline.events.2024.description': '推出综合数字平台，扩展到15+个国家',
    'timeline.events.2024.location': '全球',
    'timeline.events.2024.impact': '500+吨/月产能',
    'timeline.events.2024.details.0': '推出新的优质虾类电商平台',
    'timeline.events.2024.details.1': '扩展到欧洲和亚洲市场',
    'timeline.events.2024.details.2': '实施AI驱动的质量控制系统',
    'timeline.events.2024.details.3': '实现碳中和运营',
    
    // Divisions
    'divisions.title': '我们的部门',
    'divisions.subtitle': '了解我们在水产养殖、加工、可持续发展和研究方面的综合运营',
    'divisions.aquaculture.name': '水产养殖部门',
    'divisions.aquaculture.description': '我们核心的可持续虾类养殖业务',
    'divisions.processing.name': '加工部门',
    'divisions.processing.description': '最先进的加工和包装设施',
    'divisions.sustainability.name': '可持续发展部门',
    'divisions.sustainability.description': '环境管理和社区发展',
    'divisions.research.name': '研发部门',
    'divisions.research.description': '水产养殖技术和实践创新',
    
    // Virtual Tour
    'tour.title': '虚拟参观',
    'tour.subtitle': '通过沉浸式360°参观和无人机镜头体验我们的设施',
    'tour.cta.start': '开始完整参观',
    'tour.cta.learn': '了解更多',
    
    // Sustainability
    'sustainability.title': '可持续发展与社会影响',
    'sustainability.subtitle': '致力于环境管理、社区发展和可持续水产养殖实践',
    'sustainability.pillars.environment': '环境保护',
    'sustainability.pillars.community': '社区发展',
    'sustainability.pillars.innovation': '创新与卓越',
    
    // Partners
    'partners.title': '全球合作伙伴与客户',
    'partners.subtitle': '全球领先公司和组织信赖我们的优质虾类产品和可持续实践',
    'partners.cta.become': '成为合作伙伴',
    'partners.cta.benefits': '查看合作优势',
    
    // Media & Blog
    'media.title': '媒体与博客',
    'media.subtitle': '了解行业洞察、食谱、可持续发展故事和公司新闻',
    'media.tabs.blog': '博客',
    'media.tabs.press': '新闻稿',
    'media.tabs.recipes': '食谱',
    'media.tabs.media': '媒体',
    
    // Footer
    'footer.description': '在马达加斯加引领可持续水产养殖，提供优质虾类产品和环境管理。',
    'footer.quicklinks': '快速链接',
    'footer.products': '产品',
    'footer.company': '公司',
    'footer.resources': '资源',
    'footer.contact': '联系信息',
    'footer.follow': '关注我们',
    'footer.copyright': '© 2024 MAPL虾类。保留所有权利。',
    
    // Services
    'services.title': '全球商业服务',
    'services.subtitle': '通过我们全面的进出口服务，将马达加斯加的优质虾类与全球市场连接',
    'services.import.title': '进口服务',
    'services.import.subtitle': '从马达加斯加直接进口到您的市场',
    'services.import.cta': '查看进口服务',
    'services.import.fresh.title': '新鲜虾类进口',
    'services.import.fresh.description': '24-48小时内送达的优质新鲜虾类',
    'services.import.fresh.price': '从$12/公斤起',
    'services.import.fresh.minimum': '最少500公斤',
    'services.import.fresh.features.temperature': '温控',
    'services.import.fresh.features.haccp': 'HACCP认证',
    'services.import.fresh.features.tracking': '实时跟踪',
    'services.import.frozen.title': '冷冻虾类进口',
    'services.import.frozen.description': '12个月保质期的速冻虾类',
    'services.import.frozen.price': '从$8/公斤起',
    'services.import.frozen.minimum': '最少1000公斤',
    'services.import.frozen.features.iqf': 'IQF技术',
    'services.import.frozen.features.packaging': '散装包装',
    'services.import.frozen.features.shipping': '全球运输',
    'services.export.title': '出口能力',
    'services.export.subtitle': '向全球市场出口优质虾类',
    'services.export.cta': '查看出口服务',
    'services.export.network.title': '全球出口网络',
    'services.export.network.description': '向15+个国家出口',
    'services.export.network.volume': '500+吨/月',
    'services.export.network.markets.europe': '欧洲',
    'services.export.network.markets.usa': '美国',
    'services.export.network.markets.japan': '日本',
    'services.export.network.markets.canada': '加拿大',
    'services.export.network.features.asc': 'ASC认证',
    'services.export.network.features.bap': 'BAP四星',
    'services.export.network.features.carbon': '碳中和',
    'services.export.services.title': '出口服务',
    'services.export.services.description': '从农场到港口的完整出口解决方案',
    'services.export.services.volume': '200+吨/月',
    'services.export.services.markets.asia': '亚太地区',
    'services.export.services.markets.middle.east': '中东',
    'services.export.services.markets.australia': '澳大利亚',
    'services.export.services.features.quality': '质量控制',
    'services.export.services.features.documentation': '文件处理',
    'services.export.services.features.logistics': '物流',
    'services.stats.countries': '出口国家',
    'services.stats.capacity': '月产能（吨）',
    'services.stats.delivery': '新鲜配送',
    'services.stats.quality': '认证质量',
    
    // Common
    'common.learn.more': '了解更多',
    'common.read.more': '阅读更多',
    'common.view.all': '查看全部',
    'common.get.started': '开始使用',
    'common.contact.us': '联系我们',
    'common.explore': '探索',
    'common.discover': '发现',
    'common.see.more': '查看更多',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.products': 'Productos',
    'nav.sustainability': 'Sostenibilidad',
    'nav.contact': 'Contacto',
    'nav.news': 'Noticias',
    'nav.importer': 'Importador',
    'nav.exporter': 'Exportador',
    'nav.research': 'Investigación',
    'nav.partnerships': 'Asociaciones',
    
    // Hero Section
    'hero.title': 'Camarones Premium de Madagascar',
    'hero.subtitle': 'Excelencia en acuicultura sostenible por más de 25 años',
    'hero.description': 'Experimenta los productos de camarón de la más alta calidad de nuestras instalaciones de vanguardia en Madagascar, comprometidos con la gestión ambiental y el desarrollo comunitario.',
    'hero.cta.primary': 'Explorar Productos',
    'hero.cta.secondary': 'Saber Más',
    
    // About Section
    'about.title': 'Acerca de MAPL',
    'about.subtitle': 'Liderando la acuicultura sostenible desde 2000',
    'about.description': 'MAPL Shrimp ha estado a la vanguardia de la acuicultura sostenible en Madagascar, combinando conocimiento tradicional con tecnología de punta para producir camarones premium mientras protegemos nuestros ecosistemas marinos.',
    'about.description.extended': 'Ubicada en las aguas pristinas del noroeste de Madagascar, nuestra granja de 500 hectáreas se beneficia de salinidad perfecta, sol durante todo el año y cero contaminación industrial, creando condiciones ideales para el cultivo de camarones premium.',
    'about.features.zero.chemicals': 'Cero antibióticos o químicos',
    'about.features.certified': 'Instalaciones certificadas ASC y BAP',
    'about.features.traceability': 'Trazabilidad blockchain',
    'about.features.employment': 'Empleo comunitario local',
    'about.features.renewable': 'Energía renovable',
    'about.features.mangrove': 'Restauración de manglares protegidos',
    
    // Timeline
    'timeline.title': 'Nuestro Viaje a Través del Tiempo',
    'timeline.subtitle': 'Más de 25 años de innovación, crecimiento y compromiso con la excelencia en acuicultura sostenible',
    'timeline.stats.years': 'Años de Excelencia',
    'timeline.stats.countries': 'Países de Exportación',
    'timeline.stats.capacity': 'Capacidad Mensual (Toneladas)',
    'timeline.stats.sustainable': 'Prácticas Sostenibles',
    'timeline.events.2024.title': 'Expansión Global e Innovación Digital',
    'timeline.events.2024.description': 'Lanzamos plataforma digital integral y expandimos a más de 15 países',
    'timeline.events.2024.location': 'Global',
    'timeline.events.2024.impact': '500+ toneladas/mes de capacidad',
    'timeline.events.2024.details.0': 'Lanzamos nueva plataforma de e-commerce para camarones premium',
    'timeline.events.2024.details.1': 'Expandimos a mercados europeos y asiáticos',
    'timeline.events.2024.details.2': 'Implementamos sistemas de control de calidad con IA',
    'timeline.events.2024.details.3': 'Logramos operaciones carbono neutrales',
    
    // Divisions
    'divisions.title': 'Nuestras Divisiones',
    'divisions.subtitle': 'Descubre nuestras operaciones integrales en acuicultura, procesamiento, sostenibilidad e investigación',
    'divisions.aquaculture.name': 'División de Acuicultura',
    'divisions.aquaculture.description': 'Nuestras operaciones principales de cultivo de camarones con prácticas sostenibles',
    'divisions.processing.name': 'División de Procesamiento',
    'divisions.processing.description': 'Instalaciones de procesamiento y empaque de vanguardia',
    'divisions.sustainability.name': 'División de Sostenibilidad',
    'divisions.sustainability.description': 'Gestión ambiental y desarrollo comunitario',
    'divisions.research.name': 'Investigación y Desarrollo',
    'divisions.research.description': 'Innovación en tecnología y prácticas de acuicultura',
    
    // Virtual Tour
    'tour.title': 'Tour Virtual',
    'tour.subtitle': 'Experimenta nuestras instalaciones a través de tours inmersivos de 360° y grabaciones con drones',
    'tour.cta.start': 'Iniciar Tour Completo',
    'tour.cta.learn': 'Saber Más',
    
    // Sustainability
    'sustainability.title': 'Sostenibilidad e Impacto Social',
    'sustainability.subtitle': 'Comprometidos con la gestión ambiental, el desarrollo comunitario y las prácticas de acuicultura sostenible',
    'sustainability.pillars.environment': 'Protección Ambiental',
    'sustainability.pillars.community': 'Desarrollo Comunitario',
    'sustainability.pillars.innovation': 'Innovación y Excelencia',
    
    // Partners
    'partners.title': 'Socios y Clientes Globales',
    'partners.subtitle': 'Confiamos en empresas y organizaciones líderes mundialmente por productos de camarón premium y prácticas sostenibles',
    'partners.cta.become': 'Convertirse en Socio',
    'partners.cta.benefits': 'Ver Beneficios de Asociación',
    
    // Media & Blog
    'media.title': 'Medios y Blog',
    'media.subtitle': 'Mantente actualizado con perspectivas de la industria, recetas, historias de sostenibilidad y noticias de la empresa',
    'media.tabs.blog': 'Blog',
    'media.tabs.press': 'Prensa',
    'media.tabs.recipes': 'Recetas',
    'media.tabs.media': 'Medios',
    
    // Footer
    'footer.description': 'Liderando la acuicultura sostenible en Madagascar con productos de camarón premium y gestión ambiental.',
    'footer.quicklinks': 'Enlaces Rápidos',
    'footer.products': 'Productos',
    'footer.company': 'Empresa',
    'footer.resources': 'Recursos',
    'footer.contact': 'Información de Contacto',
    'footer.follow': 'Síguenos',
    'footer.copyright': '© 2024 MAPL Shrimp. Todos los derechos reservados.',
    
    // Services
    'services.title': 'Servicios Comerciales Globales',
    'services.subtitle': 'Conectando los camarones premium de Madagascar con mercados globales a través de nuestros servicios integrales de importación y exportación',
    'services.import.title': 'Servicios de Importación',
    'services.import.subtitle': 'Importación directa de Madagascar a su mercado',
    'services.import.cta': 'Ver Servicios de Importación',
    'services.import.fresh.title': 'Importación de Camarones Frescos',
    'services.import.fresh.description': 'Camarones frescos premium entregados en 24-48 horas',
    'services.import.fresh.price': 'Desde $12/kg',
    'services.import.fresh.minimum': 'Mín. 500kg',
    'services.import.fresh.features.temperature': 'Control de temperatura',
    'services.import.fresh.features.haccp': 'Certificado HACCP',
    'services.import.fresh.features.tracking': 'Seguimiento en tiempo real',
    'services.import.frozen.title': 'Importación de Camarones Congelados',
    'services.import.frozen.description': 'Camarones ultracongelados con 12 meses de vida útil',
    'services.import.frozen.price': 'Desde $8/kg',
    'services.import.frozen.minimum': 'Mín. 1000kg',
    'services.import.frozen.features.iqf': 'Tecnología IQF',
    'services.import.frozen.features.packaging': 'Empaque a granel',
    'services.import.frozen.features.shipping': 'Envío global',
    'services.export.title': 'Capacidades de Exportación',
    'services.export.subtitle': 'Exportando camarones premium a mercados globales',
    'services.export.cta': 'Ver Servicios de Exportación',
    'services.export.network.title': 'Red Global de Exportación',
    'services.export.network.description': 'Exportando a más de 15 países mundialmente',
    'services.export.network.volume': '500+ toneladas/mes',
    'services.export.network.markets.europe': 'Europa',
    'services.export.network.markets.usa': 'EE.UU.',
    'services.export.network.markets.japan': 'Japón',
    'services.export.network.markets.canada': 'Canadá',
    'services.export.network.features.asc': 'Certificado ASC',
    'services.export.network.features.bap': 'BAP 4 Estrellas',
    'services.export.network.features.carbon': 'Carbono Neutral',
    'services.export.services.title': 'Servicios de Exportación',
    'services.export.services.description': 'Soluciones completas de exportación de granja a puerto',
    'services.export.services.volume': '200+ toneladas/mes',
    'services.export.services.markets.asia': 'Asia-Pacífico',
    'services.export.services.markets.middle.east': 'Medio Oriente',
    'services.export.services.markets.australia': 'Australia',
    'services.export.services.features.quality': 'Control de Calidad',
    'services.export.services.features.documentation': 'Documentación',
    'services.export.services.features.logistics': 'Logística',
    'services.stats.countries': 'Países de Exportación',
    'services.stats.capacity': 'Capacidad Mensual (Toneladas)',
    'services.stats.delivery': 'Entrega Fresca',
    'services.stats.quality': 'Calidad Certificada',
    
    // Common
    'common.learn.more': 'Saber Más',
    'common.read.more': 'Leer Más',
    'common.view.all': 'Ver Todo',
    'common.get.started': 'Comenzar',
    'common.contact.us': 'Contáctanos',
    'common.explore': 'Explorar',
    'common.discover': 'Descubrir',
    'common.see.more': 'Ver Más',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Load language from localStorage or detect from browser
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage as keyof typeof translations]) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang as keyof typeof translations]) {
        setLanguage(browserLang);
      }
    }
  }, []);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
