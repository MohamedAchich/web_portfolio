const PROFILE = {
  name: 'Mohamed Achich',
  role: 'Full-stack engineer',
  location: 'Sfax, Tunisia · remote-friendly',
  blurb: 'Full-stack engineer building scalable, production-ready web platforms from frontend to backend, delivering modern Angular and React/Next.js applications, robust Java, Node.js and Go services, and reliable cloud-ready infrastructure.',
  email: 'achiichmohamed@gmail.com',
  whatsapp: '21622601305',
  github: 'https://github.com/MohamedAchich',
  linkedin: 'https://www.linkedin.com/in/mohamed-achich/',
  cv: '#resume-options',
  cvEnglish: './CV_Mohamed_Achich_EN.pdf',
  cvFrench: './CV_Mohamed_Achich_FR.pdf'
};

const SKILLS = ['Angular', 'React', 'Java', 'Golang', 'Node.js', 'TR-069 / TR-369', 'Docker', 'PostgreSQL'];

/* Logo files live in ./assets/logo — dropped in by the user, matched 1:1 below. */
const LANGUAGES_FRAMEWORKS = [
  { name: 'Golang', logo: './assets/logo/Go_Logo_Blue.svg.webp' },
  { name: 'Java', logo: './assets/logo/java' },
  { name: 'JavaScript', logo: './assets/logo/javascript-logo-javascript-icon-transparent-free-png.webp' },
  { name: 'TypeScript', logo: './assets/logo/type_script.png' },
  { name: 'C', logo: './assets/logo/C_Programming_Language.svg.webp' },
  { name: 'Python', logo: './assets/logo/Python-logo-notext.svg.webp' },
  { name: 'PHP', logo: './assets/logo/php_PNG23.png' },
  { name: 'Node.js', logo: './assets/logo/Node.js_logo.svg.webp' },
  { name: 'React / Next.js', logo: './assets/logo/React-icon.svg.webp' },
  { name: 'Angular', logo: './assets/logo/angular-logo-png_seeklogo-331629.png' },
  { name: 'NestJS', logo: './assets/logo/NestJS.svg' }
];

const TOOLS = [
  { name: 'GitHub', logo: './assets/logo/Octicons-mark-github.svg' },
  { name: 'Docker', logo: './assets/logo/docker_logo.png' },
  { name: 'Jira', logo: './assets/logo/jira.jpeg' },
  { name: 'Claude Code', logo: './assets/logo/claudecode-color.png' },
  { name: 'Figma', logo: './assets/logo/Figma-logo.svg.webp' },
  { name: 'Postman', logo: './assets/logo/postman.png' },
  { name: 'Redis', logo: './assets/logo/redis.png' },
  { name: 'NATS / JetStream', logo: './assets/logo/nats.webp' },
  { name: 'MongoDB', logo: './assets/logo/mongodb-logo-png_seeklogo-481256.png' },
  { name: 'PostgreSQL', logo: './assets/logo/Postgresql_elephant.svg.webp' }
];

