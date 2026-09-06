(() => {
  const language = localStorage.getItem('portfolio-language') || 'en';
  const slug = location.pathname.split('/').pop().replace('.html', '');
  const copy = {
    en: {
      back: 'Back to portfolio', tag: 'Backend', language: 'Language', profileName: 'Mohamed Achich',
      titles: {
        'golang-for-backend-services': 'Golang for backend services: what changes coming from Node.js',
        'nestjs-api-design': 'Structuring a NestJS API that survives real traffic',
        'redis-beyond-caching': 'Redis beyond caching: leaderboards, locks, and rate limits',
        'rabbitmq-vs-nats': 'RabbitMQ vs. NATS: picking a broker for event-driven services'
      }
    },
    fr: {
      back: 'Retour au portfolio', tag: 'Backend', language: 'Langue', profileName: 'Mohamed Achich',
      titles: {
        'golang-for-backend-services': 'Go pour les services backend : ce qui change après Node.js',
        'nestjs-api-design': 'Structurer une API NestJS qui résiste au trafic réel',
        'redis-beyond-caching': 'Redis au-delà du cache : classements, verrous et limites',
        'rabbitmq-vs-nats': 'RabbitMQ ou NATS : choisir un broker événementiel'
      },
      body: {
        'golang-for-backend-services': ['Les goroutines plutôt que les callbacks', 'Les erreurs sont des valeurs, pas des exceptions', 'La bibliothèque standard va plus loin qu’on ne le pense'],
        'nestjs-api-design': ['Les modules comme frontières, pas comme dossiers', 'Les guards et interceptors plutôt qu’un middleware désordonné', 'Les cas où Express reste le meilleur choix'],
        'redis-beyond-caching': ['Les classements sont des sorted sets, pas une requête', 'Les verrous distribués avec prudence', 'Limiter le débit sans aller-retour vers la base de données'],
        'rabbitmq-vs-nats': ['Ce que chacun optimise', 'Le choix retenu']
      },
      paragraphs: {
        'golang-for-backend-services': ["Une grande partie de mon expérience se situe entre les dashboards Node.js et les services Go qui les alimentent. Le changement ne concerne pas d’abord la performance : il concerne surtout ce que le langage rend explicite.", 'Les goroutines sont suffisamment légères pour utiliser la concurrence naturellement, sans ajouter une bibliothèque spécialisée.', 'Go oblige à traiter chaque erreur au point d’appel. Cette visibilité évite de masquer une erreur plusieurs couches plus haut et rend les chemins d’échec clairs.', 'La bibliothèque standard couvre beaucoup de besoins avec moins de dépendances et un modèle mental plus simple pour les équipes.', 'Go n’est pas toujours le meilleur choix. Pour les dashboards, Node et Next.js restent très efficaces, tandis que Go convient particulièrement aux brokers et connexions longue durée.'],
        'nestjs-api-design': ['NestJS est parfois critiqué pour ses décorateurs et son injection de dépendances. Cette structure devient utile dès qu’un service possède une authentification, des tâches en arrière-plan et plusieurs équipes.', 'Les modules sont utiles lorsqu’ils imposent une vraie frontière : ils n’exportent que ce dont les autres modules peuvent dépendre.', 'Express utilise une chaîne middleware plate. Nest sépare les guards, interceptors et pipes afin de rendre le traitement des requêtes plus lisible.', 'Pour un petit service isolé, Express reste souvent plus rapide à écrire. Nest prend sa valeur lorsqu’un service grandit et doit conserver une structure claire.'],
        'redis-beyond-caching': ['Un classement naïf relance une requête sur la base principale à chaque chargement. Un sorted set Redis offre des insertions et lectures rapides avec le rang disponible immédiatement.', 'En production, le sorted set doit rester une projection reconstructible et non la source de vérité. PostgreSQL conserve le score autoritaire.', 'La commande atomique avec expiration peut empêcher plusieurs workers de traiter la même tâche, mais un délai ne garantit pas la correction si l’opération dure plus longtemps.', 'Un limiteur de débit à fenêtre glissante peut tenir dans un script Lua atomique, sans service séparé ni aller-retour supplémentaire vers la base.', 'Redis ne remplace pas PostgreSQL. Il évite surtout d’utiliser une base généraliste pour un problème qui possède déjà une structure spécialisée.'],
        'rabbitmq-vs-nats': ['Chaque nouveau service asynchrone pose la même question : RabbitMQ ou NATS ? Les deux sont solides, mais ils répondent à des besoins différents.', 'RabbitMQ privilégie les files, échanges et règles de routage. NATS privilégie le débit et la simplicité, tandis que JetStream ajoute la persistance et la relecture.', 'Pour les pipelines d’événements à forte diffusion, NATS JetStream s’est révélé plus adapté grâce à sa hiérarchie de sujets et à son empreinte opérationnelle réduite.', 'RabbitMQ reste préférable lorsque le routage conditionnel et les accusés de réception par consommateur sont le cœur du problème. Le choix doit suivre la forme du routage, pas un benchmark.']
      }
    },
    ar: {
      back: 'العودة إلى الملف الشخصي', tag: 'الواجهة الخلفية', language: 'اللغة', profileName: 'محمد عشيش',
      titles: {
        'golang-for-backend-services': 'لغة Go لخدمات الواجهة الخلفية: ما الذي يتغير بعد Node.js؟',
        'nestjs-api-design': 'بناء واجهة NestJS البرمجية لتتحمل حركة المرور الحقيقية',
        'redis-beyond-caching': 'Redis أبعد من التخزين المؤقت: لوحات المتصدرين والأقفال والحدود',
        'rabbitmq-vs-nats': 'RabbitMQ أم NATS: اختيار وسيط للخدمات القائمة على الأحداث'
      },
      body: {
        'golang-for-backend-services': ['المهام المتزامنة بدلاً من الاستدعاءات', 'الأخطاء قيم وليست استثناءات', 'المكتبة القياسية تقدم أكثر مما تتوقع'],
        'nestjs-api-design': ['الوحدات كحدود وليست مجلدات', 'الحراس والمعترضات بدلاً من فوضى الوسائط', 'متى تتفوق Express'],
        'redis-beyond-caching': ['لوحات المتصدرين هي مجموعات مرتبة وليست استعلاماً', 'الأقفال الموزعة بحذر', 'تحديد المعدل دون اتصال بقاعدة البيانات'],
        'rabbitmq-vs-nats': ['ما الذي يحسنه كل خيار', 'الخيار الذي استقررت عليه']
      },
      paragraphs: {
        'golang-for-backend-services': ['يقع جزء كبير من خبرتي بين لوحات Node.js وخدمات Go التي تعمل خلفها. التغيير لا يتعلق بالأداء أولاً، بل بما يجعلُهُ Go واضحاً في تصميم الكود.', 'المهام المتزامنة في Go خفيفة بما يكفي لاستخدامها بشكل طبيعي دون مكتبات متخصصة.', 'تجبر Go المطور على معالجة كل خطأ في مكانه، مما يجعل مسارات الفشل واضحة ويمنع إخفاء الأخطاء.', 'تغطي المكتبة القياسية الكثير من الاحتياجات مع تبعيات أقل ونموذج أبسط للفريق.', 'ليست Go الخيار الأفضل دائماً. تبقى Node وNext.js ممتازتين للوحات التحكم، بينما تناسب Go الوسطاء والاتصالات طويلة المدة.'],
        'nestjs-api-design': ['تُنتقد NestJS أحياناً بسبب المصمّمات وحقن الاعتماديات، لكنها تصبح مفيدة عند وجود المصادقة والمهام الخلفية وتعدد فرق العمل.', 'تكون الوحدات مفيدة عندما تفرض حدوداً حقيقية ولا تصدّر إلا ما يمكن للوحدات الأخرى استخدامه.', 'تستخدم Express سلسلة وسائط مسطحة، بينما تفصل Nest بين الحراس والمعترضات والأنابيب لتنظيم معالجة الطلبات.', 'لخدمة صغيرة مستقلة قد تكون Express أسرع، لكن Nest تتألق عندما تكبر الخدمة وتحتاج إلى بنية واضحة.'],
        'redis-beyond-caching': ['تعيد لوحة الترتيب البسيطة استعلام قاعدة البيانات الرئيسية عند كل تحميل. توفر مجموعة Redis المرتبة إدراجاً وقراءة سريعين مع الرتبة مباشرة.', 'يجب أن تكون المجموعة المرتبة إسقاطاً قابلاً لإعادة البناء وليست مصدر الحقيقة، مع حفظ النتيجة الأساسية في PostgreSQL.', 'يمكن للقفل الذري مع انتهاء الصلاحية منع عدة عمال من تنفيذ المهمة نفسها، لكن المهلة لا تضمن الصحة إن استغرقت العملية وقتاً أطول.', 'يمكن بناء محدد معدل للطلبات في نص Lua ذري، دون خدمة منفصلة أو اتصال إضافي بقاعدة البيانات.', 'لا يستبدل Redis PostgreSQL، بل يمنع استخدام قاعدة عامة لمشكلة لها بنية بيانات متخصصة.'],
        'rabbitmq-vs-nats': ['عندما تحتاج خدمة جديدة إلى التواصل بشكل غير متزامن يظهر السؤال نفسه: RabbitMQ أم NATS؟ كلاهما جيد لكن لكل منهما مشكلة مختلفة.', 'يركز RabbitMQ على الطوابير والتبادلات وقواعد التوجيه. يركز NATS على السرعة والبساطة، وتضيف JetStream الاستمرارية وإعادة التشغيل.', 'بالنسبة لمسارات أحداث الأجهزة ذات النشر الواسع، كان NATS JetStream أنسب بفضل هرمية المواضيع وبساطته التشغيلية.', 'يفوز RabbitMQ عندما يكون التوجيه الشرطي وإقرارات المستهلكين جوهر المشكلة. اختر حسب شكل التوجيه لا حسب اختبار السرعة.']
      }
    }
  };
  const t = copy[language] || copy.en;
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  const back = document.querySelector('.back');
  const tag = document.querySelector('.pill');
  const title = document.querySelector('h1');
  if (back) back.innerHTML = '&larr; ' + t.back;
  if (tag) tag.textContent = t.tag;
  if (title && t.titles[slug]) title.textContent = t.titles[slug];
  if (t.titles[slug]) document.title = t.titles[slug] + ' — ' + t.profileName;
  if (t.body && t.body[slug]) {
    document.querySelectorAll('article h2').forEach((heading, index) => {
      if (t.body[slug][index]) heading.textContent = t.body[slug][index];
    });
  }
  if (t.paragraphs && t.paragraphs[slug]) {
    document.querySelectorAll('article p').forEach((paragraph, index) => {
      if (t.paragraphs[slug][index]) paragraph.textContent = t.paragraphs[slug][index];
    });
  }
  const table = document.querySelector('article table');
  if (table && language === 'fr') {
    table.innerHTML = '<tr><th></th><th>RabbitMQ</th><th>NATS (JetStream)</th></tr><tr><td>Garanties</td><td>Au moins une fois, DLQ intégrées</td><td>Au moins une fois avec JetStream</td></tr><tr><td>Relecture</td><td>Plugin ou logique applicative</td><td>Native, par temps ou séquence</td></tr><tr><td>Routage</td><td>Riche : échanges et bindings</td><td>Hiérarchie de sujets avec jokers</td></tr><tr><td>Empreinte</td><td>Plus lourde, VM Erlang</td><td>Binaire léger, clusters simples</td></tr>';
  } else if (table && language === 'ar') {
    table.innerHTML = '<tr><th></th><th>RabbitMQ</th><th>NATS (JetStream)</th></tr><tr><td>ضمانات التسليم</td><td>مرة واحدة على الأقل مع DLQ</td><td>مرة واحدة على الأقل مع JetStream</td></tr><tr><td>إعادة التشغيل</td><td>إضافة أو نمط على مستوى التطبيق</td><td>مدمج حسب الوقت أو التسلسل</td></tr><tr><td>التوجيه</td><td>متقدم عبر التبادلات والروابط</td><td>تسلسل مواضيع مع رموز عامة</td></tr><tr><td>الحجم التشغيلي</td><td>أكبر مع Erlang</td><td>ثنائي خفيف وسهل التجميع</td></tr>';
  }

  const control = document.createElement('div');
  control.style.cssText = 'position:fixed;top:18px;right:18px;z-index:10';
  control.innerHTML = '<button type="button" aria-label="' + t.language + '" title="' + t.language + '" style="width:36px;height:36px;border:1px solid var(--border-card);border-radius:6px;background:var(--surface-card);color:var(--text-heading);font-size:18px;cursor:pointer">◎</button>';
  const button = control.querySelector('button');
  button.addEventListener('click', () => {
    const next = language === 'en' ? 'fr' : language === 'fr' ? 'ar' : 'en';
    localStorage.setItem('portfolio-language', next);
    location.reload();
  });
  document.body.appendChild(control);
})();
