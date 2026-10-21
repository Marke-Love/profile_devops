/**
 * Every word on the site lives here, in all three languages.
 * Numbers are taken verbatim from the CV — do not round them.
 */

export type Lang = "ru" | "en" | "ka";
export type L = Record<Lang, string>;

export const langs: Lang[] = ["ru", "en", "ka"];

const t = (ru: string, en: string, ka: string): L => ({ ru, en, ka });

/* ---------------------------------------------------------------- person */

export const person = {
  first: t("Александр", "Alexander", "ალექსანდრე"),
  last: t("Маркелов", "Markelov", "მარკელოვი"),
  full: t("Александр Маркелов", "Alexander Markelov", "ალექსანდრე მარკელოვი"),
  role: t("DevOps-инженер", "DevOps Engineer", "DevOps ინჟინერი"),
  tenure: t("4 года 2 месяца", "4 yrs 2 mos", "4 წელი 2 თვე"),
  city: t("Санкт-Петербург", "Saint Petersburg", "სანქტ-პეტერბურგი"),
  status: t("Открыт к предложениям", "Open to offers", "ღია ვარ შეთავაზებებისთვის"),
  tagline: t(
    "Выстраиваю путь кода от коммита до продакшена — и слежу, чтобы он не ломался",
    "I build the path from commit to production — and keep it from breaking",
    "ვაშენებ კოდის გზას commit-იდან production-მდე — და ვზრუნავ, რომ არ გატყდეს",
  ),
  summary: t(
    "DevOps-инженер с 4+ годами коммерческого опыта и сильным бэкграундом в Python-разработке. CI/CD-пайплайны, контейнеризация, деплой в Kubernetes, инфраструктура как код, мониторинг и алертинг.",
    "DevOps engineer with 4+ years of commercial experience and a strong background in Python development. CI/CD pipelines, containers, Kubernetes deployments, infrastructure as code, monitoring and alerting.",
    "DevOps ინჟინერი 4+ წლიანი კომერციული გამოცდილებით და Python-დეველოპმენტის ძლიერი ბაზით. CI/CD პაიპლაინები, კონტეინერიზაცია, Kubernetes-ში დეპლოი, ინფრასტრუქტურა როგორც კოდი, მონიტორინგი და ალერტინგი.",
  ),
  summary2: t(
    "Работал с микросервисной архитектурой (5 сервисов, RabbitMQ, PostgreSQL, Redis) и критичной инфраструктурой медицинского учреждения. Понимаю приложение изнутри, поэтому говорю с разработчиками на одном языке и решаю проблемы надёжности и производительности на всех уровнях — от кода и запросов к БД до сети и серверов.",
    "I have worked with a microservice platform (5 services, RabbitMQ, PostgreSQL, Redis) and with the critical infrastructure of a hospital. I understand applications from the inside, so I speak the developers' language and fix reliability and performance at every level — from code and database queries to the network and servers.",
    "ვმუშაობდი მიკროსერვისულ არქიტექტურასთან (5 სერვისი, RabbitMQ, PostgreSQL, Redis) და სამედიცინო დაწესებულების კრიტიკულ ინფრასტრუქტურასთან. აპლიკაციას შიგნიდან ვიცნობ, ამიტომ დეველოპერებთან ერთ ენაზე ვსაუბრობ და საიმედოობისა და წარმადობის პრობლემებს ყველა დონეზე ვაგვარებ — კოდიდან და მონაცემთა ბაზის მოთხოვნებიდან ქსელამდე და სერვერებამდე.",
  ),
};

/* -------------------------------------------------------------- contacts */

export const contacts = {
  phone: { value: "+7 (921) 650-49-35", href: "tel:+79216504935" },
  email: { value: "mrklv001@yandex.ru", href: "mailto:mrklv001@yandex.ru" },
  telegram: { value: "@Mrklv001", href: "https://t.me/Mrklv001" },
};

export const preferences: { label: L; value: L }[] = [
  {
    label: t("Город", "City", "ქალაქი"),
    value: t("Санкт-Петербург", "Saint Petersburg", "სანქტ-პეტერბურგი"),
  },
  {
    label: t("Формат", "Work format", "ფორმატი"),
    value: t("Удалённо или офис", "Remote or on-site", "დისტანციურად ან ოფისში"),
  },
  {
    label: t("Командировки", "Business trips", "მივლინებები"),
    value: t("Готов", "Ready to travel", "მზად ვარ"),
  },
];

/* --------------------------------------------------------- why I fit */