const PROJECTS = [
  { name: 'ACS/USP Controller Platform', tone: 'night', eyebrow: 'PIVA Software', image: './assets/acs_uspcontroller_image.png',
    blurb: 'Multi-protocol TR-369/USP and TR-069/CWMP device controller, built as a microservices system.',
    points: [
      'Architected the controller as microservices — Node.js/Express backend, Next.js dashboard, NestJS auth service — orchestrated via Docker Compose.',
      'Built Go protocol brokers for MQTT, STOMP and WebSocket, bridging device messages onto a NATS JetStream event backbone.',
      'Designed an RBAC auth service with org-scoped device credentials in NATS JetStream KV, decoupled from the core backend.',
      'Set up automated TLS provisioning and V8-bytecode production build pipelines for source protection.'
    ],
    stack: ['Node.js', 'Next.js', 'NestJS', 'Golang', 'NATS', 'Docker'], link: 'https://easycwmp.org/solutions/usp-controller', linkLabel: 'View preview' },
  { name: 'USP Agent Simulator', tone: 'night', eyebrow: 'PIVA Software', image: './assets/simulator_dashboard.png',
    blurb: 'Web-based simulator running multiple OB-USP-Agent instances concurrently for functional and stress testing.',
    points: [
      'Ran multiple OB-USP-Agent instances concurrently for functional and stress testing.',
      'Architected the front-end structure — components, services, routing — for scalable control of simulated agents.',
      'Built a real-time monitoring dashboard with live WebSocket data binding.',
      'Containerized the simulator with Docker for reproducible, isolated test environments.'
    ],
    stack: ['React', 'Node.js', 'WebSocket', 'Docker'], link: 'https://easycwmp.org/solutions/tr369-agent-simulator', linkLabel: 'Watch demo' },
  { name: 'EasyCWMP / PIVA Website', tone: 'night', eyebrow: 'PIVA Software · easycwmp.org', image: './assets/easycwmp_website.png',
    blurb: 'Designed, built and deployed the company site end-to-end, including full production hosting.',
    points: [
      'Designed, developed and deployed the site — a React frontend paired with a PHP backend handling contact-form submissions and email notifications.',
      'Configured and managed end-to-end hosting on IONOS: domain setup, DNS, SSL/TLS, and production maintenance.',
      'Optimized site structure and load performance to support outreach to ISPs, telecom operators and OEMs.'
    ],
    stack: ['React', 'PHP', 'IONOS', 'DNS / SSL'], link: 'https://easycwmp.org/' },
  { name: 'Fan League', tone: 'night', eyebrow: 'Freelance · 2025 — 2026', image: './assets/fan_league.webp',
    blurb: 'Real-time fan engagement platform with a dual-ledger points system and Redis leaderboards.',
    points: [
      'Modular-monolith architecture (NestJS backend, React frontend) for a real-time fan engagement platform.',
      'Dual-ledger points system (competitive XP vs. redeemable Loyalty Points) using an append-only ledger for full auditability.',
      'Redis Sorted-Set leaderboards (season, monthly, per-matchday, all-time, per-team) with sub-second reads, fully rebuildable from PostgreSQL.',
      'Planned BullMQ async processing for score settlement and anti-cheat scans to avoid write contention.'
    ],
    stack: ['NestJS', 'React', 'Redis', 'PostgreSQL', 'BullMQ'] },
  { name: 'Business ERP', tone: 'night', eyebrow: 'Project', image: './assets/erp.avif',
    blurb: 'Modular ERP for SMEs — inventory, invoicing and HR as independent, integrated modules.',
    points: [
      'Modular ERP covering inventory management, invoicing/billing and employee/HR records as independent but integrated modules.',
      'Role-based access control with distinct admin, manager and staff portals.',
      'Next.js/React dashboard with a Node.js/Express REST API backend, using PostgreSQL for relational business data.',
      'Containerized with Docker for reproducible deployment across environments.'
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'] },
  { name: 'E-Commerce Shopping Platform', tone: 'night', eyebrow: 'Project', image: './assets/ecommerce_website.png',
    blurb: 'Full-stack MEAN-stack storefront and admin panel, built from scratch.',
    points: [
      'Built a full-stack e-commerce app on the MEAN stack (MongoDB, Express.js, Angular, Node.js) — customer storefront and admin panel.',
      'Designed the customer interface from scratch: product browsing, cart and checkout, with a responsive Angular frontend.',
      'Built the admin panel for managing products, inventory and orders, backed by a REST API in Express.js.',
      'Designed the MongoDB data model and backend architecture for scalable product/order management.'
    ],
    stack: ['Angular', 'Java', 'MongoDB'], link: 'https://www.youtube.com/watch?v=dA2SKH0pIbs', linkLabel: 'View preview' },
  { name: 'Luxe Style Clothing Store App', tone: 'night', eyebrow: 'Mobile App · Flutter', image: './assets/Luxe Style Clothing Store App.avif',
    blurb: 'A modern clothing-store app with an elegant shopping experience, personalized profiles, and smooth cross-platform navigation.',
    points: [
      'Designed a modern and elegant UI/UX with smooth navigation and animations.',
      'Built personalized user profiles and a seamless shopping experience.',
      'Created responsive screens optimized for performance across platforms.',
      'Covered the complete customer flow from splash screen to checkout.'
    ],
    stack: ['Flutter', 'Dart', 'Figma', 'UI/UX', 'Cross-platform'], link: 'https://www.youtube.com/watch?v=YT8Gjea6bYE', linkLabel: 'Watch demo' },
  { name: 'Anime Quiz Game', tone: 'night', eyebrow: 'Mobile App · Android', image: './assets/animequiz.jpg',
    blurb: 'An engaging Android game for anime enthusiasts, combining vibrant UI with intuitive gameplay and scalable architecture.',
    points: [
      'Built engaging gameplay for anime enthusiasts with a vibrant, intuitive interface.',
      'Applied clean coding practices and a scalable application architecture.',
      'Optimized the game for responsive performance and high user engagement.'
    ],
    stack: ['Android', 'Kotlin', 'Java', 'Game Development', 'UI/UX'], link: 'https://www.youtube.com/watch?v=1UjO2AQD3oU', linkLabel: 'Watch demo' },
  { name: 'Food Delivery Mobile App UI Kit', tone: 'night', eyebrow: 'Mobile Design · Figma', image: './assets/Food Delivery Mobile App UI Kit.avif',
    blurb: 'A sleek, user-friendly mobile interface kit for a seamless food-ordering experience, from discovery through checkout.',
    points: [
      'Designed a complete set of screens for a mobile-first food delivery flow.',
      'Created an elegant and intuitive interface with vibrant color schemes.',
      'Built a reusable UI kit for rapid prototyping and product iteration.'
    ],
    stack: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
    images: [
      './assets/food del 1.png',
      './assets/food del 2.jpeg',
      './assets/food del 3.jpeg',
      './assets/food del 4.jpeg',
      './assets/food del 5.jpeg'
    ] }
];

/* Placeholder testimonials — fictional, for layout purposes. Swap in real
   client quotes before sharing this site publicly; presenting these as
   genuine endorsements would be misleading. */
const TESTIMONIALS = [
  { quote: 'Mohamed shipped our TR-069 controller integration ahead of schedule, and the handover docs meant our team could maintain it without him in the room.', name: 'Karim Belhadj', role: 'CTO, Nordic Broadband Solutions' },
  { quote: 'He rebuilt our leaderboard system from scratch and it has held up through three tournament launches without a single incident.', name: 'Sara Lindqvist', role: 'Product Lead, Matchday Labs' },
  { quote: 'Clear communication, realistic estimates, and code our internal team could actually extend after the contract ended.', name: 'Youssef Trabelsi', role: 'Engineering Manager, Atlas ISP Group' }
];

/* Placeholder blog posts — fictional, written to demonstrate real expertise.
   Each links to a static article page under ./blogs/. */
const BLOGS = [
  { tag: 'Backend', slug: 'golang-for-backend-services', title: 'Golang for backend services: what changes coming from Node.js',
    blurb: 'Goroutines instead of callbacks, explicit error handling, and why the standard library gets you further than you think.' },
  { tag: 'Backend', slug: 'nestjs-api-design', title: 'Structuring a NestJS API that survives real traffic',
    blurb: 'Modules, guards and interceptors as boundaries — not boilerplate — plus where Express still wins.' },
  { tag: 'Redis', slug: 'redis-beyond-caching', title: 'Redis beyond caching: leaderboards, locks, and rate limits',
    blurb: 'Sorted sets, atomic Lua scripts, and where Redis earns its place as a system of record, not just a cache.' },
  { tag: 'Messaging', slug: 'rabbitmq-vs-nats', title: 'RabbitMQ vs. NATS: picking a broker for event-driven services',
    blurb: 'Delivery guarantees, replay, and operational cost — how I choose between the two for a new service.' }
];

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Blogs', 'Contact'];

const PROJECT_TRANSLATIONS = {
  fr: {
    'ACS/USP Controller Platform': { blurb: 'Contrôleur de terminaux multi-protocoles construit comme un système de microservices.', points: ['Architecture en microservices avec backend Node.js/Express, dashboard Next.js et service d’authentification NestJS orchestrés par Docker Compose.', 'Développement de brokers Go pour MQTT, STOMP et WebSocket avec événements NATS JetStream.', 'Conception d’un service RBAC avec identifiants organisés et stockage KV.', 'Mise en place du provisionnement TLS automatisé et de pipelines de production protégés.'] },
    'USP Agent Simulator': { blurb: 'Simulateur web exécutant plusieurs agents en parallèle pour les tests fonctionnels et de charge.', points: ['Exécution simultanée de plusieurs agents pour les tests fonctionnels et de stress.', 'Architecture frontend avec composants, services et routage pour contrôler les agents.', 'Dashboard de supervision en temps réel avec données WebSocket.', 'Conteneurisation Docker pour des environnements de test reproductibles.'] },
    'EasyCWMP / PIVA Website': { blurb: 'Site de l’entreprise conçu, développé et déployé de bout en bout.', points: ['Frontend React et backend PHP pour les formulaires de contact et notifications e-mail.', 'Gestion de l’hébergement IONOS, du domaine, du DNS, du SSL/TLS et de la maintenance.', 'Optimisation de la structure et des performances pour les prospects techniques.'] },
    'Fan League': { blurb: 'Plateforme d’engagement des fans en temps réel avec système de points et classements Redis.', points: ['Architecture monolithique modulaire avec backend NestJS et frontend React.', 'Double registre de points avec journal append-only auditable.', 'Classements Redis Sorted Set reconstruisibles depuis PostgreSQL.', 'Traitement asynchrone BullMQ prévu pour les scores et contrôles anti-triche.'] },
    'Business ERP': { blurb: 'ERP modulaire pour PME : stock, facturation et ressources humaines.', points: ['Modules indépendants mais intégrés pour le stock, la facturation et les dossiers employés.', 'Contrôle d’accès par rôles avec portails administrateur, manager et équipe.', 'Dashboard Next.js/React et API REST Node.js/Express avec PostgreSQL.', 'Conteneurisation Docker pour des déploiements reproductibles.'] },
    'E-Commerce Shopping Platform': { blurb: 'Boutique et panneau d’administration MEAN full-stack développés de zéro.', points: ['Application e-commerce MEAN avec boutique client et panneau d’administration.', 'Interface Angular responsive avec catalogue, panier et paiement.', 'Panneau de gestion des produits, stocks et commandes avec API Express.', 'Modèle MongoDB et architecture backend conçus pour évoluer.'] },
    'Luxe Style Clothing Store App': { blurb: 'Application mobile de boutique de vêtements avec expérience élégante et navigation fluide.', points: ['Interface moderne avec navigation et animations fluides.', 'Profils personnalisés et expérience d’achat simple.', 'Écrans responsifs optimisés pour les performances multiplateformes.', 'Parcours complet du splash screen au paiement.'] },
    'Anime Quiz Game': { blurb: 'Jeu Android pour les passionnés d’anime avec interface vive et architecture évolutive.', points: ['Gameplay engageant et interface intuitive pour les fans d’anime.', 'Code propre et architecture évolutive.', 'Performances optimisées et forte capacité d’engagement.'] },
    'Food Delivery Mobile App UI Kit': { blurb: 'Kit d’interface mobile élégant pour une expérience de commande de repas fluide.', points: ['Ensemble complet d’écrans pour un parcours de livraison mobile-first.', 'Interface intuitive avec palette de couleurs dynamique.', 'Kit UI réutilisable pour le prototypage et les itérations produit.'] }
  },
  ar: {
    'ACS/USP Controller Platform': { blurb: 'منصة تحكم متعددة البروتوكولات مبنية كنظام من الخدمات المصغرة.', points: ['بناء معمارية خدمات مصغرة تضم Node.js/Express وNext.js وNestJS باستخدام Docker Compose.', 'تطوير وسطاء Go لبروتوكولات MQTT وSTOMP وWebSocket مع أحداث NATS JetStream.', 'تصميم خدمة RBAC مع بيانات اعتماد منظمة وتخزين KV.', 'إعداد توفير TLS تلقائياً وخطوط بناء إنتاجية محمية.'] },
    'USP Agent Simulator': { blurb: 'محاكي ويب يشغل عدة وكلاء بالتوازي للاختبارات الوظيفية واختبارات الضغط.', points: ['تشغيل عدة وكلاء في الوقت نفسه للاختبار الوظيفي واختبار الضغط.', 'بناء هيكل الواجهة من مكونات وخدمات وتوجيه للتحكم بالوكلاء.', 'لوحة مراقبة فورية مرتبطة ببيانات WebSocket.', 'استخدام Docker لبيئات اختبار معزولة وقابلة لإعادة الإنتاج.'] },
    'EasyCWMP / PIVA Website': { blurb: 'موقع الشركة صُمم وطُوّر ونُشر بالكامل من البداية إلى الإنتاج.', points: ['واجهة React وخلفية PHP لنماذج التواصل وإشعارات البريد.', 'إدارة استضافة IONOS والنطاق وDNS وSSL/TLS والصيانة.', 'تحسين بنية الموقع وسرعته للوصول إلى العملاء التقنيين.'] },
    'Fan League': { blurb: 'منصة تفاعل فوري مع المشجعين ونظام نقاط ولوحات ترتيب باستخدام Redis.', points: ['معمارية أحادية معيارية بواجهة React وخلفية NestJS.', 'نظاما نقاط منفصلان مع سجل إضافي قابل للتدقيق.', 'لوحات ترتيب Redis قابلة لإعادة البناء من PostgreSQL.', 'تخطيط معالجة BullMQ للنقاط وفحوصات مكافحة الغش.'] },
    'Business ERP': { blurb: 'نظام ERP معياري للشركات الصغيرة والمتوسطة يشمل المخزون والفوترة والموارد البشرية.', points: ['وحدات مستقلة ومتكاملة لإدارة المخزون والفوترة وسجلات الموظفين.', 'صلاحيات حسب الأدوار مع بوابات للإدارة والمديرين والموظفين.', 'لوحة Next.js/React وواجهة REST بـ Node.js/Express وقاعدة PostgreSQL.', 'استخدام Docker لنشر متكرر وقابل للضبط.'] },
    'E-Commerce Shopping Platform': { blurb: 'منصة تجارة إلكترونية ولوحة إدارة MEAN كاملة بُنيت من الصفر.', points: ['متجر إلكتروني ولوحة إدارة مبنيان باستخدام MEAN.', 'واجهة Angular متجاوبة للتصفح والسلة والدفع.', 'إدارة المنتجات والمخزون والطلبات عبر API بـ Express.', 'تصميم نموذج MongoDB ومعمارية خلفية قابلة للتوسع.'] },
    'Luxe Style Clothing Store App': { blurb: 'تطبيق متجر ملابس بتصميم أنيق وتنقل سلس وتجربة تسوق متكاملة.', points: ['واجهة عصرية مع تنقل وحركات سلسة.', 'ملفات شخصية مخصصة وتجربة شراء سهلة.', 'شاشات متجاوبة محسنة للأداء عبر المنصات.', 'تدفق كامل من شاشة البداية إلى الدفع.'] },
    'Anime Quiz Game': { blurb: 'لعبة Android لمحبي الأنمي بواجهة حيوية ومعمارية قابلة للتوسع.', points: ['لعب ممتع وواجهة بديهية لمحبي الأنمي.', 'كود نظيف ومعمارية قابلة للتوسع.', 'أداء محسن وتفاعل مرتفع مع المستخدمين.'] },
    'Food Delivery Mobile App UI Kit': { blurb: 'مجموعة واجهات أنيقة لتجربة طلب طعام سهلة عبر الهاتف.', points: ['مجموعة شاشات كاملة لمسار توصيل mobile-first.', 'واجهة بديهية وألوان حيوية.', 'مجموعة UI قابلة لإعادة الاستخدام للنمذجة وتطوير المنتج.'] }
  }
};

const I18N = {
  en: {
    language: 'Language', profileName: 'Mohamed Achich', languages: { en: 'English', fr: 'French', ar: 'Arabic' },
    nav: { Home: 'Home', About: 'About', Skills: 'Skills', Projects: 'Projects', Blogs: 'Blogs', Contact: 'Contact' },
    role: 'Full-stack engineer', location: 'Sfax, Tunisia · remote-friendly',
    blurb: 'Full-stack engineer building scalable, production-ready web platforms from frontend to backend, delivering modern Angular and React/Next.js applications, robust Java, Node.js and Go services, and reliable cloud-ready infrastructure.',
    downloadResume: 'Download Resume', viewProjects: 'View projects', whoami: 'Mohamed ACHICH', heroTitle: 'Building Systems That', heroKeyword: 'Scale',
    aboutEyebrow: 'About me', aboutTitle: 'Products, platforms, and things that ship',
    aboutOne: 'I build full-stack products from the interface down to the data layer, responsive Angular and React/Next.js applications, Node.js and Go backends, and APIs that are clear, reliable, and easy to extend. I care about strong module boundaries, thoughtful user experiences, and software that stays maintainable as the product grows.',
    aboutTwo: 'My work spans dashboards, ERPs, e-commerce, and real-time engagement platforms. I also own the delivery side — databases, authentication, testing, Docker, domains, DNS, TLS, and production hosting, not just the code that runs on it. Based in Sfax, Tunisia, open to remote work across time zones.',
    fullResume: 'Download the full résumé', skillsEyebrow: 'Skills', skillsTitle: 'What I use', frameworks: 'Languages & frameworks', tools: 'Tools & platforms',
    aboutCards: [{ title: 'Freelance', price: 'Open', blurb: 'Full-stack product development from frontend to deployment.', features: ['Angular / React / Next.js', 'Node.js / Go / PostgreSQL', 'Remote, async-friendly'], cta: 'Enquire' }, { title: 'Full-time', price: 'Open to offers', blurb: 'Full-stack engineering roles on products built to last.', features: ['Remote or Sfax-based', 'Frontend and backend ownership', 'Product-focused teams'], cta: 'Get in touch' }],
    projectsEyebrow: 'Projects', projectsTitle: 'Things I shipped', testimonialsEyebrow: 'Testimonials', testimonialsTitle: 'What clients say', blogsEyebrow: 'Blogs', blogsTitle: 'Notes on systems', blogTags: { Backend: 'Backend', Redis: 'Redis', Messaging: 'Messaging' },
    contactEyebrow: 'Contact', contactTitle: 'Say hello', contactIntro: 'Fastest route is email. I reply within a day or two, and I will tell you plainly if I am not the right person for the work.',
    topicLabel: 'What is this about?', topics: ['Contract work', 'Full-time role', 'Open-source question', 'Something else'],
    firstName: 'First name', lastName: 'Last name', email: 'Email', message: 'Message', messagePlaceholder: 'What are you building?', sendMessage: 'Send message',
    messageSent: 'Message sent', sentCopy: 'Your email app should have opened a message addressed to Mohamed. Send it to complete your enquiry.', sendAnother: 'Send another',
    preview: 'View preview', demo: 'Watch demo', github: 'View GitHub', close: 'Close', chooseResume: 'Choose résumé language', englishCv: 'English CV', frenchCv: 'French CV', cancel: 'Cancel',
    footerProjects: 'Projects', footerElsewhere: 'Elsewhere', legal: 'Built by hand',
    testimonials: [{ quote: 'Mohamed shipped our controller integration ahead of schedule, and the handover docs meant our team could maintain it without him in the room.', name: 'Karim Belhadj', role: 'CTO, Nordic Broadband Solutions' }, { quote: 'He rebuilt our leaderboard system from scratch and it has held up through three tournament launches without a single incident.', name: 'Sara Lindqvist', role: 'Product Lead, Matchday Labs' }, { quote: 'Clear communication, realistic estimates, and code our internal team could actually extend after the contract ended.', name: 'Youssef Trabelsi', role: 'Engineering Manager, Atlas ISP Group' }],
    blogPosts: {
      'golang-for-backend-services': { title: 'Golang for backend services: what changes coming from Node.js', blurb: 'Goroutines instead of callbacks, explicit error handling, and why the standard library gets you further than you think.' },
      'nestjs-api-design': { title: 'Structuring a NestJS API that survives real traffic', blurb: 'Modules, guards and interceptors as boundaries — not boilerplate — plus where Express still wins.' },
      'redis-beyond-caching': { title: 'Redis beyond caching: leaderboards, locks, and rate limits', blurb: 'Sorted sets, atomic Lua scripts, and where Redis earns its place as a system of record, not just a cache.' },
      'rabbitmq-vs-nats': { title: 'RabbitMQ vs. NATS: picking a broker for event-driven services', blurb: 'Delivery guarantees, replay, and operational cost — how I choose between the two for a new service.' }
    }
  },
  fr: {
    language: 'Langue', profileName: 'Mohamed Achich', languages: { en: 'Anglais', fr: 'Français', ar: 'Arabe' },
    nav: { Home: 'Accueil', About: 'À propos', Skills: 'Compétences', Projects: 'Projets', Blogs: 'Articles', Contact: 'Contact' },
    role: 'Ingénieur full-stack', location: 'Sfax, Tunisie · ouvert au télétravail',
    blurb: 'Ingénieur full-stack, je construis des plateformes web évolutives et prêtes pour la production, du frontend au backend, avec des applications modernes Angular et React/Next.js, des services Java, Node.js et Go robustes, ainsi qu’une infrastructure cloud fiable et prête à évoluer.',
    downloadResume: 'Télécharger le CV', viewProjects: 'Voir les projets', whoami: 'Mohamed ACHICH', heroTitle: 'Des systèmes qui', heroKeyword: 'passent à l’échelle',
    aboutEyebrow: 'À propos', aboutTitle: 'Des produits et des plateformes qui avancent',
    aboutOne: "Je construis des produits full-stack, de l'interface jusqu'aux données : applications Angular et React/Next.js, backends Node.js et Go, et APIs claires, fiables et faciles à faire évoluer.",
    aboutTwo: "Mon expérience couvre les tableaux de bord, les ERP, le e-commerce et les plateformes d'engagement en temps réel. Je prends aussi en charge la livraison : bases de données, authentification, tests, Docker, domaines, DNS, TLS et hébergement de production.",
    fullResume: 'Télécharger le CV complet', skillsEyebrow: 'Compétences', skillsTitle: "Ce que j'utilise", frameworks: 'Langages et frameworks', tools: 'Outils et plateformes',
    aboutCards: [{ title: 'Freelance', price: 'Disponible', blurb: 'Développement full-stack, du frontend au déploiement.', features: ['Angular / React / Next.js', 'Node.js / Go / PostgreSQL', 'À distance, asynchrone'], cta: 'Me contacter' }, { title: 'Temps plein', price: 'Ouvert aux offres', blurb: 'Postes full-stack sur des produits conçus pour durer.', features: ['À distance ou à Sfax', 'Frontend et backend', 'Équipes orientées produit'], cta: 'Me contacter' }],
    projectsEyebrow: 'Projets', projectsTitle: 'Mes réalisations', testimonialsEyebrow: 'Témoignages', testimonialsTitle: 'Ce que disent les clients', blogsEyebrow: 'Articles', blogsTitle: 'Notes sur les systèmes', blogTags: { Backend: 'Backend', Redis: 'Redis', Messaging: 'Messagerie' },
    contactEyebrow: 'Contact', contactTitle: 'Dites bonjour', contactIntro: "Le moyen le plus rapide est l'e-mail. Je réponds sous un ou deux jours et je vous dirai franchement si je ne suis pas la bonne personne.",
    topicLabel: 'Quel est le sujet ?', topics: ['Mission freelance', 'Poste permanent', 'Question open source', 'Autre sujet'],
    firstName: 'Prénom', lastName: 'Nom', email: 'E-mail', message: 'Message', messagePlaceholder: 'Que construisez-vous ?', sendMessage: 'Envoyer le message',
    messageSent: 'Message préparé', sentCopy: "Votre application e-mail devrait avoir ouvert un message adressé à Mohamed. Envoyez-le pour terminer votre demande.", sendAnother: 'Envoyer un autre message',
    preview: 'Voir l’aperçu', demo: 'Voir la démo', github: 'Voir GitHub', close: 'Fermer', chooseResume: 'Choisir la langue du CV', englishCv: 'CV anglais', frenchCv: 'CV français', cancel: 'Annuler', footerProjects: 'Projets', footerElsewhere: 'Liens', legal: 'Créé à la main',
    testimonials: [{ quote: 'Mohamed a livré notre intégration plus tôt que prévu, avec une documentation qui permet à notre équipe de la maintenir.', name: 'Karim Belhadj', role: 'Directeur technique, Nordic Broadband Solutions' }, { quote: 'Il a reconstruit notre système de classement et il a tenu pendant trois lancements sans incident.', name: 'Sara Lindqvist', role: 'Responsable produit, Matchday Labs' }, { quote: 'Une communication claire, des estimations réalistes et un code que notre équipe peut faire évoluer.', name: 'Youssef Trabelsi', role: 'Responsable ingénierie, Atlas ISP Group' }],
    blogPosts: {
      'golang-for-backend-services': { title: 'Go pour les services backend : ce qui change après Node.js', blurb: 'Les goroutines plutôt que les callbacks, la gestion explicite des erreurs et la puissance de la bibliothèque standard.' },
      'nestjs-api-design': { title: 'Structurer une API NestJS qui résiste au trafic réel', blurb: 'Les modules, guards et interceptors comme frontières, pas comme du code répétitif.' },
      'redis-beyond-caching': { title: 'Redis au-delà du cache : classements, verrous et limites', blurb: 'Sorted sets, scripts Lua atomiques et cas où Redis devient bien plus qu’un simple cache.' },
      'rabbitmq-vs-nats': { title: 'RabbitMQ ou NATS : choisir un broker événementiel', blurb: 'Garanties de livraison, rejeu et coût opérationnel pour choisir le bon broker.' }
    }
  },
  ar: {
    language: 'اللغة', profileName: 'محمد عشيش', languages: { en: 'الإنجليزية', fr: 'الفرنسية', ar: 'العربية' },
    nav: { Home: 'الرئيسية', About: 'نبذة عني', Skills: 'المهارات', Projects: 'المشاريع', Blogs: 'المقالات', Contact: 'اتصل بي' },
    role: 'مهندس Full-stack', location: 'صفاقس، تونس · متاح للعمل عن بُعد',
    blurb: 'مهندس Full-stack أبني منصات ويب قابلة للتوسع وجاهزة للإنتاج من الواجهة الأمامية إلى الخلفية، وأطوّر تطبيقات حديثة باستخدام Angular وReact/Next.js، وخدمات قوية بـ Java وNode.js وGo، وبنية تحتية موثوقة وجاهزة للسحابة.',
    downloadResume: 'تحميل السيرة الذاتية', viewProjects: 'عرض المشاريع', whoami: 'Mohamed ACHICH', heroTitle: 'نبني أنظمة', heroKeyword: 'قابلة للتوسع',
    aboutEyebrow: 'نبذة عني', aboutTitle: 'منتجات ومنصات تتحول إلى واقع',
    aboutOne: 'أبني منتجات Full-stack من الواجهة إلى طبقة البيانات، باستخدام Angular وReact/Next.js وNode.js وGo، مع واجهات برمجية واضحة وموثوقة وسهلة التطوير.',
    aboutTwo: 'تشمل خبرتي لوحات التحكم وأنظمة ERP والتجارة الإلكترونية ومنصات التفاعل الفوري. كما أتولى قواعد البيانات والمصادقة والاختبارات وDocker والنطاقات وDNS وTLS والاستضافة الإنتاجية.',
    fullResume: 'تحميل السيرة الذاتية الكاملة', skillsEyebrow: 'المهارات', skillsTitle: 'ما أستخدمه', frameworks: 'اللغات وأطر العمل', tools: 'الأدوات والمنصات',
    aboutCards: [{ title: 'عمل مستقل', price: 'متاح', blurb: 'تطوير منتجات Full-stack من الواجهة إلى النشر.', features: ['Angular / React / Next.js', 'Node.js / Go / PostgreSQL', 'عن بُعد وبمرونة'], cta: 'تواصل معي' }, { title: 'دوام كامل', price: 'منفتح على العروض', blurb: 'أدوار Full-stack في منتجات مصممة لتدوم.', features: ['عن بُعد أو من صفاقس', 'مسؤولية الواجهة والخلفية', 'فرق تركز على المنتج'], cta: 'تواصل معي' }],
    projectsEyebrow: 'المشاريع', projectsTitle: 'مشاريع أنجزتها', testimonialsEyebrow: 'شهادات العملاء', testimonialsTitle: 'ماذا يقول العملاء', blogsEyebrow: 'المقالات', blogsTitle: 'ملاحظات حول الأنظمة', blogTags: { Backend: 'الخلفية', Redis: 'Redis', Messaging: 'المراسلة' },
    contactEyebrow: 'اتصل بي', contactTitle: 'مرحباً بك', contactIntro: 'أسرع طريقة هي البريد الإلكتروني. أرد خلال يوم أو يومين وسأخبرك بصراحة إن لم أكن الشخص المناسب للعمل.',
    topicLabel: 'ما موضوع رسالتك؟', topics: ['عمل مستقل', 'وظيفة بدوام كامل', 'سؤال حول المصادر المفتوحة', 'موضوع آخر'],
    firstName: 'الاسم الأول', lastName: 'اسم العائلة', email: 'البريد الإلكتروني', message: 'الرسالة', messagePlaceholder: 'ماذا تبني؟', sendMessage: 'إرسال الرسالة',
    messageSent: 'تم تجهيز الرسالة', sentCopy: 'من المفترض أن تطبيق البريد الإلكتروني فتح رسالة موجهة إلى محمد. أرسلها لإكمال طلبك.', sendAnother: 'إرسال رسالة أخرى',
    preview: 'عرض المعاينة', demo: 'مشاهدة العرض', github: 'عرض GitHub', close: 'إغلاق', chooseResume: 'اختر لغة السيرة الذاتية', englishCv: 'السيرة الإنجليزية', frenchCv: 'السيرة الفرنسية', cancel: 'إلغاء', footerProjects: 'المشاريع', footerElsewhere: 'روابط أخرى', legal: 'بُني يدوياً',
    testimonials: [{ quote: 'أنجز محمد تكامل منصتنا قبل الموعد، وكانت وثائق التسليم واضحة لفريقنا.', name: 'كريم بلحاج', role: 'المدير التقني، Nordic Broadband Solutions' }, { quote: 'أعاد بناء نظام الترتيب لدينا وصمد خلال ثلاث بطولات دون أي حادث.', name: 'سارة ليندكفيست', role: 'قائدة المنتج، Matchday Labs' }, { quote: 'تواصل واضح وتقديرات واقعية وكود يمكن لفريقنا تطويره بسهولة.', name: 'يوسف الطرابلسي', role: 'مدير الهندسة، Atlas ISP Group' }],
    blogPosts: {
      'golang-for-backend-services': { title: 'لغة Go لخدمات الواجهة الخلفية: ما الذي يتغير بعد Node.js؟', blurb: 'المهام المتزامنة بدلاً من الاستدعاءات، ومعالجة الأخطاء بوضوح، وقوة المكتبة القياسية.' },
      'nestjs-api-design': { title: 'بناء واجهة NestJS البرمجية لتتحمل حركة المرور الحقيقية', blurb: 'الوحدات والحراس والمعترضات كحدود واضحة وليست مجرد تعليمات متكررة.' },
      'redis-beyond-caching': { title: 'Redis أبعد من التخزين المؤقت: لوحات المتصدرين والأقفال والحدود', blurb: 'المجموعات المرتبة والبرامج الذرية ومتى يصبح Redis أكثر من مجرد ذاكرة مؤقتة.' },
      'rabbitmq-vs-nats': { title: 'RabbitMQ أم NATS: اختيار وسيط للخدمات القائمة على الأحداث', blurb: 'ضمانات التسليم وإعادة التشغيل والتكلفة التشغيلية لاختيار الوسيط المناسب.' }
    }
  }
};

Object.assign(window, { PROFILE, SKILLS, LANGUAGES_FRAMEWORKS, TOOLS, PROJECTS, TESTIMONIALS, BLOGS, NAV_ITEMS, I18N, PROJECT_TRANSLATIONS });