export const focus: { id: string; title: L; text: L }[] = [
  {
    id: "cicd",
    title: t("CI/CD и автоматизация релизов", "CI/CD and release automation", "CI/CD და რელიზების ავტომატიზაცია"),
    text: t(
      "Строю пайплайны в GitLab CI и GitHub Actions: сборка Docker-образов, тесты, сканирование уязвимостей, деплой по окружениям (dev → stage → prod) с возможностью быстрого отката.",
      "I build pipelines in GitLab CI and GitHub Actions: Docker image builds, tests, vulnerability scanning, and deployments across environments (dev → stage → prod) with a fast rollback.",
      "ვაწყობ პაიპლაინებს GitLab CI-სა და GitHub Actions-ში: Docker-იმიჯების აწყობა, ტესტები, მოწყვლადობების სკანირება, დეპლოი გარემოების მიხედვით (dev → stage → prod) სწრაფი დაბრუნების შესაძლებლობით.",
    ),
  },
  {
    id: "k8s",
    title: t("Kubernetes и контейнеризация", "Kubernetes and containers", "Kubernetes და კონტეინერიზაცია"),
    text: t(
      "Упаковываю сервисы в Docker, пишу Helm-чарты, настраиваю деплой, лимиты ресурсов, health-checks и rolling update в Kubernetes.",
      "I package services in Docker, write Helm charts, and set up deployments, resource limits, health checks and rolling updates in Kubernetes.",
      "სერვისებს ვფუთავ Docker-ში, ვწერ Helm-ჩარტებს, ვაწყობ დეპლოის, რესურსების ლიმიტებს, health-check-ებს და rolling update-ს Kubernetes-ში.",
    ),
  },
  {
    id: "iac",
    title: t("Infrastructure as Code", "Infrastructure as Code", "Infrastructure as Code"),
    text: t(
      "Описываю инфраструктуру в Terraform, конфигурирую серверы ролями Ansible — окружения воспроизводимы и поднимаются без ручных действий.",
      "I describe infrastructure in Terraform and configure servers with Ansible roles — environments are reproducible and come up with no manual steps.",
      "ინფრასტრუქტურას აღვწერ Terraform-ში, სერვერებს ვაკონფიგურირებ Ansible-ის როლებით — გარემოები განმეორებადია და ხელით მოქმედებების გარეშე იქმნება.",
    ),
  },
  {
    id: "observability",
    title: t("Observability и инциденты", "Observability and incidents", "Observability და ინციდენტები"),
    text: t(
      "Prometheus + Alertmanager + Grafana для метрик и алертов, ELK для логов. Сократил среднее время диагностики инцидентов с 3 часов до 45 минут.",
      "Prometheus + Alertmanager + Grafana for metrics and alerts, ELK for logs. Cut average incident diagnosis time from 3 hours to 45 minutes.",
      "Prometheus + Alertmanager + Grafana მეტრიკებისა და ალერტებისთვის, ELK ლოგებისთვის. ინციდენტების დიაგნოსტიკის საშუალო დრო 3 საათიდან 45 წუთამდე შევამცირე.",
    ),
  },
  {
    id: "reliability",
    title: t("Надёжность и производительность", "Reliability and performance", "საიმედოობა და წარმადობა"),
    text: t(
      "Перевёл межсервисное взаимодействие на RabbitMQ: задержка 800 → 450 мс, таймауты −90%; ускорил ключевые эндпоинты с 1,5 с до 400 мс, снизил нагрузку на PostgreSQL на 60%.",
      "Moved inter-service communication to RabbitMQ: latency 800 → 450 ms, timeouts −90%; sped up key endpoints from 1.5 s to 400 ms and cut PostgreSQL load by 60%.",
      "სერვისებს შორის კომუნიკაცია RabbitMQ-ზე გადავიტანე: დაყოვნება 800 → 450 ms, ტაიმაუტები −90%; საკვანძო ენდპოინტები 1,5 წმ-დან 400 ms-მდე დავაჩქარე, PostgreSQL-ზე დატვირთვა 60%-ით შევამცირე.",
    ),
  },
  {
    id: "automation",
    title: t("Автоматизация", "Automation", "ავტომატიზაცია"),
    text: t(
      "Python и Bash для рутинных задач: скрипты обслуживания, интеграции, автоматическая обработка 200+ документов в месяц без участия человека.",
      "Python and Bash for routine work: maintenance scripts, integrations, and automatic processing of 200+ documents a month with no human involvement.",
      "Python და Bash რუტინული ამოცანებისთვის: მომსახურების სკრიპტები, ინტეგრაციები, თვეში 200+ დოკუმენტის ავტომატური დამუშავება ადამიანის ჩარევის გარეშე.",
    ),
  },
  {
    id: "dev",
    title: t("Про переход из разработки", "Coming from development", "დეველოპმენტიდან გადმოსვლაზე"),
    text: t(
      "Больше 4 лет я не только писал сервисы, но и сам собирал, деплоил и мониторил их. Поэтому вижу инфраструктуру глазами разработчика: знаю, где на самом деле ломается прод, и умею чинить это не только конфигами, но и кодом.",
      "For over 4 years I not only wrote services but also built, deployed and monitored them myself. So I see infrastructure through a developer's eyes: I know where production really breaks, and I can fix it with code, not just with configs.",
      "4 წელზე მეტია არა მხოლოდ სერვისებს ვწერდი, არამედ თავად ვაწყობდი, ვადეპლოიებდი და ვაკვირდებოდი მათ. ამიტომ ინფრასტრუქტურას დეველოპერის თვალით ვხედავ: ვიცი, სად ტყდება სინამდვილეში production და შემიძლია გამოვასწორო არა მხოლოდ კონფიგებით, არამედ კოდითაც.",
    ),
  },
];

/* ------------------------------------------------------- headline impact */

export type Metric = {
  id: string;
  from?: number;
  to: number;
  suffix: L;
  prefix?: string;
  decimals?: number;
  label: L;
  note: L;
};

export const metrics: Metric[] = [
  {
    id: "diagnosis",
    from: 180,
    to: 45,
    suffix: t("мин", "min", "წთ"),
    label: t("Диагностика инцидента", "Incident diagnosis", "ინციდენტის დიაგნოსტიკა"),
    note: t("Prometheus, Grafana, ELK", "Prometheus, Grafana, ELK", "Prometheus, Grafana, ELK"),
  },
  {
    id: "latency",
    from: 800,
    to: 450,
    suffix: t("мс", "ms", "ms"),
    label: t("Задержка между сервисами", "Inter-service latency", "სერვისებს შორის დაყოვნება"),
    note: t("5 микросервисов, переход на RabbitMQ", "5 microservices moved to RabbitMQ", "5 მიკროსერვისი, გადასვლა RabbitMQ-ზე"),
  },
  {
    id: "timeouts",
    to: 90,
    prefix: "−",
    suffix: t("%", "%", "%"),
    label: t("Таймаутов", "Timeouts", "ტაიმაუტები"),
    note: t("после перехода на события", "after the move to events", "მოვლენებზე გადასვლის შემდეგ"),
  },
  {
    id: "db",
    to: 60,
    prefix: "−",
    suffix: t("%", "%", "%"),
    label: t("Нагрузка на PostgreSQL", "PostgreSQL load", "დატვირთვა PostgreSQL-ზე"),
    note: t("индексы и кеш в Redis", "indexes and a Redis cache", "ინდექსები და ქეში Redis-ში"),
  },
  {
    id: "docs",
    to: 200,
    suffix: t("+/мес", "+/mo", "+/თვე"),
    label: t("Документов без человека", "Documents, hands-free", "დოკუმენტი ადამიანის გარეშე"),
    note: t("отчётность в ведомства", "regulatory reporting", "ანგარიშგება უწყებებში"),
  },
];

/* -------------------------------------------------------------- hero code */

export type Snippet = {
  /** Shown as the tab label; a file path reads truer than "Example 1". */
  file: string;
  lang: "yaml" | "hcl";
  note: L;
  /** All of them are 11 lines, so the panel never changes height. */
  code: string;
};

export const snippets: Snippet[] = [
  {
    file: ".gitlab-ci.yml",
    lang: "yaml",
    note: t(
      "Образ собирается один раз, проходит Trivy и уходит в прод через helm --atomic — с автооткатом",
      "The image is built once, passes Trivy and reaches prod via helm --atomic — with automatic rollback",
      "იმიჯი ერთხელ იწყობა, გადის Trivy-ს და production-ში helm --atomic-ით გადის — ავტომატური დაბრუნებით",
    ),
    code: `variables: { IMG: "$CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA" }
stages: [build, scan, deploy]
build:
  stage: build
  script: docker build -t $IMG . && docker push $IMG
scan:
  stage: scan
  script: trivy image --exit-code 1 --severity CRITICAL $IMG
deploy:prod:
  stage: deploy
  script: helm upgrade api ./chart --atomic --set image=$IMG`,
  },
  {
    file: "chart/values.yaml",
    lang: "yaml",
    note: t(
      "Rolling update без простоя: трафик получает только под, прошедший readiness",
      "Zero-downtime rolling update: only a pod that passed readiness gets traffic",
      "Rolling update შეფერხების გარეშე: ტრაფიკს მხოლოდ readiness-გავლილი პოდი იღებს",
    ),
    code: `replicaCount: 3
strategy:
  rollingUpdate: { maxSurge: 1, maxUnavailable: 0 }
resources:
  requests: { cpu: 200m, memory: 256Mi }
  limits: { cpu: "1", memory: 512Mi }
readinessProbe:
  httpGet: { path: /health/ready, port: http }
  periodSeconds: 5
livenessProbe:
  httpGet: { path: /health/live, port: http }`,
  },
  {
    file: "infra/main.tf",
    lang: "hcl",
    note: t(
      "Три окружения из одного модуля — отличаются только параметрами",
      "Three environments from one module — only the parameters differ",
      "სამი გარემო ერთი მოდულიდან — განსხვავდება მხოლოდ პარამეტრებით",
    ),
    code: `module "env" {
  source   = "./modules/environment"
  for_each = toset(["dev", "stage", "prod"])
  name     = each.key
  nodes    = each.key == "prod" ? 3 : 1
  flavor   = each.key == "prod" ? "standard-4" : "standard-2"
  ssh_keys = var.admin_keys
}
output "ingress_ips" {
  value = { for k, m in module.env : k => m.ingress_ip }
}`,
  },
  {
    file: "alerts/rules.yml",
    lang: "yaml",
    note: t(
      "Алерты на ошибки и растущие очереди RabbitMQ — через Alertmanager в Telegram",
      "Alerts on errors and growing RabbitMQ queues — via Alertmanager to Telegram",
      "ალერტები შეცდომებზე და მზარდ RabbitMQ რიგებზე — Alertmanager-ით Telegram-ში",
    ),
    code: `groups:
  - name: api
    rules:
      - alert: HighErrorRate
        expr: job:http_errors:ratio5m > 0.05
        for: 5m
        labels: { severity: critical }
      - alert: QueueBacklog
        expr: rabbitmq_queue_messages_ready > 1000
        for: 10m
        annotations: { summary: "{{ $labels.queue }} backlog" }`,
  },
];

/* ------------------------------------------------------------- experience */

export type Job = {
  id: string;
  company: L;
  companyNote?: L;
  position: L;
  place: L;
  period: L;
  duration: L;
  start: string;
  end: string;
  tags?: L[];
  site?: { label: string; href: string };
  achievements: L[];
  built: L[];
  stack: string[];
};

export const jobs: Job[] = [
  {
    id: "kvantron",
    company: t("Квантрон", "Kvantron", "კვანტრონი"),
    companyNote: t(
      "IT, системная интеграция и разработка ПО; микросервисная платформа из 5 сервисов",
      "IT, systems integration and software development; a platform of 5 microservices",
      "IT, სისტემური ინტეგრაცია და პროგრამული უზრუნველყოფის შემუშავება; 5 მიკროსერვისის პლატფორმა",
    ),
    position: t("DevOps-инженер", "DevOps Engineer", "DevOps ინჟინერი"),
    place: t("Санкт-Петербург", "Saint Petersburg", "სანქტ-პეტერბურგი"),
    period: t("Май 2025 — Май 2026", "May 2025 — May 2026", "მაისი 2025 — მაისი 2026"),
    duration: t("1 год 1 месяц", "1 yr 1 mo", "1 წელი 1 თვე"),
    start: "2025-05",
    end: "2026-05",
    tags: [
      t("5 микросервисов", "5 microservices", "5 მიკროსერვისი"),
      t("Kubernetes", "Kubernetes", "Kubernetes"),
    ],
    achievements: [
      t(
        "Внедрил мониторинг на Prometheus + Grafana с алертингом через Alertmanager в Telegram (latency, error rate, длина очередей RabbitMQ, ресурсы нод) и централизованное логирование в ELK — среднее время диагностики инцидентов сократилось с 3 часов до 45 минут",
        "Introduced Prometheus + Grafana monitoring with Alertmanager alerts to Telegram (latency, error rate, RabbitMQ queue depth, node resources) and centralised logging in ELK — average incident diagnosis time dropped from 3 hours to 45 minutes",
        "დავნერგე მონიტორინგი Prometheus + Grafana-ზე, ალერტებით Alertmanager-ის მეშვეობით Telegram-ში (latency, error rate, RabbitMQ რიგების სიგრძე, ნოდების რესურსები) და ცენტრალიზებული ლოგირება ELK-ში — ინციდენტების დიაგნოსტიკის საშუალო დრო 3 საათიდან 45 წუთამდე შემცირდა",
      ),
      t(
        "Перевёл синхронное REST-взаимодействие 5 микросервисов на событийную модель через RabbitMQ: задержка снизилась с 800 до 450 мс, количество таймаутов — на 90%",
        "Moved synchronous REST between 5 microservices to an event-driven model over RabbitMQ: latency fell from 800 to 450 ms and timeouts by 90%",
        "5 მიკროსერვისის სინქრონული REST-კომუნიკაცია RabbitMQ-ზე დაფუძნებულ მოვლენების მოდელზე გადავიტანე: დაყოვნება 800-დან 450 ms-მდე შემცირდა, ტაიმაუტები — 90%-ით",
      ),
      t(
        "Вынес тяжёлые операции в фоновые воркеры (генерация документов, интеграции, уведомления): до 2000 задач в сутки без блокировки API",
        "Moved heavy operations to background workers (document generation, integrations, notifications): up to 2,000 jobs a day without blocking the API",
        "მძიმე ოპერაციები ფონურ ვორკერებში გავიტანე (დოკუმენტების გენერაცია, ინტეგრაციები, შეტყობინებები): დღეში 2000-მდე ამოცანა API-ის დაბლოკვის გარეშე",
      ),
      t(
        "Оптимизировал PostgreSQL (композитные индексы, переписывание JOIN, устранение N+1) и внедрил кеширование в Redis: ответ ключевых эндпоинтов 1,5 с → 400 мс, нагрузка на БД −60%, стабильные 200 мс под нагрузкой",
        "Tuned PostgreSQL (composite indexes, rewritten JOINs, N+1 removal) and added Redis caching: key endpoints 1.5 s → 400 ms, database load −60%, a steady 200 ms under load",
        "PostgreSQL-ის ოპტიმიზაცია (კომპოზიტური ინდექსები, JOIN-ების გადაწერა, N+1-ის აღმოფხვრა) და Redis-ში ქეშირების დანერგვა: საკვანძო ენდპოინტები 1,5 წმ → 400 ms, ბაზაზე დატვირთვა −60%, სტაბილური 200 ms დატვირთვისას",
      ),
    ],
    built: [
      t(
        "Построил CI/CD-пайплайны в GitLab CI для 5 микросервисов: сборка Docker-образов, unit-тесты (Pytest), сканирование образов (Trivy), публикация в Container Registry и автоматический деплой по окружениям",
        "Built GitLab CI pipelines for 5 microservices: Docker image builds, unit tests (Pytest), image scanning (Trivy), publishing to the Container Registry and automatic deployment across environments",
        "ავაწყე CI/CD პაიპლაინები GitLab CI-ში 5 მიკროსერვისისთვის: Docker-იმიჯების აწყობა, unit-ტესტები (Pytest), იმიჯების სკანირება (Trivy), Container Registry-ში გამოქვეყნება და ავტომატური დეპლოი გარემოების მიხედვით",
      ),
      t(
        "Перевёл деплой сервисов в Kubernetes: написал Helm-чарты (Deployment, Service, Ingress, ConfigMap/Secret), настроил liveness/readiness-пробы, лимиты ресурсов и rolling update без простоя",
        "Moved service deployments to Kubernetes: wrote Helm charts (Deployment, Service, Ingress, ConfigMap/Secret), set up liveness/readiness probes, resource limits and zero-downtime rolling updates",
        "სერვისების დეპლოი Kubernetes-ში გადავიტანე: დავწერე Helm-ჩარტები (Deployment, Service, Ingress, ConfigMap/Secret), დავაყენე liveness/readiness პრობები, რესურსების ლიმიტები და rolling update შეფერხების გარეშე",
      ),
      t(
        "Описал инфраструктуру окружений в Terraform, автоматизировал настройку серверов ролями Ansible (Docker, Nginx, node_exporter, пользователи и доступы)",
        "Described environment infrastructure in Terraform and automated server setup with Ansible roles (Docker, Nginx, node_exporter, users and access)",
        "გარემოების ინფრასტრუქტურა Terraform-ში აღვწერე, სერვერების კონფიგურაცია Ansible-ის როლებით ავტომატიზირე (Docker, Nginx, node_exporter, მომხმარებლები და წვდომები)",
      ),
    ],
    stack: [
      "Docker", "Kubernetes", "Helm", "GitLab CI", "Terraform", "Ansible", "Prometheus",
      "Alertmanager", "Grafana", "ELK", "Nginx", "PostgreSQL", "Redis", "RabbitMQ",
      "Python", "Bash", "Linux",
    ],
  },
  {
    id: "dib3",
    company: t(
      "СПб ГБУЗ «Детская инфекционная больница №3»",
      "Children's Infectious Diseases Hospital No. 3",
      "ბავშვთა ინფექციური საავადმყოფო №3",
    ),
    companyNote: t(
      "Медицина; МИС «Самсон», федеральные интеграции",
      "Healthcare; Samson medical information system, federal integrations",
      "მედიცინა; სამედიცინო საინფორმაციო სისტემა «სამსონი», ფედერალური ინტეგრაციები",
    ),
    position: t("DevOps-инженер", "DevOps Engineer", "DevOps ინჟინერი"),
    place: t("Санкт-Петербург", "Saint Petersburg", "სანქტ-პეტერბურგი"),
    period: t("Апрель 2022 — Май 2025", "April 2022 — May 2025", "აპრილი 2022 — მაისი 2025"),
    duration: t("3 года 2 месяца", "3 yrs 2 mos", "3 წელი 2 თვე"),
    start: "2022-04",
    end: "2025-05",
    tags: [
      t("Техлид команды 3–4 человека", "Tech lead, team of 3–4", "3–4 კაციანი გუნდის ტექლიდი"),
      t("Критичная инфраструктура", "Critical infrastructure", "კრიტიკული ინფრასტრუქტურა"),
    ],
    site: { label: "dib3.spb.ru", href: "https://dib3.spb.ru/" },
    achievements: [
      t(
        "Построил с нуля автоматизированную систему отправки отчётности в контролирующие ведомства: 200+ документов в месяц обрабатываются без участия человека, доля успешной обработки выросла с ~0% до 80%+",
        "Built regulatory reporting automation from scratch: 200+ documents a month are processed with no human involvement, and the success rate rose from ~0% to 80%+",
        "ნულიდან ავაწყე მაკონტროლებელ უწყებებში ანგარიშგების გაგზავნის ავტომატიზებული სისტემა: თვეში 200+ დოკუმენტი მუშავდება ადამიანის ჩარევის გარეშე, წარმატებული დამუშავების წილი ~0%-დან 80%+-მდე გაიზარდა",
      ),
      t(
        "Подключил учреждение к федеральной системе экстренной медпомощи (СЭМП) через API-интеграцию — 100+ врачей и сотрудников получили доступ к актуальным данным",
        "Connected the hospital to the federal emergency care system (SEMP) through an API integration — 100+ doctors and staff got access to live data",
        "დაწესებულება API-ინტეგრაციით მივაერთე სასწრაფო სამედიცინო დახმარების ფედერალურ სისტემას (SEMP) — 100+ ექიმმა და თანამშრომელმა აქტუალურ მონაცემებზე წვდომა მიიღო",
      ),
      t(
        "Связал МИС «Самсон» со сторонней больницей через REST API: межбольничный обмен результатами анализов в реальном времени без ручного переноса данных",
        "Connected the Samson medical information system to another hospital over REST API: real-time exchange of test results with no manual data transfer",
        "სამედიცინო საინფორმაციო სისტემა «სამსონი» REST API-ით დავაკავშირე სხვა საავადმყოფოსთან: ანალიზების შედეგების გაცვლა რეალურ დროში, მონაცემების ხელით გადატანის გარეშე",
      ),
      t(
        "Техлид команды из 3–4 человек: декомпозиция задач, код-ревью, координация с медицинским персоналом как заказчиком",
        "Tech lead of a 3–4 person team: task breakdown, code review, coordination with medical staff as the client",
        "3–4 კაციანი გუნდის ტექლიდი: ამოცანების დეკომპოზიცია, კოდ-რევიუ, სამედიცინო პერსონალთან, როგორც დამკვეთთან, კოორდინაცია",
      ),
    ],
    built: [
      t(
        "Сопровождал серверную инфраструктуру больницы на Linux: развёртывание и обновление сервисов, диагностика сбоев, резервное копирование и восстановление, обеспечение стабильной работы",
        "Ran the hospital's Linux server infrastructure: deploying and updating services, diagnosing failures, backup and restore, keeping everything stable",
        "ვუძღვებოდი საავადმყოფოს სერვერულ ინფრასტრუქტურას Linux-ზე: სერვისების განთავსება და განახლება, გაუმართაობების დიაგნოსტიკა, სარეზერვო ასლები და აღდგენა, სტაბილური მუშაობის უზრუნველყოფა",
      ),
      t(
        "Контейнеризировал внутренние сервисы (Docker, Docker Compose) и настроил автодеплой через GitHub Actions — релизы стали воспроизводимыми и перестали требовать ручных действий на сервере",
        "Containerised internal services (Docker, Docker Compose) and set up automatic deployment via GitHub Actions — releases became reproducible and no longer needed manual work on the server",
        "შიდა სერვისების კონტეინერიზაცია (Docker, Docker Compose) და ავტოდეპლოის აწყობა GitHub Actions-ით — რელიზები განმეორებადი გახდა და სერვერზე ხელით მოქმედებას აღარ საჭიროებს",
      ),
      t(
        "Администрировал веб-ресурс dib3.spb.ru: Nginx, SSL/TLS-сертификаты, обновления, защита персональных данных",
        "Administered the dib3.spb.ru website: Nginx, SSL/TLS certificates, updates, personal data protection",
        "ვმართავდი ვებ-რესურს dib3.spb.ru: Nginx, SSL/TLS სერტიფიკატები, განახლებები, პერსონალური მონაცემების დაცვა",
      ),
    ],
    stack: [
      "Linux", "Docker", "Docker Compose", "GitHub Actions", "Nginx", "PostgreSQL",
      "Redis", "Python", "FastAPI", "Bash", "Git",
    ],
  },
];

/* ------------------------------------------------------------------ cases */

export type Chart = {
  unit: L;
  before: number;
  after: number;
  /** true when a lower number is the better one */
  lowerIsBetter: boolean;
};

/** A case either has numbers to compare, or a sequence of stages to walk. */
export type Pipeline = {
  caption: L;
  stages: string[];
};

export type Case = {
  id: string;
  at: L;
  title: L;
  problem: L;
  action: L;
  result: L;
  chart?: Chart;
  pipeline?: Pipeline;
  tech: string[];
};

const kvantron = t("Квантрон", "Kvantron", "კვანტრონი");
const dib3 = t("Детская инфекционная больница №3", "Children's Hospital No. 3", "ბავშვთა საავადმყოფო №3");

export const cases: Case[] = [
  {
    id: "cicd",
    at: kvantron,
    title: t("Один путь от коммита до прода", "One path from commit to prod", "ერთი გზა commit-იდან production-მდე"),
    problem: t(
      "Пяти микросервисам нужен был единый и предсказуемый путь в продакшен: одинаковая сборка, обязательные проверки и деплой по окружениям, который можно быстро откатить.",
      "Five microservices needed one predictable path to production: the same build, mandatory checks, and environment-by-environment deploys that can be rolled back fast.",
      "ხუთ მიკროსერვისს production-მდე ერთიანი და პროგნოზირებადი გზა სჭირდებოდა: ერთნაირი აწყობა, სავალდებულო შემოწმებები და გარემოების მიხედვით დეპლოი სწრაფი დაბრუნების შესაძლებლობით.",
    ),
    action: t(
      "Построил пайплайны в GitLab CI: сборка Docker-образа, unit-тесты на Pytest, сканирование Trivy, публикация в Container Registry и автоматический деплой dev → stage → prod.",
      "Built GitLab CI pipelines: Docker image build, Pytest unit tests, Trivy scanning, publishing to the Container Registry and automatic deployment dev → stage → prod.",
      "ავაწყე პაიპლაინები GitLab CI-ში: Docker-იმიჯის აწყობა, unit-ტესტები Pytest-ზე, Trivy-ს სკანირება, Container Registry-ში გამოქვეყნება და ავტომატური დეპლოი dev → stage → prod.",
    ),
    result: t(
      "Каждый коммит всех пяти сервисов проходит один и тот же путь, уязвимый образ не доходит до прода, а релиз откатывается одной командой.",
      "Every commit in all five services takes the same path, a vulnerable image never reaches prod, and a release rolls back with a single command.",
      "ხუთივე სერვისის ყოველი commit ერთსა და იმავე გზას გადის, მოწყვლადი იმიჯი production-მდე ვერ აღწევს, რელიზი კი ერთი ბრძანებით ბრუნდება.",
    ),
    pipeline: {
      caption: t("Стадии пайплайна", "Pipeline stages", "პაიპლაინის ეტაპები"),
      stages: ["build", "test · pytest", "scan · trivy", "push · registry", "deploy · dev", "deploy · stage", "deploy · prod"],
    },
    tech: ["GitLab CI", "Docker", "Pytest", "Trivy", "Container Registry"],
  },
  {
    id: "k8s",
    at: kvantron,
    title: t("Переезд в Kubernetes", "Moving to Kubernetes", "Kubernetes-ზე გადასვლა"),
    problem: t(
      "Сервисы нужно было перевести в Kubernetes так, чтобы релиз не означал простой, а один прожорливый под не мог отнять ресурсы у соседей.",
      "The services had to move to Kubernetes so that a release never meant downtime and one greedy pod could not starve its neighbours.",
      "სერვისები Kubernetes-ში ისე უნდა გადასულიყო, რომ რელიზი შეფერხებას არ ნიშნავდეს, ერთ მომთხოვნ პოდს კი მეზობლებისთვის რესურსების წართმევა არ შეეძლოს.",
    ),
    action: t(
      "Написал Helm-чарты (Deployment, Service, Ingress, ConfigMap/Secret), настроил liveness/readiness-пробы, requests/limits и стратегию rolling update.",
      "Wrote Helm charts (Deployment, Service, Ingress, ConfigMap/Secret), set up liveness/readiness probes, requests/limits and a rolling update strategy.",
      "დავწერე Helm-ჩარტები (Deployment, Service, Ingress, ConfigMap/Secret), დავაყენე liveness/readiness პრობები, requests/limits და rolling update სტრატეგია.",
    ),
    result: t(
      "Релизы выкатываются без простоя: трафик получает только под, прошедший readiness, а упавший процесс перезапускается сам.",
      "Releases roll out with zero downtime: only a pod that passed readiness gets traffic, and a crashed process restarts on its own.",
      "რელიზები შეფერხების გარეშე გადის: ტრაფიკს მხოლოდ readiness-გავლილი პოდი იღებს, გათიშული პროცესი კი თავად გადაიტვირთება.",
    ),
    pipeline: {
      caption: t("Rolling update", "Rolling update", "Rolling update"),
      stages: ["helm upgrade", "pod v2 · starting", "readiness · ok", "traffic → v2", "pod v1 · drained"],
    },
    tech: ["Kubernetes", "Helm", "Docker", "Nginx Ingress"],
  },
  {
    id: "observability",
    at: kvantron,
    title: t("Метрики и логи вместо догадок", "Metrics and logs instead of guesswork", "მეტრიკები და ლოგები ვარაუდების ნაცვლად"),
    problem: t(
      "Инцидент означал ручной поиск по логам на разных машинах. Средняя диагностика занимала около трёх часов.",
      "An incident meant grepping logs by hand across machines. Diagnosis took around three hours on average.",
      "ინციდენტი ნიშნავდა ლოგების ხელით ძებნას სხვადასხვა მანქანაზე. საშუალო დიაგნოსტიკას დაახლოებით სამი საათი სჭირდებოდა.",
    ),
    action: t(
      "Поднял Prometheus + Grafana с алертами через Alertmanager в Telegram (latency, error rate, длина очередей RabbitMQ, ресурсы нод) и централизованное логирование в ELK.",
      "Set up Prometheus + Grafana with Alertmanager alerts to Telegram (latency, error rate, RabbitMQ queue depth, node resources) and centralised logging in ELK.",
      "ავამუშავე Prometheus + Grafana, ალერტებით Alertmanager-ით Telegram-ში (latency, error rate, RabbitMQ რიგების სიგრძე, ნოდების რესურსები) და ცენტრალიზებული ლოგირება ELK-ში.",
    ),
    result: t(
      "Среднее время диагностики — 45 минут вместо 3 часов. О деградации очередей команда узнаёт из алерта, а не от пользователей.",
      "Average diagnosis now takes 45 minutes instead of 3 hours. The team learns about queue degradation from an alert, not from users.",
      "საშუალო დიაგნოსტიკა — 45 წუთი 3 საათის ნაცვლად. რიგების დეგრადაციის შესახებ გუნდი ალერტიდან იგებს და არა მომხმარებლებისგან.",
    ),
    chart: {
      unit: t("минут на диагностику", "minutes to diagnose", "დიაგნოსტიკის წუთები"),
      before: 180,
      after: 45,
      lowerIsBetter: true,
    },
    tech: ["Prometheus", "Alertmanager", "Grafana", "ELK"],
  },
  {
    id: "events",
    at: kvantron,
    title: t("Синхронный REST → события", "Synchronous REST → events", "სინქრონული REST → მოვლენები"),
    problem: t(
      "Пять микросервисов ходили друг к другу синхронно по REST. Медленный сервис тормозил всю цепочку, под нагрузкой копились таймауты.",
      "Five microservices called each other synchronously over REST. One slow service stalled the whole chain, and timeouts piled up under load.",
      "ხუთი მიკროსერვისი ერთმანეთს სინქრონულად, REST-ით მიმართავდა. ნელი სერვისი მთელ ჯაჭვს აფერხებდა, დატვირთვისას ტაიმაუტები გროვდებოდა.",
    ),
    action: t(
      "Перевёл межсервисное взаимодействие на события через RabbitMQ и вынес тяжёлые операции в фоновые воркеры — до 2000 задач в сутки без блокировки API.",
      "Moved inter-service communication to events over RabbitMQ and pushed heavy operations into background workers — up to 2,000 jobs a day without blocking the API.",
      "სერვისებს შორის კომუნიკაცია RabbitMQ-ის მოვლენებზე გადავიტანე, მძიმე ოპერაციები კი ფონურ ვორკერებში — დღეში 2000-მდე ამოცანა API-ის დაბლოკვის გარეშე.",
    ),
    result: t(
      "Средняя задержка упала с 800 мс до 450 мс, количество таймаутов снизилось на 90%.",
      "Average latency dropped from 800 ms to 450 ms, and timeouts fell by 90%.",
      "საშუალო დაყოვნება 800 ms-დან 450 ms-მდე შემცირდა, ტაიმაუტების რაოდენობა — 90%-ით.",
    ),
    chart: {
      unit: t("мс", "ms", "ms"),
      before: 800,
      after: 450,
      lowerIsBetter: true,
    },
    tech: ["RabbitMQ", "Python", "Docker"],
  },
  {
    id: "postgres",
    at: kvantron,
    title: t("PostgreSQL и кеш в Redis", "PostgreSQL and a Redis cache", "PostgreSQL და ქეში Redis-ში"),
    problem: t(
      "Ключевые эндпоинты отвечали 1,5 секунды, база была узким местом и проседала под нагрузкой.",
      "Key endpoints answered in 1.5 seconds; the database was the bottleneck and sagged under load.",
      "საკვანძო ენდპოინტები 1,5 წამში პასუხობდნენ, ბაზა ვიწრო ადგილი იყო და დატვირთვისას ეცემოდა.",
    ),
    action: t(
      "Добавил композитные индексы, переписал JOIN-запросы, устранил N+1 и внедрил кеширование в Redis.",
      "Added composite indexes, rewrote JOIN queries, removed N+1 and introduced Redis caching.",
      "დავამატე კომპოზიტური ინდექსები, გადავწერე JOIN-მოთხოვნები, აღმოვფხვერი N+1 და დავნერგე ქეშირება Redis-ში.",
    ),
    result: t(
      "Ответ ключевых эндпоинтов — 400 мс вместо 1,5 с, нагрузка на БД −60%, стабильные 200 мс под нагрузкой.",
      "Key endpoints now answer in 400 ms instead of 1.5 s, database load is down 60%, and responses hold at 200 ms under load.",
      "საკვანძო ენდპოინტების პასუხი — 400 ms 1,5 წმ-ის ნაცვლად, ბაზაზე დატვირთვა −60%, სტაბილური 200 ms დატვირთვისას.",
    ),
    chart: {
      unit: t("мс на ответ", "ms per response", "ms პასუხზე"),
      before: 1500,
      after: 400,
      lowerIsBetter: true,
    },
    tech: ["PostgreSQL", "Redis", "EXPLAIN ANALYZE"],
  },
  {
    id: "reporting",
    at: dib3,
    title: t("Отчётность в ведомства без человека", "Regulatory reporting, hands-free", "ანგარიშგება უწყებებში ადამიანის გარეშე"),
    problem: t(
      "Отчётность в контролирующие ведомства собиралась и отправлялась вручную. Автоматически не проходило почти ничего.",
      "Reports to regulators were assembled and submitted by hand. Practically nothing went through automatically.",
      "მაკონტროლებელ უწყებებში ანგარიშგება ხელით გროვდებოდა და იგზავნებოდა. ავტომატურად თითქმის არაფერი გადიოდა.",
    ),
    action: t(
      "Построил с нуля систему на Python: сбор данных из МИС, генерация документов, отправка и разбор ответов. Упаковал в Docker, деплой — через GitHub Actions.",
      "Built a Python system from scratch: pulling data from the medical system, generating documents, submitting them and parsing the replies. Packaged in Docker, deployed via GitHub Actions.",
      "ნულიდან ავაწყე სისტემა Python-ზე: მონაცემების შეგროვება სამედიცინო სისტემიდან, დოკუმენტების გენერაცია, გაგზავნა და პასუხების დამუშავება. შეფუთულია Docker-ში, დეპლოი — GitHub Actions-ით.",
    ),
    result: t(
      "200+ документов в месяц обрабатываются без участия человека, доля успешной обработки выросла с ~0% до 80%+.",
      "200+ documents a month are processed with no human involvement, and the success rate went from ~0% to 80%+.",
      "თვეში 200+ დოკუმენტი მუშავდება ადამიანის ჩარევის გარეშე, წარმატებული დამუშავების წილი ~0%-დან 80%+-მდე გაიზარდა.",
    ),
    chart: {
      unit: t("% успешной обработки", "% processed successfully", "% წარმატებით დამუშავებული"),
      before: 0,
      after: 80,
      lowerIsBetter: false,
    },
    tech: ["Python", "FastAPI", "Docker", "GitHub Actions"],
  },
];

/* ------------------------------------------------------------------ stack */

export type SkillGroup = {
  id: string;
  label: L;
  items: { name: string; note: L }[];
};

export const stack: SkillGroup[] = [
  {
    id: "cicd",
    label: t("CI/CD", "CI/CD", "CI/CD"),
    items: [
      { name: "GitLab CI", note: t("пайплайны для 5 микросервисов", "pipelines for 5 microservices", "პაიპლაინები 5 მიკროსერვისისთვის") },
      { name: "GitHub Actions", note: t("автодеплой внутренних сервисов", "auto-deploy of internal services", "შიდა სერვისების ავტოდეპლოი") },
      { name: "Container Registry", note: t("версионированные образы", "versioned images", "ვერსიებიანი იმიჯები") },
      { name: "Trivy", note: t("сканирование образов в пайплайне", "image scanning in the pipeline", "იმიჯების სკანირება პაიპლაინში") },
    ],
  },
  {
    id: "containers",
    label: t("Контейнеры", "Containers", "კონტეინერები"),
    items: [
      { name: "Docker", note: t("упаковка всех сервисов", "packaging every service", "ყველა სერვისის შეფუთვა") },
      { name: "Docker Compose", note: t("окружения на одном сервере", "single-server environments", "გარემოები ერთ სერვერზე") },
      { name: "Kubernetes", note: t("пробы, лимиты, rolling update", "probes, limits, rolling updates", "პრობები, ლიმიტები, rolling update") },
      { name: "Helm", note: t("Deployment, Service, Ingress, Secret", "Deployment, Service, Ingress, Secret", "Deployment, Service, Ingress, Secret") },
    ],
  },
  {
    id: "iac",
    label: t("IaC", "IaC", "IaC"),
    items: [
      { name: "Terraform", note: t("окружения dev / stage / prod как код", "dev / stage / prod as code", "dev / stage / prod როგორც კოდი") },
      { name: "Ansible", note: t("роли: Docker, Nginx, node_exporter, доступы", "roles: Docker, Nginx, node_exporter, access", "როლები: Docker, Nginx, node_exporter, წვდომები") },
    ],
  },
  {
    id: "observability",
    label: t("Мониторинг", "Monitoring", "მონიტორინგი"),
    items: [
      { name: "Prometheus", note: t("метрики сервисов и нод", "service and node metrics", "სერვისებისა და ნოდების მეტრიკები") },
      { name: "Alertmanager", note: t("алерты в Telegram", "alerts to Telegram", "ალერტები Telegram-ში") },
      { name: "Grafana", note: t("latency, error rate, очереди", "latency, error rate, queues", "latency, error rate, რიგები") },
      { name: "ELK", note: t("централизованные логи, 3 ч → 45 мин", "central logs, 3 h → 45 min", "ცენტრალიზებული ლოგები, 3 სთ → 45 წთ") },
    ],
  },
  {
    id: "os",
    label: t("ОС и сети", "OS & network", "OS და ქსელი"),
    items: [
      { name: "Linux", note: t("Ubuntu, Debian — серверы в проде", "Ubuntu, Debian — production servers", "Ubuntu, Debian — production სერვერები") },
      { name: "systemd", note: t("сервисы и таймеры", "services and timers", "სერვისები და ტაიმერები") },
      { name: "Bash", note: t("скрипты обслуживания", "maintenance scripts", "მომსახურების სკრიპტები") },
      { name: "Nginx", note: t("reverse proxy, SSL/TLS", "reverse proxy, SSL/TLS", "reverse proxy, SSL/TLS") },
      { name: "TCP/IP · DNS · HTTP", note: t("диагностика сетевых проблем", "network troubleshooting", "ქსელური პრობლემების დიაგნოსტიკა") },
    ],
  },
  {
    id: "data",
    label: t("Данные и брокеры", "Data & brokers", "მონაცემები და ბროკერები"),
    items: [
      { name: "PostgreSQL", note: t("индексы, планы, −60% нагрузки", "indexes, plans, −60% load", "ინდექსები, გეგმები, −60% დატვირთვა") },
      { name: "MySQL", note: t("поддержка хранилищ", "storage support", "საცავების მხარდაჭერა") },
      { name: "Redis", note: t("кеш: 1,5 с → 400 мс", "cache: 1.5 s → 400 ms", "ქეში: 1,5 წმ → 400 ms") },
      { name: "RabbitMQ", note: t("события: 800 → 450 мс", "events: 800 → 450 ms", "მოვლენები: 800 → 450 ms") },
      { name: "Apache Kafka", note: t("потоковые события", "event streaming", "მოვლენების ნაკადები") },
    ],
  },
  {
    id: "code",
    label: t("Код", "Code", "კოდი"),
    items: [
      { name: "Python", note: t("FastAPI, asyncio — 4+ года", "FastAPI, asyncio — 4+ years", "FastAPI, asyncio — 4+ წელი") },
      { name: "Pytest", note: t("unit-тесты в пайплайне", "unit tests in the pipeline", "unit-ტესტები პაიპლაინში") },
    ],
  },
  {
    id: "tools",
    label: t("Инструменты", "Tools", "ინსტრუმენტები"),
    items: [
      { name: "Git", note: t("ветвление, код-ревью", "branching, code review", "ბრენჩინგი, კოდ-რევიუ") },
      { name: "GitLab", note: t("репозитории и CI", "repositories and CI", "რეპოზიტორიები და CI") },
      { name: "GitHub", note: t("репозитории и Actions", "repositories and Actions", "რეპოზიტორიები და Actions") },
      { name: "Jira", note: t("задачи и спринты", "tasks and sprints", "ამოცანები და სპრინტები") },
    ],
  },
];

/* -------------------------------------------------------------- education */

export type Study = {
  year: string;
  degree: L;
  school: L;
  faculty: L;
};

export const education: Study[] = [
  {
    year: "2024",
    degree: t("Магистратура", "Master's", "მაგისტრატურა"),
    school: t("Университет ИТМО", "ITMO University", "ITMO-ს უნივერსიტეტი"),
    faculty: t(
      "Факультет технологического менеджмента и инноваций, «Инноватика»",
      "Faculty of Technological Management and Innovation, Innovation Studies",
      "ტექნოლოგიური მენეჯმენტისა და ინოვაციების ფაკულტეტი, «ინოვატიკა»",
    ),
  },
  {
    year: "2022",
    degree: t("Бакалавриат", "Bachelor's", "ბაკალავრიატი"),
    school: t(
      "СПбГЭУ — Санкт-Петербургский государственный экономический университет",
      "Saint Petersburg State University of Economics",
      "სანქტ-პეტერბურგის სახელმწიფო ეკონომიკური უნივერსიტეტი",
    ),
    faculty: t("Факультет управления, «Менеджмент»", "Faculty of Management, Management", "მართვის ფაკულტეტი, «მენეჯმენტი»"),
  },
];

export const languages: { name: L; level: L }[] = [
  { name: t("Русский", "Russian", "რუსული"), level: t("Родной", "Native", "მშობლიური") },
  {
    name: t("Английский", "English", "ინგლისური"),
    level: t("B2 — upper-intermediate", "B2 — upper intermediate", "B2 — upper-intermediate"),
  },
];

/* ------------------------------------------------------------ ui strings */

export const ui = {
  nav: {
    about: t("О себе", "About", "ჩემ შესახებ"),
    experience: t("Опыт", "Experience", "გამოცდილება"),
    cases: t("Кейсы", "Cases", "ქეისები"),
    api: t("API", "API", "API"),
    stack: t("Стек", "Stack", "სტეკი"),
    education: t("Образование", "Education", "განათლება"),
    contact: t("Контакты", "Contact", "კონტაქტი"),
    sections: t("Разделы", "Sections", "განყოფილებები"),
  },
  langNames: t("Русский", "English", "ქართული"),
  /** What the switch shows. Georgian keeps its ISO code "ka" in the
      markup, but readers expect the country's "GE" on the button. */
  langLabels: t("ru", "en", "ge"),
  hero: {
    codeTitle: t("Инфраструктура как код", "Infrastructure as code", "ინფრასტრუქტურა როგორც კოდი"),
    writeTg: t("Написать в Telegram", "Message on Telegram", "მომწერეთ Telegram-ში"),
    call: t("Позвонить", "Call", "დარეკვა"),
  },
  impact: {
    eyebrow: t("Результаты в цифрах", "Impact in numbers", "შედეგები ციფრებში"),
    note: t(
      "Цифры из резюме — результаты измеримых изменений, а не оценки",
      "The numbers below are measured outcomes, not estimates",
      "ციფრები რეზიუმედანაა — გაზომვადი ცვლილებების შედეგები და არა შეფასებები",
    ),
  },
  about: {
    eyebrow: t("О себе", "About", "ჩემ შესახებ"),
    heading: t(
      "Инфраструктура, которую не чинят по ночам",
      "Infrastructure you don't fix at night",
      "ინფრასტრუქტურა, რომელსაც ღამით არ ასწორებენ",
    ),
    focus: t("Почему подхожу", "Why I fit", "რატომ ვარ შესაფერისი"),
  },
  experience: {
    eyebrow: t("Опыт работы", "Experience", "სამუშაო გამოცდილება"),
    heading: t("Где и что я строил", "Where I built things", "სად და რა ავაშენე"),
    achievements: t("Результаты", "Results", "შედეგები"),
    built: t("Что построил", "What I built", "რა ავაწყე"),
    stack: t("Стек", "Stack", "სტეკი"),
  },
  cases: {
    eyebrow: t("Разбор задач", "Case studies", "ამოცანების განხილვა"),
    heading: t("Было → стало", "Before → after", "იყო → გახდა"),
    count: t("задач", "cases", "ქეისი"),
    problem: t("Задача", "Problem", "ამოცანა"),
    action: t("Что сделал", "What I did", "რა გავაკეთე"),
    result: t("Результат", "Outcome", "შედეგი"),
    before: t("Было", "Before", "იყო"),
    after: t("Стало", "After", "გახდა"),
    lessTime: t("времени", "time", "დრო"),
    more: t("прирост", "gain", "ზრდა"),
    stages: t("стадий", "stages", "ეტაპი"),
  },
  api: {
    eyebrow: t("Тот же профиль, машиночитаемо", "The same profile, machine readable", "იგივე პროფილი, მანქანისთვის წასაკითხად"),
    heading: t("Запросите что угодно", "Query anything", "მოითხოვეთ ნებისმიერი რამ"),
    hint: t("Выберите эндпоинт", "Pick an endpoint", "აირჩიეთ ენდპოინტი"),
    sending: t("Запрос отправлен", "Request sent", "მოთხოვნა გაიგზავნა"),
  },
  stack: {
    eyebrow: t("Инструменты", "Tools", "ინსტრუმენტები"),
    heading: t("Чем пользуюсь", "What I work with", "რითაც ვმუშაობ"),
    all: t("Всё", "All", "ყველა"),
    count: t("технологий", "technologies", "ტექნოლოგია"),
  },
  education: {
    eyebrow: t("Образование", "Education", "განათლება"),
    heading: t("Учился управлять и строить", "Trained to manage and to build", "ვსწავლობდი მართვასა და შექმნას"),
    languages: t("Языки", "Languages", "ენები"),
  },
  contact: {
    eyebrow: t("Контакты", "Contact", "კონტაქტი"),
    heading: t("Давайте поговорим", "Let's talk", "მოდით, ვისაუბროთ"),
    phone: t("Телефон", "Phone", "ტელეფონი"),
    copy: t("Скопировать", "Copy", "კოპირება"),
    copied: t("Скопировано", "Copied", "დაკოპირდა"),
    marquee: t("Открыт к предложениям", "Open to offers", "ღია ვარ შეთავაზებებისთვის"),
  },
};

/** Sections in scroll order, used by the rail and the scroll spy. */
export const sections = [
  { id: "about", label: ui.nav.about },
  { id: "experience", label: ui.nav.experience },
  { id: "cases", label: ui.nav.cases },
  { id: "api", label: ui.nav.api },
  { id: "stack", label: ui.nav.stack },
  { id: "education", label: ui.nav.education },
  { id: "contact", label: ui.nav.contact },
] as const;
